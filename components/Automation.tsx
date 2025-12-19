import React from 'react';
import { FileCheck, FileText, PenTool, ArrowDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Automation: React.FC = () => {
  return (
    <section className="bg-[#0070f3] text-white py-12 md:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Side: Visual Flowchart */}
          <div className="w-full lg:w-[60%] relative min-h-auto lg:h-[450px]">
            <ScrollReveal delay={200} className="w-full h-full">
              {/* Responsive Container */}
              <div className="flex flex-col lg:block items-center gap-12 relative w-full h-full">
                
                {/* Connecting Lines (Responsive SVG using percentages) */}
                <svg 
                  className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                  style={{ zIndex: 0 }}
                >
                  {/* Vertical line from top card */}
                  <path 
                    d="M50 35 L50 48" 
                    stroke="white" 
                    strokeWidth="0.3" 
                    fill="none" 
                    strokeDasharray="1.5 1" 
                    className="opacity-40" 
                  />
                  {/* Horizontal split line */}
                  <path 
                    d="M30 48 L70 48" 
                    stroke="white" 
                    strokeWidth="0.3" 
                    fill="none" 
                    strokeDasharray="1.5 1" 
                    className="opacity-40" 
                  />
                  {/* Vertical line to left card */}
                  <path 
                    d="M30 48 L30 55" 
                    stroke="white" 
                    strokeWidth="0.3" 
                    fill="none" 
                    strokeDasharray="1.5 1" 
                    className="opacity-40" 
                  />
                  {/* Vertical line to right card */}
                  <path 
                    d="M70 48 L70 55" 
                    stroke="white" 
                    strokeWidth="0.3" 
                    fill="none" 
                    strokeDasharray="1.5 1" 
                    className="opacity-40" 
                  />
                </svg>

                {/* Top Node - Centered at 50% */}
                <div className="relative lg:absolute lg:top-[40px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[220px]">
                  <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-2xl w-full text-center relative border border-white/20">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600">
                          <FileCheck size={24} strokeWidth={2} />
                        </div>
                    </div>
                    <span className="text-gray-800 font-bold text-sm block leading-tight">Schválení<br/>dokumentu</span>
                    
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                        <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Mobile-only Arrow */}
                <div className="lg:hidden text-white/50 my-4">
                  <ArrowDown size={32} />
                </div>

                {/* Bottom Left Node - Symmetrical at 30% */}
                <div className="relative lg:absolute lg:top-[240px] lg:left-[30%] lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[220px]">
                  <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-2xl w-full text-center relative border border-white/20">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600">
                          <FileText size={24} strokeWidth={2} />
                        </div>
                    </div>
                    <span className="text-gray-800 font-bold text-sm block leading-tight">Zaevidování<br/>dokumentu</span>
                    
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Mobile-only Arrow */}
                <div className="lg:hidden text-white/50 my-4">
                  <ArrowDown size={32} />
                </div>

                {/* Bottom Right Node - Symmetrical at 70% */}
                <div className="relative lg:absolute lg:top-[240px] lg:left-[70%] lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[220px]">
                  <div className="bg-white text-blue-600 p-6 rounded-2xl shadow-2xl w-full text-center relative border border-white/20">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600">
                          <PenTool size={24} strokeWidth={2} />
                        </div>
                    </div>
                    <span className="text-gray-800 font-bold text-sm block leading-tight">Podepsání<br/>protistranou</span>
                    
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-lg">
                        <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-400 rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[35%] text-left mt-12 lg:mt-0 flex flex-col justify-center">
            <ScrollReveal direction="left" delay={0}>
              <h2 className="text-2xl md:text-3xl font-medium mb-8 leading-tight max-w-sm">
                Automatizace workflow<br />
                pro každý dokument<br />
                na pár kliknutí
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <p className="text-blue-100 leading-relaxed text-sm md:text-base font-light max-w-sm">
                Definujte si ideální scénář a ten na základě nastavených podmínek jednoduše automatizujte bez nutnosti napsat jediný řádek kódu. Eliminujete tak úzká místa, zamezíte časovým prodlevám a získáte lepší kontrolu nad celým procesem.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};