
import type { ConversationFlow } from '@/lib/chatbot-types';

export const initialStepId = 'welcome';

export const conversationFlow: ConversationFlow = {
  [initialStepId]: {
    id: 'welcome',
    botMessage: "Hi there! 👋 How can I help you with your Churdhar trip?",
    options: [
      { id: 'opt_reach', text: "How to reach Churdhar?", nextStepId: 'reach_options' },
      { id: 'opt_carry', text: "What should I carry?", nextStepId: 'carry_info' },
      { id: 'opt_stay', text: "Where can I stay?", nextStepId: 'stay_options' },
    ],
  },
  'reach_options': {
    id: 'reach_options',
    botMessage: "Churdhar can be reached via different routes. The most common starting points are Nauradhar and Sarahan. From there, it's a trek to the peak. Would you like to know more about transport to these base camps?",
    options: [
      { id: 'opt_nauradhar', text: "Transport to Nauradhar", nextStepId: 'transport_nauradhar' },
      { id: 'opt_sarahan', text: "Transport to Sarahan", nextStepId: 'transport_sarahan' },
      { id: 'opt_back_welcome_reach', text: "Back to main menu", nextStepId: 'welcome' },
    ],
  },
  'transport_nauradhar': {
    id: 'transport_nauradhar',
    botMessage: "To reach Nauradhar, you can take a bus or taxi from Solan or Rajgarh. Solan is well-connected by road and rail.",
    options: [
      { id: 'opt_ask_sarahan', text: "Tell me about Sarahan route", nextStepId: 'transport_sarahan' },
      { id: 'opt_anything_else_nauradhar', text: "Anything else?", nextStepId: 'anything_else' },
      { id: 'opt_back_welcome_nauradhar', text: "Back to main menu", nextStepId: 'welcome' },
    ],
  },
  'transport_sarahan': {
    id: 'transport_sarahan',
    botMessage: "Sarahan (Chaupal) can be reached by bus or taxi from Shimla. The journey offers scenic views.",
    options: [
      { id: 'opt_ask_nauradhar', text: "Tell me about Nauradhar route", nextStepId: 'transport_nauradhar' },
      { id: 'opt_anything_else_sarahan', text: "Anything else?", nextStepId: 'anything_else' },
      { id: 'opt_back_welcome_sarahan', text: "Back to main menu", nextStepId: 'welcome' },
    ],
  },
  'carry_info': {
    id: 'carry_info',
    botMessage: "For the Churdhar trek, essential items include: sturdy trekking shoes, warm layered clothing (waterproof jacket), backpack, water bottle, high-energy snacks, first-aid kit, sunscreen, hat/cap, sunglasses, and a torch/headlamp. Need info on renting gear?",
    options: [
      { id: 'opt_rent_gear_carry', text: "Yes, tell me about rentals", nextStepId: 'stay_options' },
      { id: 'opt_no_thanks_carry', text: "No, thanks", nextStepId: 'anything_else' },
      { id: 'opt_back_welcome_carry', text: "Back to main menu", nextStepId: 'welcome' },
    ],
  },
  'stay_options': {
    id: 'stay_options',
    botMessage: "You can book a tent, room, or camping bag with us. What are you interested in?",
    options: [
      { id: 'opt_tents', text: "Tents", nextStepId: 'tents_info' },
      { id: 'opt_rooms', text: "Rooms", nextStepId: 'rooms_info' },
      { id: 'opt_bags', text: "Camping Bags", nextStepId: 'bags_info' },
      { id: 'opt_back_welcome_stay', text: "Back to main menu", nextStepId: 'welcome' },
    ],
  },
  'tents_info': {
    id: 'tents_info',
    botMessage: "We offer family-sized camping tents: weather-resistant and easy to set up. Perfect for a comfortable stay amidst nature!",
    options: [
      { id: 'opt_book_tents', text: "Go to Tent Rentals", link: '/rentals/camping-tents-family', nextStepId: 'link_followup' },
      { id: 'opt_other_stay_tents', text: "Other stay options", nextStepId: 'stay_options' },
      { id: 'opt_main_menu_tents', text: "Main menu", nextStepId: 'welcome' },
    ],
  },
  'rooms_info': {
    id: 'rooms_info',
    botMessage: "Comfortable and clean rooms are available near the trek starting points. Ideal for resting before or after your trek.",
    options: [
      { id: 'opt_book_rooms', text: "Go to Room Rentals", link: '/rentals/comfortable-rooms', nextStepId: 'link_followup' },
      { id: 'opt_other_stay_rooms', text: "Other stay options", nextStepId: 'stay_options' },
      { id: 'opt_main_menu_rooms', text: "Main menu", nextStepId: 'welcome' },
    ],
  },
  'bags_info': {
    id: 'bags_info',
    botMessage: "Durable and spacious camping bags are available for rent. They have multiple compartments and are weather-resistant.",
    options: [
      { id: 'opt_book_bags', text: "Go to Bag Rentals", link: '/rentals/camping-bags', nextStepId: 'link_followup' },
      { id: 'opt_other_stay_bags', text: "Other stay options", nextStepId: 'stay_options' },
      { id: 'opt_main_menu_bags', text: "Main menu", nextStepId: 'welcome' },
    ],
  },
  'link_followup': {
    id: 'link_followup',
    botMessage: "Great! You can find more details and book via our Rentals section. Is there anything else I can assist you with?",
    options: [
      { id: 'opt_anything_else_link', text: "Yes, another question", nextStepId: 'anything_else_short' },
      { id: 'opt_no_thanks_link', text: "No, that's all for now", nextStepId: 'goodbye' },
      { id: 'opt_main_menu_link_followup', text: "Main menu", nextStepId: 'welcome' },
    ],
  },
  'anything_else': {
    id: 'anything_else',
    botMessage: "Sure! What else would you like to know?",
    options: [
      { id: 'opt_reach_ae', text: "How to reach Churdhar?", nextStepId: 'reach_options' },
      { id: 'opt_carry_ae', text: "What should I carry?", nextStepId: 'carry_info' },
      { id: 'opt_stay_ae', text: "Where can I stay?", nextStepId: 'stay_options' },
      { id: 'opt_no_thanks_ae', text: "No, that's all!", nextStepId: 'goodbye' },
    ],
  },
  'anything_else_short': {
    id: 'anything_else_short',
    botMessage: "Sure, what would you like to know?",
    options: [
      { id: 'opt_reach_aes', text: "How to reach?", nextStepId: 'reach_options' },
      { id: 'opt_carry_aes', text: "What to carry?", nextStepId: 'carry_info' },
      { id: 'opt_stay_aes', text: "Where to stay?", nextStepId: 'stay_options' },
       { id: 'opt_no_thanks_aes', text: "No, that's all!", nextStepId: 'goodbye' },
    ],
  },
  'goodbye': {
    id: 'goodbye',
    botMessage: "Alright! Have a fantastic trip to Churdhar! Feel free to ask if anything else comes up. 👋",
    options: [
      { id: 'opt_start_over', text: "Start Over", nextStepId: 'welcome' },
    ],
    isEndingStep: true,
  },
};
