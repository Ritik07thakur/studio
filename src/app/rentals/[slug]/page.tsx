
"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation'; // Import notFound
import { getRentalItemBySlug } from '@/components/sections/rentals'; // Function to get item
import { BookingForm } from '@/components/booking-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Tag } from 'lucide-react';

const RentalDetailPage: NextPage = () => {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : undefined;
  
  if (!slug) {
    return notFound(); // Or a custom loading/error component
  }

  const rentalItem = getRentalItemBySlug(slug);

  if (!rentalItem) {
    return notFound(); // If item not found, show 404 page
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={rentalItem.imageUrl}
            alt={rentalItem.name}
            data-ai-hint={rentalItem.imageHint}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details & Booking Form Section */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-3">{rentalItem.name}</h1>
          <CardDescription className="text-lg text-foreground/80 mb-6 leading-relaxed">
            {rentalItem.longDescription || rentalItem.description}
          </CardDescription>
          
          <Separator className="my-6" />

          <Card className="shadow-lg bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Book Your Rental</CardTitle>
              <CardDescription>Fill out the form below to request your booking.</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm rentalItemName={rentalItem.name} />
            </CardContent>
          </Card>
        </div>
      </div>
       <div className="mt-12 p-4 border border-yellow-300 bg-yellow-50 rounded-md text-yellow-700 flex items-start">
        <AlertCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-yellow-500" />
        <div>
          <h3 className="font-semibold">Please Note:</h3>
          <p className="text-sm">This is a booking request form. Availability is not guaranteed until confirmed by our team. We will contact you within 24 hours to finalize your booking details and payment.</p>
        </div>
      </div>
    </div>
  );
};

export default RentalDetailPage;
