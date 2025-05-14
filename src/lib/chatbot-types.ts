
export type ChatMessage = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
};

export type ChatOption = {
  id: string;
  text: string;
  nextStepId?: string; // ID of the next conversation step
  link?: string; // For external or internal navigation
  isExternalLink?: boolean; // To open in new tab
};

export type ConversationStep = {
  id: string;
  botMessage: string;
  options: ChatOption[];
  isEndingStep?: boolean; // If true, might not show options or show a "Start Over"
};

export type ConversationFlow = {
  [key: string]: ConversationStep;
};
