import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1e6cd9] to-[#004e9a] pt-48 pb-40 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Abstract circles to simulate the gradient texture in the original image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto z-0">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
            Komplexní platforma pro správu dokumentů
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <p className="text-blue-100 text-sm md:text-base mb-10 max-w-2xl mx-auto font-light">
            Schvalujte, podepisujte a archivujte všechny dokumenty na jednom místě.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-lg mx-auto shadow-lg">
            <input
              type="email"
              placeholder="váš email"
              className="w-full sm:w-64 px-4 py-3 text-gray-900 bg-white placeholder-gray-400 focus:outline-none rounded-t-sm sm:rounded-l-sm sm:rounded-t-none text-sm"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-[#0d1e35] text-white text-sm font-medium hover:bg-gray-900 transition-colors rounded-b-sm sm:rounded-r-sm sm:rounded-b-none whitespace-nowrap">
              Stáhnout brožuru
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};