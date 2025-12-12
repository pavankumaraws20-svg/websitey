import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div>
             <h3 className="text-3xl font-serif font-bold text-gold-500 mb-6">Raj Jewelers</h3>
             <p className="text-gray-300 mb-6 font-light leading-relaxed">
               Crafting timeless elegance since 1985. We bring you the finest collection of hallmark gold and diamond jewelry, blending tradition with modernity.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="text-gold-500 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-gold-500 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-gold-500 hover:text-white transition-colors"><Twitter size={20} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6 border-b border-gold-600 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-gold-500 transition-colors">Our Story</Link></li>
              <li><Link to="/collections" className="text-gray-300 hover:text-gold-500 transition-colors">Gold Collection</Link></li>
              <li><Link to="/collections" className="text-gray-300 hover:text-gold-500 transition-colors">Bridal Sets</Link></li>
              <li><Link to="/custom-design" className="text-gray-300 hover:text-gold-500 transition-colors">Custom Designs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif text-white mb-6 border-b border-gold-600 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Jewel Street, Gold Market, Mumbai, MH 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">+91 987 654 3210</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-300">hello@rajjewelers.com</span>
              </li>
            </ul>
          </div>

           {/* Opening Hours */}
           <div>
            <h4 className="text-xl font-serif text-white mb-6 border-b border-gold-600 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span>10:30 AM - 8:30 PM</span>
              </li>
              <li className="flex justify-between text-gold-500">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-maroon-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Raj Jewelers. All Rights Reserved. Designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;