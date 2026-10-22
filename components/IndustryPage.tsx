import React from 'react';
import { IndustryDetail, SOLUTION_INDUSTRIES } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { ArrowLeft, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

interface IndustryPageProps {
  industry: IndustryDetail;
  onNavigateHome: () => void;
  onSelectIndustry: (href: string) => void;
}

export const IndustryPage: React.FC<IndustryPageProps> = ({
  industry,
  onNavigateHome,
  onSelectIndustry,
}) => {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Top Breadcrumb & Switcher bar */}
      <div className="bg-[#f0f7ff] border-b border-blue-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <button 
              onClick={onNavigateHome}
              className="flex items-center text-[#1a5bb5] hover:underline font-medium gap-1"
            >
              <ArrowLeft size={16} />
              <span>Hlavní stránka</span>
            </button>
            <span>/</span>
            <span className="text-gray-400">Řešení pro odvětví</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{industry.name}</span>
          </div>

          {/* Quick industry selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 whitespace-nowrap">
              Další obory:
            </span>
            {SOLUTION_INDUSTRIES.map((item) => {
              const isActive = item.id === industry.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectIndustry(item.href)}
                  className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#1a5bb5] text-white font-medium shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-[#1a5bb5] border border-blue-100'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1e6cd9] to-[#0d3b82] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-blue-100 mb-6 border border-white/20">
            <Sparkles size={14} className="text-blue-200" />
            <span>Řešení SIESE na míru pro váš segment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {industry.name}
          </h1>

          <p className="text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            {industry.heroDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kontakt-odvetvi"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('kontakt-odvetvi');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-8 py-3.5 rounded-md text-sm md:text-base shadow-lg transition-all transform active:scale-95"
            >
              Nezávazně konzultovat pro {industry.name}
            </a>
            <button
              onClick={onNavigateHome}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-3.5 rounded-md text-sm md:text-base transition-colors"
            >
              Prozkoumat celou platformu
            </button>
          </div>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industry.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-xl border border-blue-100 flex flex-col justify-center text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#1a5bb5] mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Challenges column */}
          <ScrollReveal direction="right">
            <div className="bg-[#fff9f9] border border-red-100 rounded-2xl p-8 md:p-10 h-full">
              <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-xs uppercase tracking-wider mb-4">
                <AlertTriangle size={16} />
                <span>Typické překážky v odvětví</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Co firmy v segmentu {industry.name} nejčastěji brzdí?
              </h2>

              <div className="space-y-6">
                {industry.keyChallenges.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Solutions column */}
          <ScrollReveal direction="left">
            <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-8 md:p-10 h-full">
              <div className="inline-flex items-center gap-2 text-[#1a5bb5] font-semibold text-xs uppercase tracking-wider mb-4">
                <CheckCircle2 size={16} />
                <span>Řešení platformou SIESE</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Jak vám pomůžeme automatizovat procesy
              </h2>

              <div className="space-y-6">
                {industry.solutions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5 shadow-sm">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* CTA Box for this Industry */}
      <div id="kontakt-odvetvi" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1a5bb5] to-[#1e6cd9] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Zajímá vás implementace pro {industry.name}?
            </h2>
            <p className="text-blue-100 text-sm md:text-base font-light mb-8 leading-relaxed">
              Rádi vám ukážeme reálnou případovou studii a připravíme prototyp schvalovacího workflow přímo pro vaše dokumenty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@melite.cz"
                className="w-full sm:w-auto bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-8 py-3.5 rounded-md text-base transition-all shadow-md text-center"
              >
                Napsat na info@melite.cz
              </a>
              <button
                onClick={onNavigateHome}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3.5 rounded-md text-base transition-colors"
              >
                Zpět na přehled
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
