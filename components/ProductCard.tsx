import React from 'react';
import { Product } from '../types';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-maroon-900 px-6 py-2 rounded-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                <Eye size={18} />
                View Details
            </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-xs text-gold-600 uppercase tracking-widest font-semibold mb-1">{product.category}</p>
        <h3 className="font-serif text-lg font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-center items-center gap-4 border-t border-gray-100 pt-3">
             <span className="text-maroon-900 font-bold text-sm">{product.purity} Gold</span>
             <span className="text-gray-400 text-xs">|</span>
             <span className="text-gray-600 text-sm">Wt: {product.weight}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;