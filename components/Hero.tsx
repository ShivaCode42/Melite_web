
import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1e6cd9] to-[#004e9a] pt-32 pb-20 md:pt-48 md:pb-40 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* The dot grid pattern (white variant for dark background) */}
         <div className="absolute inset-0 bg-dot-grid-white opacity-40"></div>
         
         {/* Abstract circles for gradient texture */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
         </div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-relaxed">
            Komplexní cloudová platforma pro správu dokumentů
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <p className="text-blue-100 text-sm md:text-base mb-10 max-w-2xl mx-auto font-light">
            Schvalujte, podepisujte a archivujte všechny dokumenty na jednom místě.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
};
