import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';
import { ContactStatus } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<ContactStatus>(ContactStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(ContactStatus.SENDING);
    
    // Simulate API call
    setTimeout(() => {
      setStatus(ContactStatus.SUCCESS);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(ContactStatus.IDLE), 5000);
    }, 1500);
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-600">Have a question about a machine? Need a quote? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 font-serif">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">Phone</h3>
                  <p className="text-slate-400 mt-1">{COMPANY_PHONE}</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">Email</h3>
                  <p className="text-slate-400 mt-1">{COMPANY_EMAIL}</p>
                  <p className="text-slate-500 text-sm mt-1">24/7 Online Support</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-800 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">Office</h3>
                  <p className="text-slate-400 mt-1 max-w-xs">{COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Send us a Message</h2>
            
            {status === ContactStatus.SUCCESS && (
               <div className="mb-6 bg-green-50 text-green-700 p-4 rounded-lg border border-green-200">
                 Thank you! Your message has been sent successfully. We will contact you shortly.
               </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-gold-500 focus:border-gold-500 outline-none transition-all"
                  placeholder="Tell us which machine you are interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === ContactStatus.SENDING}
                className="w-full bg-gold-500 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center"
              >
                {status === ContactStatus.SENDING ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;