import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Procedures', href: '/procedures' },
  { name: 'Contact', href: '/contact' },
];

const fuels = ['Jet A1', 'D6', 'EN590 / ULSD', 'Marine Gas Oil'];

export function Footer() {
  return (
    <footer className="bg-optus-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                OPTUS ENERGY
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8">
              Fueling global markets with flexible, buyer-friendly solutions from Houston to Dubai.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-optus-blue transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Our Fuels
            </h3>
            <ul className="space-y-4">
              {fuels.map((fuel) => (
                <li key={fuel}>
                  <span className="text-gray-400">{fuel}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-white/90">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-optus-blue/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-optus-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:dan@optusenergy.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    dan@optusenergy.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-optus-blue/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-optus-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <a
                    href="tel:+17027276945"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +1-702-727-6945
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-optus-blue/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-optus-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Locations</p>
                  <p className="text-gray-300">Houston • Dubai • Wyoming</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Optus Energy. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
