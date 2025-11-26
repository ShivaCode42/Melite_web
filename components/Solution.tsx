import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

export const Solution: React.FC = () => {
  const [openStepIndex, setOpenStepIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStepIndex(openStepIndex === index ? null : index);
  };

  return (
    <section id="reseni" className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-6">
            Spravovat dokumenty jde lépe!
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
            Zapomeňte na nekonečné skenování, nepřehledné šanony, hlídání termínů a podpisů. SIESE je komplexní řešení pro správu celého životního cyklu dokumentů. Vše přehledně, bezpečně a elektronicky.
          </p>
        </ScrollReveal>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal delay={200}>
          <div className="text-center mb-10">
             <h3 className="text-2xl text-blue-300 font-medium">Jak SIESE funguje</h3>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="bg-[#1f6dc6] rounded-md overflow-hidden shadow-xl flex flex-col lg:flex-row max-w-6xl mx-auto">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
               {/* Using a placeholder that resembles a laptop with document */}
               <img 
                 src="https://picsum.photos/800/800" 
                 alt="SIESE Interface on Laptop" 
                 className="absolute inset-0 w-full h-full object-cover p-8"
                 style={{ objectFit: 'cover' }}
               />
               {/* Overlay simple border to mimic laptop frame if needed, but clean image is better */}
               <div className="absolute inset-8 border-8 border-gray-800 rounded-t-lg pointer-events-none"></div>
               <div className="absolute bottom-8 left-8 right-8 h-4 bg-gray-800 rounded-b-md pointer-events-none"></div>
            </div>

            {/* Steps Side */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[#1f6dc6] text-white">
              <div className="space-y-0">
                {WORKFLOW_STEPS.map((step, index) => (
                  <div key={index} className="border-b border-blue-400/30 last:border-0">
                    <button 
                      onClick={() => toggleStep(index)}
                      className="w-full flex items-center py-4 text-left focus:outline-none group"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-colors duration-300 mr-4 ${
                        openStepIndex === index 
                          ? 'bg-white text-[#1f6dc6] border-white font-bold' 
                          : 'border-blue-300 text-white group-hover:border-white'
                      }`}>
                        {index + 1}
                      </div>
                      <span className={`text-lg font-medium flex-grow transition-colors duration-300 ${
                        openStepIndex === index ? 'text-white' : 'text-blue-100 group-hover:text-white'
                      }`}>
                        {step.title}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`text-blue-300 transition-transform duration-300 ${
                            openStepIndex === index ? 'rotate-180 text-white' : 'group-hover:text-white'
                        }`} 
                      />
                    </button>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openStepIndex === index ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="pl-14 pr-4 text-blue-100 text-sm font-light leading-relaxed">
                            {step.description}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};