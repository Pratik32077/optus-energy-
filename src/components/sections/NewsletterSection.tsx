import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector('.newsletter-content'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-optus-dark relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-optus-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-optus-blue/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="newsletter-content max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-optus-blue/20 mb-8">
            <Sparkles size={16} className="text-optus-blue" />
            <span className="text-sm text-optus-blue font-medium">Stay Connected</span>
          </div>
          
          <h2 className="heading-display text-3xl md:text-4xl text-white mb-6">
            Get Updates on Fuel Options
          </h2>
          <p className="text-base md:text-lg text-white/60 mb-10 leading-relaxed">
            Subscribe to receive the latest updates on fuel options, market insights, and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 py-6 bg-white/5 rounded-2xl border border-white/10">
              <CheckCircle size={28} className="text-green-400" />
              <span className="text-white font-medium text-lg">
                Thank you for subscribing!
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-optus-blue focus:bg-white/15 transition-all"
                />
                {error && (
                  <p className="absolute -bottom-7 left-0 text-sm text-red-400">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="btn-primary whitespace-nowrap py-4"
              >
                <Send size={18} className="mr-2" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
