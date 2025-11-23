import React from 'react';
import { FileCheck, FileText, PenTool } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Automation: React.FC = () => {
  return (
    <section className="bg-[#0070f3] text-white py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Flowchart */}
          <div className="w-full lg:w-1/2 relative h-[400px]">
            <ScrollReveal delay={200} className="w-full h-full">
              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
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
              <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-48 text-center relative">
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

              {/* Bottom Left Node */}
              <div className="absolute top-[200px] left-[15%] sm:left-[20%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-48 text-center relative">
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

              {/* Bottom Right Node */}
              <div className="absolute top-[200px] left-[85%] sm:left-[80%] lg:left-[80%] transform -translate-x-1/2 flex flex-col items-center z-10">
                <div className="bg-white text-blue-600 p-4 rounded-lg shadow-lg w-48 text-center relative">
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
              
              {/* Decorative background blur behind nodes to simulate the glow in image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-400 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </ScrollReveal>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 text-left">
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
