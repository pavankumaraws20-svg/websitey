import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, TrendingUp } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Split links for desktop layout
  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  return (
    <div className="absolute top-0 w-full z-50">
      {/* Top Bar for Gold Rate */}
      <div className="bg-maroon-900/80 backdrop-blur-md text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
            <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-gold-300" />
                <span className="uppercase tracking-widest text-gold-300 font-bold">Today's Gold Rate:</span>
                <span className="font-mono text-gold-100">22K: ₹6,850/gm | 24K: ₹7,450/gm</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-gold-100">
                <span>Free Insured Shipping PAN India</span>
                <span className="text-gold-500">|</span>
                <a href="tel:+919876543210" className="hover:text-gold-300 transition-colors">Call: +91 987 654 3210</a>
            </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative">
            
            {/* Desktop Left Links */}
            <div className="hidden md:flex flex-1 justify-end space-x-8 pr-12">
              {leftLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group drop-shadow-md hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-gold-300'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-300 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Link to="/" className="flex flex-col items-center group">
                <div className="transition-all duration-300 border-2 rounded-full p-2 border-gold-300 group-hover:bg-white/10 group-hover:scale-105 shadow-lg shadow-gold-500/20">
                    <span className="font-serif font-bold text-2xl leading-none text-gold-300">RJ</span>
                </div>
                <span className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-gold-100 group-hover:text-white transition-colors duration-300">
                    Raj Jewelers
                </span>
              </Link>
            </div>

             {/* Desktop Right Links */}
             <div className="hidden md:flex flex-1 justify-start space-x-8 pl-12 items-center">
              {rightLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group drop-shadow-md hover:text-white ${
                    location.pathname === link.path ? 'text-white' : 'text-gold-300'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-300 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
               <a 
                href="tel:+919876543210" 
                className="ml-4 p-2 rounded-full border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-maroon-900 transition-all hover:scale-105 shadow-lg"
              >
                <Phone size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center absolute right-0">
               <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gold-300 hover:text-white focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`md:hidden absolute w-full bg-maroon-900/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden top-full left-0 z-50 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-8 space-y-4 flex flex-col items-center border-t border-white/10">
            {NAV_LINKS.map((link) => (
               <Link
                  key={link.path}
                  to={link.path}
                  className="block w-full text-center py-3 text-lg text-gold-200 font-serif tracking-wider border-b border-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
            ))}
             <div className="pt-4 text-center">
                <p className="text-xs text-gold-500 uppercase tracking-widest mb-2">Today's Gold Rate (22K)</p>
                <p className="text-xl font-bold text-white">₹6,850/gm</p>
             </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;