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
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400">
              Nejčastější dotazy
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div 
                className="border border-blue-200 rounded-md overflow-hidden transition-all duration-200 hover:border-blue-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 bg-white text-left focus:outline-none"
                >
                  <span className="text-gray-700 text-sm md:text-base font-medium pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 text-blue-400">
                    {openIndex === index ? (
                      <div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center bg-blue-50">
                        <Minus size={18} />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center bg-white hover:bg-blue-50">
                        <Plus size={18} />
                      </div>
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent">
                    {item.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};