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
              
              {/* Logo Side - Reconstructed for 100% accuracy to the reference image */}
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-1/2">
                <div className="relative w-full max-w-[360px]">
                  <svg 
                    viewBox="0 0 400 180" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-auto"
                  >
                    {/* Grey Dot Grid - 15 columns, 5 rows */}
                    <g>
                      {Array.from({ length: 5 }).map((_, row) => 
                        Array.from({ length: 15 }).map((_, col) => {
                          // Skip the spot where the big red square is
                          if (row === 4 && col === 0) return null;
                          // Skip the spots where small red squares are (Row 4, Cols 11-14)
                          if (row === 3 && col >= 10 && col <= 13) return null;
                          
                          return (
                            <rect 
                              key={`dot-${row}-${col}`} 
                              x={col * 22 + 10} 
                              y={row * 22 + 20} 
                              width="14" 
                              height="14" 
                              fill="#D1D5DB" 
                            />
                          );
                        })
                      )}
                    </g>
                    
                    {/* Big Red Accent Square - Bottom Left (Row 5, Col 1) */}
                    <rect x="10" y="108" width="36" height="36" fill="#E31E24" />
                    
                    {/* Text: nesax - Bold, Italic, Black */}
                    <text 
                      x="75" 
                      y="95" 
                      fill="#262626" 
                      style={{ 
                        fontStyle: 'italic', 
                        fontWeight: '900', 
                        fontSize: '92px', 
                        fontFamily: 'Arial Black, Arial, sans-serif',
                        letterSpacing: '-4px'
                      }}
                    >
                      nesax
                    </text>
                    
                    {/* 4 Small Red Squares - Aligned under 'ax' (Row 4, Cols 11-14) */}
                    <rect x="228" y="86" width="18" height="12" fill="#E31E24" />
                    <rect x="252" y="86" width="18" height="12" fill="#E31E24" />
                    <rect x="276" y="86" width="18" height="12" fill="#E31E24" />
                    <rect x="300" y="86" width="18" height="12" fill="#E31E24" />
                  </svg>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-4">
                  Partner pro vaše řešení
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-md">
                  Společnost Nesax je oficiálním partnerem pro implementaci systému Melite.
                </p>
                
                {/* Button with Highlighting Glow Effect (No Movement) */}
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