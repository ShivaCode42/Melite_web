import React from 'react';
import { STATS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400">
              Proč si vybrat SIESE?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {STATS.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div 
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left min-h-[200px] flex flex-col justify-center h-full"
              >
                <div className="text-4xl font-light text-[#4a90e2] mb-4">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed">
                  {stat.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
