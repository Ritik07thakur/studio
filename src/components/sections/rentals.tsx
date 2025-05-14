import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HomeIcon, Tent, Backpack, Tag } from 'lucide-react';
import type { RentalItem } from '@/lib/types';

const rentalData: RentalItem[] = [
  {
    id: '1',
    name: 'Riverside Homestay',
    type: 'Accommodation',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'cozy cabin',
    description: 'Comfortable rooms with stunning Churdhar views. Perfect for families and groups.',
    price: '₹2500/night',
  },
  {
    id: '2',
    name: 'High Altitude Tents',
    type: 'Gear',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'camping gear',
    description: 'Durable and weather-proof tents suitable for Churdhar\'s conditions. Sleeps 2-3.',
    price: '₹800/day',
  },
  {
    id: '3',
    name: 'Trekking Poles & Backpacks',
    type: 'Gear',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'hiking equipment',
    description: 'Lightweight trekking poles and spacious backpacks for a comfortable trek.',
    price: 'From ₹300/day',
  },
  {
    id: '4',
    name: 'Mountain View Guesthouse',
    type: 'Accommodation',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'mountain guesthouse',
    description: 'Budget-friendly guesthouse with basic amenities and friendly hosts.',
    price: '₹1500/night',
  },
];

const TypeIcon = ({ type }: { type: RentalItem['type'] }) => {
  if (type === 'Accommodation') return <HomeIcon className="h-5 w-5 mr-2 text-primary" />;
  if (type === 'Gear') return <Backpack className="h-5 w-5 mr-2 text-primary" />;
  return null;
};

export function RentalsSection() {
  return (
    <section id="rentals" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Rentals & Stays</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect accommodation and gear for your Churdhar adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rentalData.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  data-ai-hint={item.imageHint}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground pt-1">
                  <TypeIcon type={item.type} />
                  <span>{item.type}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {item.price && (
                  <div className="flex items-center text-primary font-semibold">
                    <Tag className="h-4 w-4 mr-1 text-accent" />
                    {item.price}
                  </div>
                )}
                <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
