import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, MountainSnow, CalendarDays, Leaf, Trees, CloudSun } from 'lucide-react';

const aboutPoints = [
  {
    icon: MountainSnow,
    title: 'Peak Height',
    description: 'Churdhar Peak stands tall at an elevation of approximately 3,647 meters (11,965 feet) above sea level, making it the highest peak in the outer Himalayas.',
  },
  {
    icon: MapPin,
    title: 'Location & Route',
    description: 'Located in the Sirmour district of Himachal Pradesh. The most common trekking routes start from Nauradhar and Sarahan. Road conditions to base camps can vary, especially during monsoon.',
  },
  {
    icon: CalendarDays,
    title: 'Best Time to Visit',
    description: 'The ideal time for the Churdhar trek is from May to November. Avoid monsoon (July-August) due to slippery trails and winter (December-April) due to heavy snowfall.',
  },
  {
    icon: Leaf,
    title: 'Flora & Fauna',
    description: 'The Churdhar Wildlife Sanctuary is home to diverse flora including Deodar, Oak, and Pine trees, and fauna like Musk Deer, Himalayan Black Bear, and various pheasants.',
  },
  {
    icon: Trees,
    title: 'The Trek',
    description: 'The trek is considered moderate to difficult, requiring good physical fitness. It usually takes 2-3 days to complete, offering breathtaking views and a serene experience.',
  },
  {
    icon: CloudSun,
    title: 'Weather Conditions',
    description: 'Weather in Churdhar can change rapidly. Days are pleasant during trekking season, but nights can be very cold. Always carry warm clothing and rain gear.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">About Churdhar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential information for your Churdhar expedition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutPoints.map((point) => (
            <Card key={point.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <point.icon className="h-10 w-10 text-accent" />
                <CardTitle className="text-xl text-primary">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
