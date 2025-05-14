
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MountainSnow, Sunrise, Backpack } from 'lucide-react'; 

const timelineMilestones = [
  {
    icon: Backpack,
    title: 'The Ascent Begins',
    subtitle: 'Base Camp (e.g., Nauradhar)',
    description: 'Your adventure kicks off from the base camp. Prepare for a steady climb through lush forests and charming villages, with the crisp mountain air invigorating your senses.',
    delay: "animate-fade-in-up animation-delay-100"
  },
  {
    icon: Sunrise, 
    title: 'Midway Halt & Recharge',
    subtitle: 'Rest Point (e.g., Jam Nallah/Teesri)',
    description: "Reach a key resting point along the trail. Enjoy the serene environment, refuel with some snacks, and mentally prepare for the steeper sections ahead as you get closer to the peak.",
    delay: "animate-fade-in-up animation-delay-300"
  },
  {
    icon: MountainSnow,
    title: 'Summiting Churdhar Peak',
    subtitle: 'The Majestic Summit (3,647m)',
    description: "The final push to the majestic Churdhar Peak. Witness breathtaking panoramic views of the surrounding Himalayan ranges and visit the ancient Shirgul Maharaj Temple.",
    delay: "animate-fade-in-up animation-delay-500"
  },
];

const MilestoneCard = ({ milestone }: { milestone: typeof timelineMilestones[0] }) => (
  <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full ${milestone.delay}`}>
    <CardHeader className="flex flex-col items-center text-center pb-4">
      <div className="p-4 bg-accent/20 rounded-full mb-4">
        <milestone.icon className="h-12 w-12 text-accent" />
      </div>
      <CardTitle className="text-xl text-primary">{milestone.title}</CardTitle>
      <p className="text-sm text-muted-foreground">{milestone.subtitle}</p>
    </CardHeader>
    <CardContent className="flex-grow text-center">
      <p className="text-sm text-foreground/80">{milestone.description}</p>
    </CardContent>
  </Card>
);

export function TrekTimelineSection() {
  return (
    <section id="trek-timeline" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Trek Route Timeline</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey to the Summit: Key Milestones of Your Churdhar Trek.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 snap-x snap-mandatory">
            {timelineMilestones.map((milestone, index) => (
              <div key={index + '-mobile'} className="snap-start flex-shrink-0 w-[280px] sm:w-[300px]">
                <MilestoneCard milestone={milestone} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {timelineMilestones.map((milestone, index) => (
            <MilestoneCard key={index + '-desktop'} milestone={milestone} />
          ))}
        </div>
      </div>
      {/* Add some basic animation styles if not already present globally */}
      <style jsx global>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
