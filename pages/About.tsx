import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">About Shine Jewel Tech</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Pioneering the future of jewelry manufacturing with innovative technology and precision engineering.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Shine Jewel Tech is a leading provider of high-performance machinery for the jewelry industry. Founded with a vision to modernize traditional craftsmanship, we supply equipment that enhances productivity, precision, and profit for jewelers.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether you are a small workshop looking to automate basic tasks or a large-scale factory requiring full production lines for chains and casting, we have the expertise and the inventory to support your growth.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Quality Assurance</h4>
                  <p className="text-slate-500 text-sm">Every machine is rigorously tested before delivery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Technical Expertise</h4>
                  <p className="text-slate-500 text-sm">Our team consists of engineers with decades of experience in metallurgy and CNC.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold-500 mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">After-Sales Service</h4>
                  <p className="text-slate-500 text-sm">We don't just sell machines; we maintain them for life.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute top-0 left-0 w-full h-full bg-gold-500 rounded-2xl transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://picsum.photos/800/800?random=10" 
               alt="Factory Workshop" 
               className="relative rounded-2xl shadow-xl w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;