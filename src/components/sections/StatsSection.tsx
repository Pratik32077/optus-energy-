import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Calendar, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Trusted Worldwide',
    description: 'Global partners and clients',
  },
  {
    icon: Calendar,
    value: 15,
    suffix: '',
    label: 'Years Experience',
    description: 'In energy trading',
  },
  {
    icon: Award,
    value: 2025,
    suffix: '',
    label: 'Since',
    description: 'Founded with vision',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter || hasAnimated.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;
          
          gsap.to(
            { val: 0 },
            {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setCount(Math.floor(this.targets()[0].val));
              },
            }
          );
        },
        once: true,
      });
    }, counter);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={counterRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll('.stat-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardElements,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
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
            Our Impact
          </span>
          <h2 className="heading-display text-display-2 text-optus-dark mb-6">
            Fueling Your Global Needs
          </h2>
          <p className="text-base md:text-lg text-optus-gray max-w-2xl mx-auto leading-relaxed">
            Optus Energy connects our worldwide refinery partners with flexible,
            buyer-friendly fuel supply solutions tailored to your operations.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white rounded-3xl p-10 md:p-12 card-shadow hover:card-shadow-hover transition-all duration-500 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-optus-blue/10 to-optus-blue/5 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={32} className="text-optus-blue" />
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-optus-dark mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-display font-semibold text-xl text-optus-dark mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-optus-gray">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
