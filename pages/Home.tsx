import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Award, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { MACHINES } from '../constants';

const Home: React.FC = () => {
  const featuredMachines = MACHINES.slice(0, 3);

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             {/* Abstract industrial background pattern */}
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
               </pattern>
               <rect width="100" height="100" fill="url(#grid)" />
             </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Refining the Art of <span className="text-gold-500">Gold Manufacturing</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Shine Jewel Tech delivers cutting-edge machinery for designing, cutting, polishing, and assembling world-class jewelry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/products" 
              className="bg-gold-500 text-slate-900 hover:bg-gold-400 font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center"
            >
              View Machinery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-slate-600 text-white hover:border-gold-500 hover:text-gold-500 font-bold py-3 px-8 rounded-full transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <Settings className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Technology</h3>
              <p className="text-slate-600">Our machines utilize the latest fiber laser and CNC technology for micron-level precision.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <Award className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Industry Standard</h3>
              <p className="text-slate-600">Trusted by leading jewelers across the country for durability and consistent output.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <Truck className="h-10 w-10 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Installation & Support</h3>
              <p className="text-slate-600">Complete onsite installation and training for your team, plus 24/7 technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Featured Machinery</h2>
              <p className="text-slate-600 mt-2">Explore our most popular solutions</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-gold-600 hover:text-gold-700 font-medium">
              View Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMachines.map(machine => (
              <ProductCard key={machine.id} machine={machine} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/products" className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium">
              View Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;