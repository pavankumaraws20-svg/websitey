import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
       {/* Banner */}
       <div className="bg-maroon-900 text-white pt-40 pb-20 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Heritage</h1>
                <p className="text-gold-300 text-lg max-w-2xl mx-auto px-4">Celebrating 40 years of trust, purity, and timeless artistry.</p>
            </div>
       </div>

       {/* Story Section */}
       <Section>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="order-2 md:order-1">
                   <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-6">A Legacy of Gold</h2>
                   <p className="text-gray-600 mb-4 leading-relaxed">
                       Established in 1985 by Shri Rajeshver Gupta, Raj Jewelers began as a humble workshop in Mumbai with a singular vision: to create jewelry that isn't just an accessory, but an emotion passed down through generations.
                   </p>
                   <p className="text-gray-600 mb-6 leading-relaxed">
                       Over the decades, we have grown into one of the most trusted names in the industry. Our commitment to BIS Hallmarked purity and transparent pricing has earned us the loyalty of thousands of families who trust us for their most precious moments—from weddings to anniversaries.
                   </p>
                   <div className="grid grid-cols-2 gap-6 mt-8">
                       <div>
                           <span className="block text-3xl font-bold text-gold-600 font-serif">1985</span>
                           <span className="text-sm text-gray-500 uppercase tracking-wider">Established</span>
                       </div>
                       <div>
                           <span className="block text-3xl font-bold text-gold-600 font-serif">50k+</span>
                           <span className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</span>
                       </div>
                   </div>
               </div>
               <div className="order-1 md:order-2">
                   <div className="relative p-4 border-2 border-gold-200 rounded-sm">
                        <img 
                            src="https://picsum.photos/id/453/800/1000" 
                            alt="Raj Jewelers Store Founder" 
                            className="w-full h-auto shadow-lg"
                        />
                   </div>
               </div>
           </div>
       </Section>

       {/* Values */}
       <Section className="bg-gray-50">
           <div className="max-w-4xl mx-auto text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-maroon-900 mb-4">Why Choose Raj Jewelers?</h2>
               <p className="text-gray-600">We don't just sell gold; we build relationships based on three pillars.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                   { title: '100% Transparency', desc: 'We use the latest Karatmeter technology to test purity in front of you. No hidden charges, ever.' },
                   { title: 'Master Craftsmanship', desc: 'Our artisans are selected from the finest hubs in India—Kolkata for filigree, Jaipur for Polki, and Coimbatore for temple jewelry.' },
                   { title: 'Fair Exchange Policy', desc: 'Get the best value for your old gold when you exchange it for new designs at Raj Jewelers.' }
               ].map((item, idx) => (
                   <div key={idx} className="bg-white p-8 border-t-4 border-maroon-900 shadow-sm">
                       <h3 className="text-xl font-bold font-serif mb-3 text-gray-900">{item.title}</h3>
                       <p className="text-gray-600">{item.desc}</p>
                   </div>
               ))}
           </div>
       </Section>
    </div>
  );
};

export default About;