import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface SplitSectionProps {
  image: string;
  label: string;
  headline: string;
  bullets: string[];
  cta: string;
  ctaLink: string;
  imagePosition?: 'left' | 'right';
}

export function SplitSection({
  image,
  label,
  headline,
  bullets,
  cta,
  ctaLink,
  imagePosition = 'left',
}: SplitSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageEl = imageRef.current;
    const content = contentRef.current;
    if (!section || !imageEl || !content) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageEl,
        {
          x: imagePosition === 'left' ? -80 : 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        content,
        {
          x: imagePosition === 'left' ? 50 : -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Bullets stagger
      const bulletItems = content.querySelectorAll('.bullet-item');
      gsap.fromTo(
        bulletItems,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [imagePosition]);

  const imageContent = (
    <div ref={imageRef} className="relative">
      <div className="image-card aspect-[4/3]">
        <img
          src={image}
          alt={headline}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Decorative elements */}
      <div className={`absolute -bottom-5 ${imagePosition === 'left' ? '-right-5' : '-left-5'} w-28 h-28 bg-gradient-to-br from-optus-blue/20 to-optus-blue/5 rounded-2xl -z-10`} />
      <div className={`absolute -top-5 ${imagePosition === 'left' ? '-left-5' : '-right-5'} w-16 h-16 bg-optus-blue/10 rounded-xl -z-10`} />
    </div>
  );

  const textContent = (
    <div ref={contentRef} className="lg:py-8">
      <span className="micro-label mb-6 block">
        {label}
      </span>
      <h2 className="heading-display text-2xl md:text-3xl lg:text-4xl text-optus-dark mb-8 leading-tight">
        {headline}
      </h2>
      <ul className="space-y-5 mb-10">
        {bullets.map((bullet, index) => (
          <li key={index} className="bullet-item flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-optus-blue to-optus-blue/70 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check size={14} className="text-white" />
            </div>
            <span className="text-optus-gray leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className="btn-primary group inline-flex"
      >
        {cta}
        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F6F7F9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {imagePosition === 'left' ? (
            <>
              <div className="order-1">{imageContent}</div>
              <div className="order-2">{textContent}</div>
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{textContent}</div>
              <div className="order-1 lg:order-2">{imageContent}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
