import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Diamond className="h-6 w-6 text-gold-500" />
              <span className="font-serif text-xl font-bold text-gold-500">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering jewelry manufacturers with state-of-the-art technology. From cutting to polishing, we provide the machines that build your legacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-gold-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-gold-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-gold-500 transition-colors text-sm">Our Machines</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-gold-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-gold-500 transition-colors text-sm">Contact Support</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Categories</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Laser Cutting</li>
              <li className="text-slate-400 text-sm">Casting Machinery</li>
              <li className="text-slate-400 text-sm">Chain Making</li>
              <li className="text-slate-400 text-sm">Polishing & Finishing</li>
              <li className="text-slate-400 text-sm">CNC Engraving</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{COMPANY_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;