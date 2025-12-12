import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, TESTIMONIALS } from '../constants';
import { ArrowRight, Star, Award, ShieldCheck, Heart, TrendingUp, ChevronDown, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner - Pink Diamond Theme */}
      <div className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
        
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0">
            {/* Using a high-quality diamond necklace image */}
            <img 
                src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1920" 
                alt="Pink Diamond Necklace"
                className="w-full h-full object-cover object-center scale-105 animate-pulse-slow transition-transform duration-[20s] hover:scale-110"
                style={{ objectPosition: 'center 40%' }}
            />
            {/* Overlays for Pink Diamond Aesthetic & Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
            <div className="absolute inset-0 bg-rose-900/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        </div>

        {/* Navbar Protection Gradient */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/90 to-transparent z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center pt-20 text-center h-full">
            
            {/* Editorial Heading */}
            <div className="mb-8 animate-fade-in-up relative drop-shadow-2xl">
                 <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
                    <div className="h-[1px] w-16 bg-rose-300"></div>
                    <Sparkles size={16} className="text-rose-300" />
                    <p className="text-rose-200 text-xs md:text-sm uppercase tracking-[0.4em] font-medium">The Royal Collection</p>
                    <Sparkles size={16} className="text-rose-300" />
                    <div className="h-[1px] w-16 bg-rose-300"></div>
                 </div>
                 
                 <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white leading-[0.9] drop-shadow-lg tracking-tight">
                    TIMELESS <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-100 to-rose-300 italic font-light pr-2">ELEGANCE</span>
                </h1>
                <p className="mt-8 text-rose-100/90 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto leading-relaxed border-l-2 border-rose-400/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                    Discover the epitome of luxury. Handcrafted for those who seek the extraordinary.
                </p>
            </div>

            {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up delay-200">
                <Link 
                    to="/collections" 
                    className="bg-white text-maroon-900 px-12 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-rose-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                >
                    View Collection
                </Link>
                <Link 
                    to="/custom-design" 
                    className="bg-transparent border border-white/40 text-white px-12 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm transform hover:-translate-y-1"
                >
                    Custom Design
                </Link>
            </div>

            {/* Compact Gold Rate */}
            <div className="animate-fade-in-up delay-300 absolute bottom-12 md:bottom-20 w-full px-4">
                <div className="inline-flex flex-wrap justify-center items-center gap-x-8 gap-y-2 bg-black/40 backdrop-blur-xl border border-white/10 py-4 px-10 rounded-full shadow-2xl hover:border-rose-400/30 transition-colors mx-auto">
                    <div className="flex items-center gap-2">
                        <TrendingUp size={18} className="text-rose-400" />
                        <span className="text-rose-200 uppercase tracking-widest text-xs font-bold">Today's Rate</span>
                    </div>
                    <div className="h-4 w-[1px] bg-white/20 hidden sm:block"></div>
                    <div className="flex items-center gap-6 text-sm">
                         <span className="text-white font-mono flex items-center gap-2">
                            <span className="text-gray-400 text-xs">22K</span>₹6,850
                        </span>
                        <span className="text-white font-mono flex items-center gap-2">
                            <span className="text-gray-400 text-xs">24K</span>₹7,450
                        </span>
                        <span className="text-white font-mono flex items-center gap-2">
                            <span className="text-gray-400 text-xs">Silver</span>₹92
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Features / Values */}
      <Section className="bg-white relative z-30 pt-24 pb-12 rounded-t-[3rem] -mt-16 shadow-[0_-20px_60px_rgba(0,0,0,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
              <div className="p-8 group hover:bg-gray-50 rounded-2xl transition-colors duration-300">
                  <div className="w-20 h-20 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-6 text-maroon-900 group-hover:bg-maroon-900 group-hover:text-gold-500 transition-all duration-300">
                      <Award size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">BIS Hallmarked</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Every piece comes with a government-approved hallmark certification guaranteeing 100% purity.</p>
              </div>
              <div className="p-8 group hover:bg-gray-50 rounded-2xl transition-colors duration-300">
                   <div className="w-20 h-20 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-6 text-maroon-900 group-hover:bg-maroon-900 group-hover:text-gold-500 transition-all duration-300">
                      <ShieldCheck size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">Lifetime Exchange</h3>
                  <p className="text-gray-500 font-light leading-relaxed">We stand by our craftsmanship. Enjoy lifetime maintenance and easy exchange policies.</p>
              </div>
              <div className="p-8 group hover:bg-gray-50 rounded-2xl transition-colors duration-300">
                   <div className="w-20 h-20 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-6 text-maroon-900 group-hover:bg-maroon-900 group-hover:text-gold-500 transition-all duration-300">
                      <Heart size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-gray-900">Handcrafted</h3>
                  <p className="text-gray-500 font-light leading-relaxed">Designed by master artisans who have been preserving the art of jewelry making for generations.</p>
              </div>
          </div>
      </Section>

      {/* Featured Collection */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-6">
            <div className="text-left">
                <span className="text-gold-600 uppercase tracking-[0.2em] text-sm font-bold block mb-2">Our Best Sellers</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900">Trending Collections</h2>
            </div>
            <Link to="/collections" className="hidden md:inline-flex items-center text-maroon-900 font-bold hover:text-gold-600 transition-colors group">
                View All Products <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
            <Link to="/collections" className="inline-flex items-center text-maroon-900 font-bold border-b-2 border-maroon-900 hover:text-gold-600 hover:border-gold-600 transition-colors pb-1">
                View All Products <ArrowRight size={18} className="ml-2" />
            </Link>
        </div>
      </Section>

      {/* Bridal Banner */}
      <div className="relative py-40 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1602123512399-5231c5b8b939?q=80&w=1920")'}}>
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/60 to-black/80"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
              <span className="text-gold-400 tracking-[0.4em] uppercase text-sm font-bold mb-4 block">For the special day</span>
              <h2 className="text-white font-serif text-5xl md:text-7xl mb-6">The Royal Bridal Collection</h2>
              <p className="text-gray-200 text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                  Adorn yourself in our heritage-inspired bridal sets that celebrate the grandeur of Indian weddings.
              </p>
              <Link to="/collections" className="inline-block bg-transparent border-2 border-gold-500 text-gold-500 px-12 py-4 hover:bg-gold-500 hover:text-maroon-900 transition-all font-bold uppercase tracking-widest text-sm">
                  Explore Bridal
              </Link>
          </div>
      </div>

      {/* Testimonials */}
      <Section className="bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-maroon-900">Client Stories</h2>
             <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(t => (
                  <div key={t.id} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 relative border-t-4 border-maroon-900">
                      <div className="text-gold-500 flex mb-6">
                          {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                      </div>
                      <p className="text-gray-600 italic mb-8 text-lg font-light leading-relaxed">"{t.comment}"</p>
                      <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-serif font-bold text-maroon-900 mr-4">
                              {t.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-serif font-bold text-maroon-900 text-lg">{t.name}</h4>
                            <span className="text-xs text-gold-600 uppercase tracking-wider">{t.location}</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </Section>
    </div>
  );
};

export default Home;