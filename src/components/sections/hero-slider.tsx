"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    src: 'https://placehold.co/1200x600.png',
    alt: 'Panoramic view of Churdhar peak',
    hint: 'mountain landscape',
    title: 'Discover the Majesty of Churdhar',
    subtitle: 'Embark on an unforgettable journey to the serene peaks.',
  },
  {
    src: 'https://placehold.co/1200x600.png',
    alt: 'Lush green trails in Churdhar forest',
    hint: 'forest trail',
    title: 'Trek Through Enchanting Forests',
    subtitle: 'Experience the rich biodiversity and tranquil paths.',
  },
  {
    src: 'https://placehold.co/1200x600.png',
    alt: 'Churdhar temple at sunrise',
    hint: 'temple sunrise',
    title: 'Spiritual Serenity Awaits',
    subtitle: 'Visit ancient temples and find peace amidst nature.',
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // Auto-play every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <section id="hero" className="relative w-full h-[calc(100vh-4rem)] min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            data-ai-hint={slide.hint}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0} // Prioritize loading the first image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
