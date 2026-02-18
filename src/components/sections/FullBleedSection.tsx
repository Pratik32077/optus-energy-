import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface FullBleedSectionProps {
  image: string;
  headline: string;
  body: string;
  dark?: boolean;
  cta?: string;
  ctaLink?: string;
}

export function FullBleedSection({ 
  image, 
  headline, 
  body, 
  dark = false,
  cta,
  ctaLink = '/contact'
}: FullBleedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;
    const content = contentRef.current;
    if (!section || !imageEl || !content) return;

    const headlineEl = content.querySelector('h2');
    const bodyEl = content.querySelector('p');

    const ctx = gsap.context(() => {
      // Image parallax
      gsap.fromTo(
        imageEl,
        { scale: 1.15, y: 50 },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );

      // Headline animation
      if (headlineEl) {
        gsap.fromTo(
          headlineEl,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Body animation
      if (bodyEl) {
        gsap.fromTo(
          bodyEl,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[75vh] md:h-[85vh] overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${dark ? 'bg-black/60' : 'bg-gradient-to-r from-black/80 via-black/50 to-transparent'}`} />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {headline}
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              {body}
            </p>
            {cta && (
              <Link 
                to={ctaLink}
                className="inline-flex items-center gap-2 text-white font-semibold group"
              >
                <span className="border-b-2 border-optus-blue pb-1 group-hover:border-white transition-colors">
                  {cta}
                </span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
