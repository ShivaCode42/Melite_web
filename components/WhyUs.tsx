import React from 'react';
import { WHY_US_CARDS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const WhyUs: React.FC = () => {
  return (
    <section id="o-nas" className="py-12 md:py-20 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-[#1e6cd9]">
              Proč s námi spolupracovat?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={index} delay={index * 150} className="h-full">
                <div 
                  className="bg-white p-8 border border-blue-100 rounded-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-start text-left group"
                >
                  <div className="mb-8 w-14 h-14 flex items-center justify-center bg-brand-light rounded-xl text-brand-blue group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-105">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-[#1e6cd9] mb-6 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};