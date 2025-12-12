import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import { Filter } from 'lucide-react';

const Collections: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [priceSort, setPriceSort] = useState<'asc' | 'desc' | 'default'>('default');

  const categories = ['All', ...Object.values(ProductCategory)];

  const filteredProducts = useMemo(() => {
    let result = activeFilter === 'All' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === activeFilter);
    
    if (priceSort === 'asc') {
        result = [...result].sort((a, b) => a.price - b.price);
    } else if (priceSort === 'desc') {
        result = [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeFilter, priceSort]);

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-maroon-900 text-white pt-40 pb-16 text-center">
            <h1 className="text-4xl font-serif font-bold">Our Collections</h1>
            <p className="text-gold-300 mt-2">Explore the finest craftsmanship in gold</p>
       </div>

       <Section>
            {/* Filters Control Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                    <Filter size={20} className="text-maroon-900 flex-shrink-0" />
                    <span className="font-bold text-gray-700 mr-2">Filter:</span>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                activeFilter === cat 
                                    ? 'bg-maroon-900 text-white' 
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    <span className="font-bold text-gray-700 text-sm">Sort By:</span>
                    <select 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maroon-900 focus:border-maroon-900 block w-full p-2"
                        value={priceSort}
                        onChange={(e) => setPriceSort(e.target.value as any)}
                    >
                        <option value="default">Featured</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">No products found in this category.</p>
                    <button 
                        onClick={() => setActiveFilter('All')} 
                        className="mt-4 text-maroon-900 font-bold hover:underline"
                    >
                        View All Collections
                    </button>
                </div>
            )}
       </Section>
    </div>
  );
};

export default Collections;