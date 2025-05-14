
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MessageCircle, X, Send, CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChatMessage, ChatOption, ConversationStep } from '@/lib/chatbot-types';
import { conversationFlow, initialStepId } from './conversation-data';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStepId, setCurrentStepId] = useState<string>(initialStepId);
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const initialBotMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      text: conversationFlow[initialStepId].botMessage,
      sender: 'bot',
      timestamp: Date.now(),
    };
    setMessages([initialBotMessage]);
    setCurrentOptions(conversationFlow[initialStepId].options);
  }, []);

  const handleOptionClick = (option: ChatOption) => {
    // Add user message (the option text)
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: option.text,
      sender: 'user',
      timestamp: Date.now(),
    };
    
    let newMessages = [...messages, userMessage];

    if (option.link) {
      // Handle link navigation (internal or external)
      // For this example, we'll just add a bot message and update options
      // Actual navigation would happen if it's an internal link using NextLink
      // or window.open for external
      const botResponseLink: ChatMessage = {
        id: `bot-${Date.now()}-link`,
        text: `Okay, you can find more information at: ${option.text}.`,
        sender: 'bot',
        timestamp: Date.now(),
      };
      newMessages = [...newMessages, botResponseLink];
      
      if (option.nextStepId && conversationFlow[option.nextStepId]) {
        const nextStep = conversationFlow[option.nextStepId];
         const followupBotMessage: ChatMessage = {
          id: `bot-${Date.now()}-followup`,
          text: nextStep.botMessage,
          sender: 'bot',
          timestamp: Date.now(),
        };
        newMessages = [...newMessages, followupBotMessage];
        setMessages(newMessages);
        setCurrentStepId(option.nextStepId);
        setCurrentOptions(nextStep.options);
      } else {
         // Default fallback if no specific next step after link
        const fallbackStep = conversationFlow['link_followup'] || conversationFlow['anything_else_short'];
        const followupBotMessage: ChatMessage = {
          id: `bot-${Date.now()}-fallback`,
          text: fallbackStep.botMessage,
          sender: 'bot',
          timestamp: Date.now(),
        };
        newMessages = [...newMessages, followupBotMessage];
        setMessages(newMessages);
        setCurrentStepId(fallbackStep.id);
        setCurrentOptions(fallbackStep.options);
      }

    } else if (option.nextStepId && conversationFlow[option.nextStepId]) {
      const nextStep = conversationFlow[option.nextStepId];
      const botResponse: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: nextStep.botMessage,
        sender: 'bot',
        timestamp: Date.now(),
      };
      newMessages = [...newMessages, botResponse];
      setMessages(newMessages);
      setCurrentStepId(option.nextStepId);
      setCurrentOptions(nextStep.options);
    } else {
      // Fallback or end of conversation branch
      const fallbackMessage: ChatMessage = {
        id: `bot-${Date.now()}-fallback`,
        text: "I'm not sure how to respond to that. Let's try something else.",
        sender: 'bot',
        timestamp: Date.now(),
      };
      newMessages = [...newMessages, fallbackMessage];
      setMessages(newMessages);
      setCurrentStepId(initialStepId); // Reset to start
      setCurrentOptions(conversationFlow[initialStepId].options);
    }
  };

  if (typeof window === 'undefined') {
    return null; // Don't render on server
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-[110] bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[70vh] sm:h-[calc(100vh-6rem)] max-h-[600px] bg-card border border-border shadow-2xl rounded-t-lg sm:rounded-lg flex flex-col z-[110] overflow-hidden animate-in fade-in-0 slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b bg-primary text-primary-foreground">
            <h3 className="font-semibold text-lg flex items-center">
              <MessageCircle size={20} className="mr-2" /> VistraBot
            </h3>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={20} />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-background">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={cn(
                  "flex animate-in fade-in-0 slide-in-from-bottom-3 duration-500",
                  index > 0 ? `animation-delay-${Math.min(index * 100, 500)}` : '' // Stagger animation
                )}
                style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
              >
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-[80%]",
                    msg.sender === 'bot'
                      ? "bg-muted text-muted-foreground self-start rounded-bl-none"
                      : "bg-primary text-primary-foreground self-end rounded-br-none ml-auto"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options Area */}
          {!conversationFlow[currentStepId]?.isEndingStep && currentOptions.length > 0 && (
            <div className="p-3 border-t bg-card space-y-2 max-h-48 overflow-y-auto">
              {currentOptions.map((option) =>
                option.link ? (
                  <Link key={option.id} href={option.link} passHref legacyBehavior>
                    <a 
                      target={option.isExternalLink ? "_blank" : "_self"} 
                      rel={option.isExternalLink ? "noopener noreferrer" : ""}
                      onClick={() => {
                        handleOptionClick(option);
                        if(!option.nextStepId) setIsOpen(false); // Close chat if it's a direct link without followup
                      }}
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full justify-start text-left h-auto py-2 whitespace-normal">
                        {option.text}
                      </Button>
                    </a>
                  </Link>
                ) : (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-2 whitespace-normal"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.text}
                  </Button>
                )
              )}
            </div>
          )}
           {conversationFlow[currentStepId]?.isEndingStep && (
             <div className="p-3 border-t bg-card">
                {currentOptions.map((option) => (
                     <Button
                        key={option.id}
                        variant="outline"
                        className="w-full justify-start text-left h-auto py-2 whitespace-normal"
                        onClick={() => handleOptionClick(option)}
                      >
                       <CornerDownLeft size={16} className="mr-2"/> {option.text}
                      </Button>
                ))}
             </div>
           )}
        </div>
      )}
      <style jsx global>{`
        .animation-delay-100 { animation-delay: 100ms !important; }
        .animation-delay-200 { animation-delay: 200ms !important; }
        .animation-delay-300 { animation-delay: 300ms !important; }
        .animation-delay-400 { animation-delay: 400ms !important; }
        .animation-delay-500 { animation-delay: 500ms !important; }
      `}</style>
    </>
  );
}
