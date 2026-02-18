import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fuel, Ship, Truck, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const fuels = [
  {
    name: 'Jet A1',
    description: 'Aviation turbine fuel meeting international standards for commercial and private aircraft.',
    icon: Fuel,
  },
  {
    name: 'D6',
    description: 'Heavy fuel oil for power generation and industrial applications.',
    icon: Database,
  },
  {
    name: 'EN590 / ULSD',
    description: 'Ultra-low-sulfur diesel for transport, power generation, and industrial use.',
    icon: Truck,
  },
  {
    name: 'Marine Gas Oil',
    description: 'Marine fuels with clear origin and documentation for vessel operations.',
    icon: Ship,
  },
];

const deliveryOptions = [
  {
    code: 'TTT',
    name: 'Tank-to-Tank',
    description: 'Direct transfer from supplier tank to buyer tank at designated terminal.',
  },
  {
    code: 'TTO',
    name: 'Tank Takeover',
    description: 'Buyer assumes control of fuel in designated storage tanks.',
  },
  {
    code: 'TTV',
    name: 'Tank-to-Vessel',
    description: 'Fuel delivered directly from storage to buyer vessel at port.',
  },
  {
    code: 'VTO',
    name: 'Vessel Takeover',
    description: 'Buyer takes control of fuel cargo while in transit on vessel.',
  },
];

export function Services() {
  const heroRef = useRef<HTMLElement>(null);
  const fuelsRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.fromTo(
          heroContent,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Fuels animation
      const fuelCards = fuelsRef.current?.querySelectorAll('.fuel-card');
      if (fuelCards && fuelCards.length > 0) {
        gsap.fromTo(
          fuelCards,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: fuelsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Delivery options animation
      const deliveryCards = deliveryRef.current?.querySelectorAll('.delivery-card');
      if (deliveryCards && deliveryCards.length > 0) {
        gsap.fromTo(
          deliveryCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: deliveryRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F6F7F9]">
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <span className="micro-label text-optus-blue mb-4 block">What We Offer</span>
            <h1 className="heading-display text-display-2 text-optus-dark mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-optus-gray leading-relaxed">
              Fuel supply tailored to your needs with flexible terms and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Fuels */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="micro-label text-optus-blue mb-4 block">Products</span>
            <h2 className="heading-display text-display-3 text-optus-dark">
              Fuel Products
            </h2>
          </div>

          <div
            ref={fuelsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {fuels.map((fuel, index) => (
              <div
                key={index}
                className="fuel-card bg-white rounded-3xl p-8 md:p-10 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-optus-blue/10 flex items-center justify-center mb-6">
                  <fuel.icon size={28} className="text-optus-blue" />
                </div>
                <h3 className="font-display font-semibold text-xl text-optus-dark mb-3">
                  {fuel.name}
                </h3>
                <p className="text-sm text-optus-gray leading-relaxed">
                  {fuel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 md:py-28 bg-optus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="micro-label text-optus-blue mb-4 block">Delivery Methods</span>
            <h2 className="heading-display text-display-3 text-white">
              Delivery Options
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Flexible delivery procedures to match your operational requirements and infrastructure.
            </p>
          </div>

          <div
            ref={deliveryRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {deliveryOptions.map((option, index) => (
              <div
                key={index}
                className="delivery-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-optus-blue/20 flex items-center justify-center mb-4">
                  <span className="text-optus-blue font-display font-bold text-sm">
                    {option.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-optus-blue rounded-3xl p-10 md:p-16 text-center">
            <h2 className="heading-display text-2xl md:text-3xl text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Contact our team to discuss your fuel requirements and get a customized quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-optus-blue font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 group"
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
