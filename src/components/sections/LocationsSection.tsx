import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, ArrowUpRight, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    status: 'Opening Soon',
    hours: '24/7 Operations',
    image: '/images/dubai.jpg',
  },
  {
    city: 'Houston',
    country: 'Texas, USA',
    status: 'Active',
    hours: 'Trading & Operations',
    image: '/images/houston.jpg',
  },
];

export function LocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll('.location-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardElements,
        { y: 60, opacity: 0, scale: 0.97 },
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
            Global Presence
          </span>
          <h2 className="heading-display text-display-2 text-optus-dark mb-6">
            Our Locations
          </h2>
          <p className="text-base md:text-lg text-optus-gray max-w-2xl mx-auto leading-relaxed">
            From Wyoming to Dubai, our offices power your fuel needs worldwide.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="location-card group relative bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.city}, ${location.country}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Status badge */}
                <div className="absolute top-5 right-5">
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                    location.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : 'bg-amber-500 text-white'
                  }`}>
                    {location.status}
                  </span>
                </div>

                {/* Location info overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} className="text-white/80" />
                        <p className="text-sm text-white/80">{location.country}</p>
                      </div>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {location.city}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 text-optus-gray">
                  <Clock size={18} className="text-optus-blue" />
                  <span className="font-medium">{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
