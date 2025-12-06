import React from 'react';
import { Machine } from '../types';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  machine: Machine;
}

const ProductCard: React.FC<ProductCardProps> = ({ machine }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={machine.image} 
          alt={machine.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gold-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
          {machine.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{machine.name}</h3>
        <p className="text-slate-600 mb-4 text-sm flex-grow">{machine.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Key Features:</h4>
          <ul className="space-y-1">
            {machine.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600">
                <CheckCircle className="h-4 w-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          to="/contact" 
          className="w-full flex items-center justify-center bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors group mt-auto"
        >
          <span>Request Quote</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;