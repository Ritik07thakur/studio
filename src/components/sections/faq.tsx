
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Backpack, Clock, HelpCircle, ShieldCheck, Users } from 'lucide-react';

const faqData = [
  {
    id: "faq-1",
    icon: Clock,
    question: "How long is the Churdhar trek?",
    answer:
      "The Churdhar trek typically takes 2-3 days to complete, depending on your pace and the route taken. The most common routes from Nauradhar or Sarahan vary slightly in distance and difficulty.",
  },
  {
    id: "faq-2",
    icon: Backpack,
    question: "What essential items should I carry for the trek?",
    answer:
      "Essential items include sturdy trekking shoes, warm layered clothing (including a waterproof jacket), a backpack (40-50 liters), a water bottle or hydration pack, high-energy snacks, a first-aid kit, sunscreen, a hat/cap, sunglasses, a torch/headlamp with extra batteries, and personal toiletries. It's also advisable to carry a power bank for your devices.",
  },
  {
    id: "faq-3",
    icon: Users,
    question: "Is the Churdhar trek safe for kids or beginners?",
    answer:
      "The Churdhar trek is considered moderate to difficult. While experienced older children (12+ years) with good fitness levels might manage, it's generally not recommended for young children. Beginners should have a good level of physical fitness and ideally trek with an experienced guide or group. Always check current weather and trail conditions before starting.",
  },
  {
    id: "faq-4",
    icon: ShieldCheck,
    question: "Are there accommodation options on the trail or at the peak?",
    answer:
      "Basic accommodation is available at some points along the trail, such as Dharamshalas or small guesthouses near the Churdhar temple and at base camps like Nauradhar. Camping is also a popular option. It's best to book in advance during peak season or carry your own camping gear if you prefer.",
  },
  {
    id: "faq-5",
    icon: HelpCircle,
    question: "What is the best time to do the Churdhar trek?",
    answer:
      "The best time for the Churdhar trek is from May to June and then from September to mid-November. July and August are monsoon months, making trails slippery and prone to landslides. From late November to April, the area receives heavy snowfall, often closing the routes.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common queries about the Churdhar trek.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-border/70 last:border-b-0">
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <div className="flex items-center text-base md:text-lg font-semibold text-primary">
                    <item.icon className="mr-3 h-6 w-6 text-accent flex-shrink-0" />
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-0 text-sm md:text-base text-foreground/80 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
