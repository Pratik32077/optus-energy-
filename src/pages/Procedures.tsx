import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Check, Ship, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What fuels do you offer?',
    answer: 'We offer Jet A1, D6, EN590 / ULSD, and Marine Gas Oil. All products meet international quality standards and come with full certification.',
  },
  {
    question: 'Where are your operations?',
    answer: 'Our current operations are in Dubai, Houston, and Wyoming. We are expanding to Fujairah, Rotterdam, and Jurong in the near future.',
  },
  {
    question: 'What are your delivery procedures?',
    answer: 'We offer CIF & FOB terms, as well as TTT (Tank-to-Tank), TTO (Tank Takeover), TTV (Tank-to-Vessel), and VTO (Vessel Takeover) delivery options.',
  },
  {
    question: 'Who leads Optus Energy?',
    answer: 'Optus Energy is led by Deepak Ram (CEO, Dubai) and Daniel Schwartz (Co-Founder & Head of Sales and Marketing, USA).',
  },
  {
    question: 'Are you expanding globally?',
    answer: 'Yes, we are actively expanding to Fujairah, Rotterdam, and Jurong to better serve our global client base.',
  },
];

const supplyTypes = [
  {
    code: 'CIF',
    name: 'Cost, Insurance & Freight',
    description: 'We handle all costs, insurance, and freight to deliver fuel to your designated port.',
    features: [
      'Shipping arranged by Optus Energy',
      'Insurance coverage included',
      'Delivery to destination port',
      'Simplified logistics for buyers',
    ],
  },
  {
    code: 'FOB',
    name: 'Free On Board',
    description: 'Buyer takes control once fuel is loaded on vessel at the port of origin.',
    features: [
      'Direct buyer control of shipping',
      'Flexible carrier selection',
      'Cost savings on logistics',
      'Full transparency on loading',
    ],
  },
];

export function Procedures() {
  const heroRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const supplyRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

      // FAQ animation
      const faqItems = faqsRef.current?.querySelectorAll('.faq-item');
      if (faqItems && faqItems.length > 0) {
        gsap.fromTo(
          faqItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Supply types animation
      const supplyCards = supplyRef.current?.querySelectorAll('.supply-card');
      if (supplyCards && supplyCards.length > 0) {
        gsap.fromTo(
          supplyCards,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: supplyRef.current,
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
            <span className="micro-label text-optus-blue mb-4 block">How We Work</span>
            <h1 className="heading-display text-display-2 text-optus-dark mb-6">
              Procedures
            </h1>
            <p className="text-lg md:text-xl text-optus-gray leading-relaxed">
              Clear terms, verified inspection, and secure execution for every transaction.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="micro-label text-optus-blue mb-4 block">Common Questions</span>
            <h2 className="heading-display text-display-3 text-optus-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div ref={faqsRef} className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white rounded-2xl overflow-hidden card-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-semibold text-optus-dark pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-optus-blue flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-optus-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Types */}
      <section className="py-20 md:py-28 bg-optus-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="micro-label text-optus-blue mb-4 block">Supply Terms</span>
            <h2 className="heading-display text-display-3 text-white">
              Delivery Options
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Choose the supply arrangement that best fits your operational needs and risk preferences.
            </p>
          </div>

          <div
            ref={supplyRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {supplyTypes.map((supply, index) => (
              <div
                key={index}
                className="supply-card bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-optus-blue/20 flex items-center justify-center">
                    {index === 0 ? (
                      <Ship size={28} className="text-optus-blue" />
                    ) : (
                      <FileText size={28} className="text-optus-blue" />
                    )}
                  </div>
                  <div>
                    <span className="text-optus-blue font-display font-bold text-lg">
                      {supply.code}
                    </span>
                    <h3 className="text-white font-display font-semibold">
                      {supply.name}
                    </h3>
                  </div>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {supply.description}
                </p>

                <ul className="space-y-3">
                  {supply.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-optus-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-optus-blue" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
