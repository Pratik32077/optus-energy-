import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '150+', label: 'Trusted Worldwide' },
  { value: '15', label: 'Years Experience' },
  { value: '2025', label: 'Since' },
];

const leadership = [
  {
    name: 'Deepak Ram',
    role: 'CEO',
    location: 'Dubai',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=764,fit=crop/CbexEfr9R7B7E2oF/dee-professional-photo-edIdjbyiFnctfdV1.jpeg',
  },
  {
    name: 'Daniel Schwartz',
    role: 'Co-Founder & Head of Sales and Marketing',
    location: 'USA',
    image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=761,fit=crop/CbexEfr9R7B7E2oF/dan-at-the-busy-office-buLyDHi6AmU2HHVN.png',
  },
];

const testimonials = [
  {
    quote: "Optus Energy's flexible procedures made sourcing jet fuel seamless and reliable for our Houston operations.",
    author: 'Mark Lee',
    location: 'Houston',
  },
  {
    quote: 'Their global reach and financial strength gave us peace of mind when expanding our fuel supply chain.',
    author: 'Anna Kim',
    location: 'Dubai',
  },
];

export function About() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

      // Stats animation
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems && statItems.length > 0) {
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Leadership animation
      const leaderCards = leadershipRef.current?.querySelectorAll('.leader-card');
      if (leaderCards && leaderCards.length > 0) {
        gsap.fromTo(
          leaderCards,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: leadershipRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Testimonials animation
      const testimonialCards = testimonialsRef.current?.querySelectorAll('.testimonial-card');
      if (testimonialCards && testimonialCards.length > 0) {
        gsap.fromTo(
          testimonialCards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: testimonialsRef.current,
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
            <span className="micro-label text-optus-blue mb-4 block">About Us</span>
            <h1 className="heading-display text-display-2 text-optus-dark mb-6">
              About Optus Energy
            </h1>
            <p className="text-lg md:text-xl text-optus-gray leading-relaxed">
              Fueling global markets with flexible, buyer-friendly solutions from Houston to Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-3 gap-6 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-3xl md:text-5xl font-display font-bold text-optus-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-optus-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="micro-label text-optus-blue mb-4 block">Our Team</span>
            <h2 className="heading-display text-display-3 text-optus-dark">
              Leadership
            </h2>
          </div>

          <div
            ref={leadershipRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="leader-card bg-white rounded-3xl overflow-hidden card-shadow"
              >
                <div className="aspect-[3/4] md:aspect-[4/5]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display font-semibold text-xl text-optus-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-optus-blue font-medium text-sm mb-2">
                    {leader.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-optus-gray">
                    <Users size={14} />
                    <span>{leader.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-optus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="micro-label text-optus-blue mb-4 block">Testimonials</span>
            <h2 className="heading-display text-display-3 text-white">
              What Our Clients Say
            </h2>
          </div>

          <div
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
              >
                <Quote size={32} className="text-optus-blue mb-6" />
                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-optus-blue/20 flex items-center justify-center">
                    <span className="text-optus-blue font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-white/50 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
