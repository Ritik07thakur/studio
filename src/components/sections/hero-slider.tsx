
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const slides = [
  {
    src: 'https://www.adotrip.com/public/images/areas/5cc0294956a00-Churdhar%20Sightseeing.jpg',
    alt: 'Breathtaking Churdhar Peak vista',
    hint: 'mountain peak',
    title: 'Welcome to Churdhar',
    subtitle: 'Discover the Heights!',
  },
  {
    src: 'https://www.himalayanhikers.in/wp-content/uploads/2019/11/churdhar-trek-820x410.jpg',
    alt: 'Churdhar trek trail in winter',
    hint: 'snowy trail',
    title: 'Trek to Majestic Peaks',
    subtitle: 'An adventure of a lifetime awaits.',
  },
  {
    src: 'https://www.beingpahadia.com/wp-content/uploads/2020/12/Breathtaking-Views-on-way-to-Churdhar-min.jpg',
    alt: 'Panoramic view from Churdhar trail',
    hint: 'mountain panorama',
    title: 'Unforgettable Panoramas',
    subtitle: "Witness nature's grandeur at its finest.",
  },
  {
    src: 'https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/10/churdhar-1200x900@adotrip.jpg',
    alt: 'Churdhar landscape with vibrant sky',
    hint: 'landscape sky',
    title: 'Vibrant Skies, Serene Trails',
    subtitle: 'Explore the beauty of the Himalayas.',
  },
  {
    src: 'https://vagabondholidays.com/wp-content/uploads/2022/08/How-Long-Is-Churdhar-Trek-Vagabond-Holidays-1-768x473.jpg',
    alt: 'Trekker on the path to Churdhar',
    hint: 'trekker path',
    title: 'Your Journey Starts Here',
    subtitle: 'Gear up for an epic Churdhar trek.',
  },
  {
    src: 'https://thumbs.dreamstime.com/b/india-himachal-pradesh-churdhar-peak-sirmour-neutral-picture-170211522.jpg',
    alt: 'Churdhar peak in Sirmour district',
    hint: 'peak sirmour',
    title: 'The Crown of Sirmour',
    subtitle: 'Experience the highest peak of the outer Himalayas.',
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
    const timer = setTimeout(nextSlide, 3000); // Auto-play every 3 seconds
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
            priority={index === 0} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-down">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mb-8 drop-shadow-md animate-fade-in-up">
              {slide.subtitle}
            </p>
            <Link href="/#about" passHref>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 animate-fade-in-up animation-delay-300">
                Explore Now
              </Button>
            </Link>
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
              "h-2.5 w-2.5 rounded-full transition-all duration-300",
              currentIndex === index ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
       {/* Basic CSS for animations - consider adding to globals.css if not already there or using Tailwind animation utilities */}
      <style jsx global>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
