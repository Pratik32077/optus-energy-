import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, TrendingUp, ClipboardCheck, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Shield,
    image: '/images/valves.jpg',
    title: 'Verified Supply',
    description: 'Vetted refineries and documented product quality. Every batch tested and certified.',
  },
  {
    icon: TrendingUp,
    image: '/images/pricing.jpg',
    title: 'Transparent Pricing',
    description: 'Clear cost structures with no hidden fees. Real-time market-aligned rates.',
  },
  {
    icon: ClipboardCheck,
    image: '/images/compliance.jpg',
    title: 'Compliant Delivery',
    description: 'Procedures aligned with international standards. Full regulatory compliance.',
  },
];

export function FeatureCardsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll('.feature-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardElements,
        { y: 70, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="micro-label mb-4 block">
            Why Optus
          </span>
          <h2 className="heading-display text-display-2 text-optus-dark">
            Three Pillars of Excellence
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={20} className="text-optus-blue" />
                </div>
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <feature.icon size={26} className="text-optus-blue" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <h3 className="font-display font-bold text-xl text-optus-dark mb-4 group-hover:text-optus-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-optus-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
