
import { HeroSlider } from '@/components/sections/hero-slider';
import { RentalsSection } from '@/components/sections/rentals';
import { AboutSection } from '@/components/sections/about';
import { TrekTimelineSection } from '@/components/sections/trek-timeline';
import { MapSection } from '@/components/sections/map';
import { ReviewsSection } from '@/components/sections/reviews';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <TrekTimelineSection />
      <RentalsSection />
      <MapSection />
      <ReviewsSection />
    </>
  );
}
