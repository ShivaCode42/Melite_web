import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

export const Solution: React.FC = () => {
  const [openStepIndex, setOpenStepIndex] = useState<number>(1); // Default to item 2 (index 1) as shown in the reference image

  const toggleStep = (index: number) => {
    setOpenStepIndex(openStepIndex === index ? -1 : index);
  };

  return (
    <section id="reseni" className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <ScrollReveal>
          <h2 className="text-xl md:text-2xl font-medium text-blue-300 mb-6 uppercase tracking-wide">
            Jak SIESE funguje
          </h2>
        </ScrollReveal>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal delay={200}>
          <div className="bg-[#1f6dc6] rounded-md overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-6xl mx-auto border border-blue-400/20">
            
            {/* Left Side: Image with specific blue overlay */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                 alt="Modern Workplace" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b82]/90 to-[#1f6dc6]/60 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>

            {/* Right Side: Accordion Steps */}
            <div className="lg:w-1/2 p-4 lg:p-8 flex flex-col bg-[#1f6dc6] text-white">
              <div className="flex flex-col h-full justify-center">
                {WORKFLOW_STEPS.map((step, index) => {
                  const isOpen = openStepIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="border-b border-white/10 last:border-0"
                    >
                      <button 
                        onClick={() => toggleStep(index)}
                        className="w-full flex items-center py-6 text-left focus:outline-none group"
                      >
                        {/* Number Box */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-md border flex items-center justify-center text-[11px] transition-all duration-300 mr-5 ${
                          isOpen 
                            ? 'bg-white text-[#1f6dc6] border-white font-bold' 
                            : 'border-white/40 text-white group-hover:border-white'
                        }`}>
                          {index + 1}
                        </div>

                        {/* Title */}
                        <span className={`text-sm md:text-base font-bold flex-grow transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}>
                          {step.title}
                        </span>

                        {/* Chevron Icon Container */}
                        <div className={`w-8 h-8 flex items-center justify-center rounded-md transition-all duration-300 ${
                          isOpen ? 'bg-[#3b82f6] text-white shadow-lg' : 'bg-transparent text-white/40 group-hover:text-white'
                        }`}>
                          <ChevronDown 
                            size={18} 
                            className={`transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'rotate-180' : ''}`} 
                          />
                        </div>
                      </button>
                      
                      {/* Description Area with CSS Grid for stable expansion */}
                      <div 
                          className={`grid transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-13 pr-8 pb-8 text-white/80 text-[13px] leading-relaxed font-light ml-[52px]">
                              {step.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};