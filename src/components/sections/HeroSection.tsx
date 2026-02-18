import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Star, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !image || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image entrance with scale
      tl.fromTo(
        image,
        { x: -100, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2 },
        0
      );

      // Content entrance with stagger
      const headline = content.querySelector('h1');
      const subheadline = content.querySelector('p');
      const ctaRow = content.querySelector('.cta-row');
      const rating = content.querySelector('.rating');
      const microLabel = content.querySelector('.micro-label');

      if (microLabel) {
        tl.fromTo(
          microLabel,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.2
        );
      }

      if (headline) {
        tl.fromTo(
          headline,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0.3
        );
      }

      if (subheadline) {
        tl.fromTo(
          subheadline,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          0.5
        );
      }

      if (rating) {
        tl.fromTo(
          rating,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.6
        );
      }

      if (ctaRow) {
        tl.fromTo(
          ctaRow,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.7
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F6F7F9] overflow-hidden pt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-optus-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative order-2 lg:order-1"
          >
            <div className="image-card aspect-[4/3] lg:aspect-[4/3.2]">
              <img
                src="/images/hero-port.jpg"
                alt="Global energy trading port"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-optus-blue/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-optus-blue/5 rounded-2xl -z-10" />

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-2xl px-6 py-4 card-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Certified</p>
                  <p className="text-sm font-semibold text-optus-dark">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className="order-1 lg:order-2 lg:pl-8"
          >
            <span className="micro-label mb-6 block">
              Global Energy Trading
            </span>

            <h1 className="heading-display text-display-1 text-optus-dark mb-8 leading-[1.1]">
              Fueling Your<br />
              <span className="text-gradient">Future</span>
            </h1>

            <p className="text-base md:text-lg text-optus-gray leading-relaxed mb-8 max-w-lg">
              Welcome to Optus Energy. Experience fuel transactions reimagined.
              Our cutting-edge digital platform connects buyers and sellers, making
              fuel trading seamless, secure, and transparent.
            </p>

            <div className="rating flex items-center gap-3 mb-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-optus-dark">Rated 4.8/5</span>
              <span className="text-sm text-optus-gray">by 150+ clients</span>
            </div>

            <div className="cta-row flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Get Quote
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* <button className="btn-secondary group">
                <Download size={18} className="mr-2 text-optus-gray" />
                Download Capabilities
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
