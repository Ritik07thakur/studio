
import { HeroSlider } from '@/components/sections/hero-slider';
import { RentalsSection } from '@/components/sections/rentals';
import { AboutSection } from '@/components/sections/about';
import { TrekTimelineSection } from '@/components/sections/trek-timeline';
import { MapSection } from '@/components/sections/map';
import { ReviewsSection } from '@/components/sections/reviews';
import { FaqSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <RentalsSection />
      <AboutSection />
      <TrekTimelineSection />
      <MapSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
