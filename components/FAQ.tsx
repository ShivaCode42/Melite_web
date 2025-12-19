import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-[#f0f9ff] to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400">
              Nejčastější dotazy
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 50}>
                <div 
                  className={`border border-blue-200 rounded-md overflow-hidden transition-all duration-300 bg-white ${
                    isOpen ? 'border-blue-300 shadow-sm' : 'hover:border-blue-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors"
                  >
                    <span className={`text-sm md:text-base font-medium pr-4 transition-colors duration-300 ${
                      isOpen ? 'text-blue-600' : 'text-gray-700'
                    }`}>
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-blue-50 text-blue-500 border-blue-200' 
                          : 'bg-white text-gray-300 border-gray-200 hover:border-blue-300 hover:text-blue-400'
                      }`}>
                        {isOpen ? (
                          <Minus size={16} strokeWidth={2.5} className="transition-transform duration-300" />
                        ) : (
                          <Plus size={16} strokeWidth={2.5} className="transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {/* Stable CSS Grid Expansion */}
                  <div 
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 text-gray-600 text-sm leading-relaxed font-light">
                        <div className="pt-2 border-t border-blue-50/50">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};