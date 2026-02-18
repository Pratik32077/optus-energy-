import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeatureCardsSection } from '@/components/sections/FeatureCardsSection';
import { FullBleedSection } from '@/components/sections/FullBleedSection';
import { SplitSection } from '@/components/sections/SplitSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { LocationsSection } from '@/components/sections/LocationsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureCardsSection />
      
      <FullBleedSection
        image="/images/refinery.jpg"
        headline="We connect buyers to reliable fuel—at scale."
        body="From spot requests to term contracts, we coordinate supply, inspection, and delivery—so you stay focused on operations."
        cta="Learn More"
        ctaLink="/services"
      />
      
      <SplitSection
        image="/images/jet-fuel.jpg"
        label="Fuel Supply"
        headline="Jet fuel, diesel, and marine gas oil—delivered on spec."
        bullets={[
          'Aviation fuel meeting international standards.',
          'Ultra-low-sulfur diesel for transport and power.',
          'Marine fuels with clear origin and documentation.',
        ]}
        cta="See Fuel Specs"
        ctaLink="/services"
        imagePosition="left"
      />
      
      <FullBleedSection
        image="/images/pipeline.jpg"
        headline="Logistics built for volume and velocity."
        body="We coordinate storage, lifting, and shipping—so delivery windows are met without surprises."
        cta="Explore Logistics"
        ctaLink="/projects"
      />
      
      <SplitSection
        image="/images/tanker-deck.jpg"
        label="Procedures"
        headline="Clear terms. Verified inspection. Secure execution."
        bullets={[
          'Standard and buyer-friendly procedures available.',
          'Independent surveyors and lab testing.',
          'Title transfer and documentation handled end-to-end.',
        ]}
        cta="How We Work"
        ctaLink="/procedures"
        imagePosition="right"
      />
      
      <FullBleedSection
        image="/images/control-room.jpg"
        headline="Real-time visibility into every lift."
        body="Track nominations, inspections, and shipping schedules with clear reporting and fast updates."
        cta="View Technology"
        ctaLink="/projects"
      />
      
      <SplitSection
        image="/images/team-meeting.jpg"
        label="Partnership"
        headline="A team that speaks supply chain fluently."
        bullets={[
          'We work with traders, operators, and logistics teams.',
          'Reduced friction from inquiry to delivery.',
          'Dedicated account management and support.',
        ]}
        cta="Meet the Team"
        ctaLink="/about"
        imagePosition="left"
      />
      
      <FullBleedSection
        image="/images/storage-tanks.jpg"
        headline="Storage and scheduling that keeps you moving."
        body="Access to key terminals and coordinated lifting schedules—so you maintain supply continuity."
        cta="View Operations"
        ctaLink="/projects"
      />
      
      <SplitSection
        image="/images/global-office.jpg"
        label="Global Coverage"
        headline="Supply where you need it."
        bullets={[
          'We support deliveries across regions.',
          'Vetted terminals with compliant documentation.',
          'Local coordination in every market.',
        ]}
        cta="Contact Operations"
        ctaLink="/contact"
        imagePosition="right"
      />
      
      <FullBleedSection
        image="/images/offshore-rig.jpg"
        headline="Quality you can specify. Delivery you can count on."
        body="Let's align on product specs, delivery windows, and procedures—fast."
        cta="Request a Quote"
        ctaLink="/contact"
      />
      
      <NewsletterSection />
      <LocationsSection />
    </>
  );
}
