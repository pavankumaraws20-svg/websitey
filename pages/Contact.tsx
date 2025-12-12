import React from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-maroon-900 text-white pt-40 pb-16 text-center">
            <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
            <p className="text-gold-300 mt-2">We'd love to hear from you</p>
       </div>

       <Section>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Contact Information */}
               <div>
                   <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Visit Our Store</h2>
                   <div className="space-y-6">
                       <div className="flex items-start">
                           <div className="bg-white p-3 shadow-sm rounded-full text-gold-600 mr-4">
                               <MapPin size={24} />
                           </div>
                           <div>
                               <h3 className="font-bold text-gray-900">Address</h3>
                               <p className="text-gray-600">Raj Jewelers, Shop No. 12<br/>Gold Market, Zaveri Bazaar<br/>Mumbai, Maharashtra 400002</p>
                           </div>
                       </div>
                       
                       <div className="flex items-start">
                           <div className="bg-white p-3 shadow-sm rounded-full text-gold-600 mr-4">
                               <Phone size={24} />
                           </div>
                           <div>
                               <h3 className="font-bold text-gray-900">Phone</h3>
                               <p className="text-gray-600">+91 987 654 3210</p>
                               <p className="text-gray-600">+91 22 1234 5678</p>
                           </div>
                       </div>

                       <div className="flex items-start">
                           <div className="bg-white p-3 shadow-sm rounded-full text-gold-600 mr-4">
                               <Mail size={24} />
                           </div>
                           <div>
                               <h3 className="font-bold text-gray-900">Email</h3>
                               <p className="text-gray-600">info@rajjewelers.com</p>
                           </div>
                       </div>

                        <div className="flex items-start">
                           <div className="bg-white p-3 shadow-sm rounded-full text-gold-600 mr-4">
                               <Clock size={24} />
                           </div>
                           <div>
                               <h3 className="font-bold text-gray-900">Opening Hours</h3>
                               <p className="text-gray-600">Monday - Saturday: 10:30 AM - 8:30 PM</p>
                               <p className="text-red-500">Sunday: Closed</p>
                           </div>
                       </div>
                   </div>

                   <div className="mt-8">
                       <a 
                         href="https://wa.me/919876543210" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-green-600 transition-colors"
                       >
                           <MessageCircle size={20} className="mr-2" />
                           Chat on WhatsApp
                       </a>
                   </div>
               </div>

               {/* Enquiry Form */}
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                   <h2 className="text-2xl font-serif font-bold text-maroon-900 mb-6">Send an Enquiry</h2>
                   <form className="space-y-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div>
                               <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                               <input type="text" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-1 focus:ring-maroon-900 focus:border-maroon-900 outline-none" />
                           </div>
                           <div>
                               <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                               <input type="tel" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-1 focus:ring-maroon-900 focus:border-maroon-900 outline-none" />
                           </div>
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                           <input type="email" className="w-full border border-gray-300 p-2 rounded-sm focus:ring-1 focus:ring-maroon-900 focus:border-maroon-900 outline-none" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                           <select className="w-full border border-gray-300 p-2 rounded-sm focus:ring-1 focus:ring-maroon-900 focus:border-maroon-900 outline-none">
                               <option>General Enquiry</option>
                               <option>Bridal Set Appointment</option>
                               <option>Custom Design</option>
                               <option>Gold Rate Query</option>
                           </select>
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                           <textarea rows={4} className="w-full border border-gray-300 p-2 rounded-sm focus:ring-1 focus:ring-maroon-900 focus:border-maroon-900 outline-none"></textarea>
                       </div>
                       <button type="submit" className="w-full bg-maroon-900 text-white font-bold py-3 rounded-sm hover:bg-maroon-800 transition-colors uppercase tracking-wider">
                           Send Message
                       </button>
                   </form>
               </div>
           </div>

           {/* Google Map Embed Placeholder */}
           <div className="mt-16 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-inner relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.918991738734!2d72.82845631490214!3d18.95057798716035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce20e5c98dcf%3A0x6b4034b72c431477!2sZaveri%20Bazaar!5e0!3m2!1sen!2sin!4v1628765432109!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy"
                    title="Store Location"
                ></iframe>
           </div>
       </Section>
    </div>
  );
};

export default Contact;