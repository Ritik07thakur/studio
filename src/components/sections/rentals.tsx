
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HomeIcon, Backpack } from 'lucide-react';
import type { RentalItem } from '@/lib/types';

const rentalData: RentalItem[] = [
  {
    id: 'camp-bag-1',
    name: 'Camping Bags',
    slug: 'camping-bags',
    type: 'Gear',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.Q4bKDXEE31TXu01n1IUDdAHaE8&pid=Api&P=0&h=180',
    imageHint: 'camping backpack',
    description: 'Durable and spacious camping bags for all your trekking essentials.',
    longDescription: 'Our high-quality camping bags are designed for the rugged Churdhar terrain. With multiple compartments, adjustable straps, and weather-resistant material, these bags will comfortably carry all your gear. Available in various sizes to suit your needs.',
    price: '₹200/day',
  },
  {
    id: 'camp-tent-1',
    name: 'Camping Tents (Family Pack)',
    slug: 'camping-tents-family',
    type: 'Gear',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.d7XY9dkEMbG9o4bOWpCCVwHaGA&pid=Api&P=0&h=180',
    imageHint: 'family tent',
    description: 'Large family-sized tents, weather-resistant and easy to set up.',
    longDescription: 'Stay comfortable with our family-sized camping tents. These tents are easy to pitch, offer excellent weather protection, and provide ample space for a small group or family. Made with durable materials to withstand mountain conditions.',
    price: '₹500/day',
  },
  {
    id: 'room-1',
    name: 'Comfortable Rooms',
    slug: 'comfortable-rooms',
    type: 'Accommodation',
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.sOGMz7z8onnxDAYxPPwLuwHaE7&pid=Api&P=0&h=180',
    imageHint: 'cozy room',
    description: 'Clean and cozy rooms available near trek starting points.',
    longDescription: 'Rest well before or after your trek in our comfortable rooms located conveniently near the Churdhar base camps. Rooms come with basic amenities, clean linen, and offer a peaceful environment. Perfect for solo trekkers, couples, or small groups.',
    price: '₹1200/night',
  },
];

// Export rentalData so it can be used on detail pages
export const getRentalData = () => rentalData;
export const getRentalItemBySlug = (slug: string) => rentalData.find(item => item.slug === slug);


const TypeIcon = ({ type }: { type: RentalItem['type'] }) => {
  if (type === 'Accommodation') return <HomeIcon className="h-5 w-5 mr-2 text-primary" />;
  if (type === 'Gear') return <Backpack className="h-5 w-5 mr-2 text-primary" />;
  return null;
};

const RentalCardItem = ({ item }: { item: RentalItem }) => (
  <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
    <div className="relative h-56 w-full">
      <Image
        src={item.imageUrl}
        alt={item.name}
        data-ai-hint={item.imageHint}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 80vw, (max-width: 768px) 72vw, (max-width: 1024px) 45vw, 30vw"
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl text-primary">{item.name}</CardTitle>
      <div className="flex items-center text-sm text-muted-foreground pt-1">
        <TypeIcon type={item.type} />
        <span>{item.type}</span>
      </div>
      {item.price && <p className="text-sm font-semibold text-accent pt-1">{item.price}</p>}
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription>{item.description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Link href={`/rentals/${item.slug}`} passHref className="w-full">
        <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          Book Now
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export function RentalsSection() {
  return (
    <section id="rentals" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Rentals &amp; Stays</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect accommodation and gear for your Churdhar adventure.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 snap-x snap-mandatory">
            {rentalData.map((item) => (
              <div key={item.id + '-mobile'} className="snap-start flex-shrink-0 w-[280px] sm:w-[300px]">
                <RentalCardItem item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentalData.map((item) => (
            <RentalCardItem key={item.id + '-desktop'} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
