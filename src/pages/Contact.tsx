import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

      // Info animation
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { x: 40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-[#F6F7F9]">
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <span className="micro-label text-optus-blue mb-4 block">Contact Us</span>
            <h1 className="heading-display text-display-2 text-optus-dark mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-optus-gray leading-relaxed">
              Ready to discuss your fuel requirements? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div ref={infoRef}>
              <h2 className="heading-display text-2xl md:text-3xl text-optus-dark mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-optus-gray mb-10 leading-relaxed">
                Whether you have questions about our fuel products, delivery options, or want to request a quote, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-optus-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-optus-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-optus-dark mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:dan@optusenergy.com"
                      className="text-optus-gray hover:text-optus-blue transition-colors"
                    >
                      dan@optusenergy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-optus-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-optus-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-optus-dark mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+17027276945"
                      className="text-optus-gray hover:text-optus-blue transition-colors"
                    >
                      +1-702-727-6945
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-optus-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-optus-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-optus-dark mb-1">
                      Locations
                    </h3>
                    <p className="text-optus-gray">
                      Houston • Dubai • Wyoming
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 card-shadow">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-optus-dark mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-optus-gray">
                    Thank you for reaching out. We'll get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-optus-dark mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl text-optus-dark placeholder:text-gray-400 focus:outline-none focus:border-optus-blue transition-colors ${
                        errors.name ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-optus-dark mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl text-optus-dark placeholder:text-gray-400 focus:outline-none focus:border-optus-blue transition-colors ${
                        errors.email ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-optus-dark mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your fuel requirements..."
                      className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl text-optus-dark placeholder:text-gray-400 focus:outline-none focus:border-optus-blue transition-colors resize-none ${
                        errors.message ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <img
          src="/images/dubai.jpg"
          alt="Dubai skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h2 className="heading-display text-2xl md:text-3xl text-white mb-3">
                Global Reach, Local Presence
              </h2>
              <p className="text-white/80">
                With offices in key energy hubs worldwide, we're never far from your operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
