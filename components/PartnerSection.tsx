import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const PartnerSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-dot-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          {/* Card container with blue edges matching the rest of the site's design language */}
          <div className="bg-white border border-blue-100 rounded-sm shadow-sm p-8 md:p-16 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              
              {/* Logo Side - Now using a freely changeable image file */}
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-1/2">
                <div className="relative w-full max-w-[420px]">
                  <img 
                    src="/logo-C01swnAH.webp" 
                    alt="Nesax Logo" 
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      // Fallback in case the image is missing during development
                      console.warn("Logo image not found at /logo-C01swnAH.webp");
                    }}
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="text-2xl md:text-3xl font-medium text-[#1e6cd9] mb-4">
                  Partner pro vaše řešení
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-md">
                  Společnost Nesax je oficiálním partnerem pro implementaci systému Melite.
                </p>
                
                {/* Contact Button */}
                <a 
                  href="https://www.nesax.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block 
                    bg-[#0052cc] 
                    text-white 
                    px-14 py-4 
                    rounded-md 
                    text-lg font-bold 
                    transition-all duration-300 ease-out
                    shadow-md 
                    hover:bg-[#0060e6] 
                    hover:shadow-[0_10px_40px_-10px_rgba(0,82,204,0.7)] 
                    hover:brightness-110
                    relative
                    overflow-hidden
                  "
                >
                  <span className="relative z-10">Kontaktovat</span>
                </a>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};