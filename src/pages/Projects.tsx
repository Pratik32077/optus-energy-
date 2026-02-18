import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plane, Handshake, Globe, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Plane,
    title: 'Jet A1 Supply',
    description: 'Reliable jet fuel from Houston to Dubai, serving major airlines and private operators.',
    image: '/images/jet-fuel.jpg',
  },
  {
    icon: Handshake,
    title: 'Flexible Terms',
    description: 'Buyer-friendly procedures that work for you, with customizable payment and delivery options.',
    image: '/images/pricing.jpg',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Fuel delivery tailored to your global needs, with coverage across major shipping routes.',
    image: '/images/global-office.jpg',
  },
];

const operations = [
  { city: 'Dubai', role: 'Business Development' },
  { city: 'Houston', role: 'Trading & Operations' },
  { city: 'Wyoming', role: 'Logistics Hub' },
];

const expansion = [
  { city: 'Fujairah', status: 'Coming Soon' },
  { city: 'Rotterdam', status: 'Planned' },
  { city: 'Jurong', status: 'Planned' },
];

export function Projects() {
  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);

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

      // Projects animation
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      if (projectCards && projectCards.length > 0) {
        gsap.fromTo(
          projectCards,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Operations animation
      const opItems = operationsRef.current?.querySelectorAll('.op-item');
      if (opItems && opItems.length > 0) {
        gsap.fromTo(
          opItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: operationsRef.current,
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
            <span className="micro-label text-optus-blue mb-4 block">Our Work</span>
            <h1 className="heading-display text-display-2 text-optus-dark mb-6">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-optus-gray leading-relaxed">
              Fuel delivery tailored to your global needs. Discover how we've helped clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card group bg-white rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <project.icon size={24} className="text-optus-blue" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="font-display font-semibold text-xl text-optus-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-optus-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations */}
      <section className="py-20 md:py-28 bg-optus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Current Operations */}
            <div>
              <span className="micro-label text-optus-blue mb-4 block">Current</span>
              <h2 className="heading-display text-2xl md:text-3xl text-white mb-8">
                Global Operations
              </h2>

              <div ref={operationsRef} className="space-y-4">
                {operations.map((op, index) => (
                  <div
                    key={index}
                    className="op-item flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-optus-blue/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-optus-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-white">
                        {op.city}
                      </h3>
                      <p className="text-sm text-white/60">{op.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expansion */}
            <div>
              <span className="micro-label text-optus-blue mb-4 block">Future</span>
              <h2 className="heading-display text-2xl md:text-3xl text-white mb-8">
                Expansion Plans
              </h2>

              <div className="space-y-4">
                {expansion.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Globe size={20} className="text-white/60" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-white">
                        {item.city}
                      </h3>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-optus-blue/20 rounded-2xl border border-optus-blue/30">
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Interested in partnering with us in these regions? Contact our business development team.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-optus-blue font-medium text-sm hover:underline"
                >
                  Get in Touch
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
