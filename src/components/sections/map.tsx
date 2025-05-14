
"use client";

import Image from 'next/image';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MapPin } from 'lucide-react';

const churdharPeakCoords = { lat: 30.8746, lng: 77.4683 }; // Approximate coordinates for Churdhar Peak

export function MapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <section id="map" className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Visualize your trek and key locations around Churdhar.
            </p>
          </div>
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <MapPin className="h-4 w-4" />
            <AlertTitle>Map Unavailable</AlertTitle>
            <AlertDescription>
              The Google Maps API key is not configured. Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.
              You can add a placeholder image here or instructions for setting up the API key.
              For now, a static placeholder image of a map is displayed:
              <Image 
                src="https://placehold.co/800x400.png" 
                alt="Map placeholder" 
                data-ai-hint="map generic" 
                width={800} 
                height={400} 
                className="mt-4 rounded-md shadow-md" 
              />
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section id="map" className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Find Us</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize your trek and key locations around Churdhar.
          </p>
        </div>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-border">
          <APIProvider apiKey={apiKey}>
            <Map
              defaultCenter={churdharPeakCoords}
              defaultZoom={11}
              gestureHandling={'greedy'}
              disableDefaultUI={false}
              mapId="churdharExplorerMap" // Optional: for custom styling in Google Cloud Console
            >
              <Marker position={churdharPeakCoords} title="Churdhar Peak" />
              {/* Add more markers for trailheads, campsites, etc. */}
            </Map>
          </APIProvider>
        </div>
         <p className="text-center text-sm text-muted-foreground mt-4">
            Note: Map is for illustrative purposes. Always carry detailed physical maps and a compass/GPS for actual trekking.
          </p>
      </div>
    </section>
  );
}
