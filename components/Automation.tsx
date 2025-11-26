import React from 'react';
import { FileCheck, FileText, PenTool, ArrowDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Automation: React.FC = () => {
  return (
    <section className="bg-[#0070f3] text-white py-12 md:py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Flowchart */}
          <div className="w-full lg:w-1/2 relative min-h-auto lg:h-[400px]">
            <ScrollReveal delay={200} className="w-full h-full">
              {/* Responsive Container: Vertical stack on mobile, Absolute positions on Desktop */}
              <div className="flex flex-col lg:block items-center gap-6 relative w-full h-full">
                
                {/* Connecting Lines (SVG) - Hidden on Mobile, Visible on Desktop */}
                <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  {/* Line from Top to Split */}
                  <path d="M250 100 L250 160" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-50" />
                  {/* Horizontal Split Line */}
                  <path d="M140 160 L360 160" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-50" />
                  {/* Line to Left Node */}
                  <path d="M140 160 L140 200" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-50" />
                  {/* Line to Right Node */}
                  <path d="M360 160 L360 200" stroke="white" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-50" />
                </svg>

                {/* Top Node */}
                <div className="relative lg:absolute lg:top-[30px] lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[200px]">
                  <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-full text-center relative">
                    <div className="flex justify-center mb-2">
                        <FileCheck size={24} className="text-blue-500" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm block leading-tight">Schválení<br/>dokumentu</span>
                    
                    {/* Avatar Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                {/* Mobile-only Arrow */}
                <div className="lg:hidden text-white/50">
                  <ArrowDown size={24} />
                </div>

                {/* Desktop: Container for bottom nodes to manage absolute positioning context relative to 80% width if needed, but we use strict offsets */}
                {/* Bottom Left Node */}
                <div className="relative lg:absolute lg:top-[200px] lg:left-[20%] lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[200px]">
                  <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-full text-center relative">
                    <div className="flex justify-center mb-2">
                        <FileText size={24} className="text-blue-500" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm block leading-tight">Zaevidování<br/>dokumentu</span>
                    
                      {/* Avatar Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Mobile-only Arrow */}
                <div className="lg:hidden text-white/50">
                  <ArrowDown size={24} />
                </div>

                {/* Bottom Right Node */}
                <div className="relative lg:absolute lg:top-[200px] lg:left-[80%] lg:transform lg:-translate-x-1/2 z-10 w-full max-w-[200px]">
                  <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-full text-center relative">
                    <div className="flex justify-center mb-2">
                        <PenTool size={24} className="text-blue-500" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm block leading-tight">Podepsání<br/>protistranou</span>
                    
                      {/* Avatar Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                        <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background blur behind nodes to simulate the glow in image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-left mt-8 lg:mt-0">
            <ScrollReveal direction="left" delay={0}>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
                Automatizace workflow<br />
                pro každý dokument<br />
                na pár kliknutí
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200}>
              <p className="text-blue-100 leading-relaxed text-sm md:text-base font-light">
                Definujte si ideální scénář a ten na základě nastavených podmínek jednoduše automatizujte bez nutnosti napsat jediný řádek kódu. Eliminujete tak úzká místa, zamezíte časovým prodlevám a získáte lepší kontrolu nad celým procesem.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};