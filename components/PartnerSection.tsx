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
              
              {/* Logo Side - Reconstructed with extreme precision to match the provided reference image */}
              <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-1/2">
                <div className="relative w-full max-w-[420px]">
                  <svg 
                    viewBox="0 0 380 140" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-auto"
                  >
                    {/* Grid definitions based on the precise layout of the provided Nesax logo image */}
                    
                    {/* Vertical block on the left (Rows 0-3) */}
                    {[0, 1, 2].map(col => 
                      [0, 1, 2, 3].map(row => (
                        <rect 
                          key={`gray-top-${col}-${row}`} 
                          x={10 + col * 13} 
                          y={10 + row * 13} 
                          width="9" 
                          height="9" 
                          fill="#cccccc" 
                        />
                      ))
                    )}

                    {/* Row 4: Gray dots followed by 5 Red dots precisely under the 'ax' */}
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(col => {
                      const isRed = col >= 18 && col <= 22;
                      return (
                        <rect 
                          key={`row-4-${col}`} 
                          x={10 + col * 13} 
                          y={10 + 4 * 13} 
                          width="9" 
                          height="9" 
                          fill={isRed ? "#e31e24" : "#cccccc"} 
                        />
                      );
                    })}

                    {/* Row 5: All gray dots extension */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(col => (
                      <rect 
                        key={`row-5-${col}`} 
                        x={10 + col * 13} 
                        y={10 + 5 * 13} 
                        width="9" 
                        height="9" 
                        fill="#cccccc" 
                      />
                    ))}

                    {/* Row 6: The large red accent square on the far left + Gray dots extension */}
                    <rect x="10" y={10 + 6 * 13 - 4} width="22" height="22" fill="#e31e24" />
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(col => (
                      <rect 
                        key={`row-6-${col}`} 
                        x={10 + col * 13} 
                        y={10 + 6 * 13} 
                        width="9" 
                        height="9" 
                        fill="#cccccc" 
                      />
                    ))}

                    {/* "nesax" Typography - Precise matching of the italic bold sans-serif style */}
                    <text 
                      x="58" 
                      y="54" 
                      fill="#231f20" 
                      style={{ 
                        font: 'italic bold 76px Arial, Helvetica, sans-serif',
                        letterSpacing: '-2px'
                      }}
                    >
                      nesax
                    </text>
                  </svg>
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