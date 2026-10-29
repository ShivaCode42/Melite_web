import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Building2, 
  ShieldCheck, 
  Server, 
  FileCheck2, 
  Clock, 
  FileText, 
  Layers, 
  ArrowRight, 
  Plus, 
  Minus,
  ArrowLeft,
  CheckCircle,
  FolderSync,
  Archive,
  FileSearch,
  Cpu
} from 'lucide-react';

interface PublicSectorPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const PublicSectorPage: React.FC<PublicSectorPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Musíme měnit spisovou službu?',
      answer: 'Ne nutně. SIESE je navrženo tak, aby doplnilo stávající systémy o dlouhodobé uchování a prokazatelnost záznamů.'
    },
    {
      question: 'Co když vyprší platnost elektronického razítka?',
      answer: 'Průběžné přerazítkování pomáhá zachovat ověřitelnost záznamů po dobu jejich uchování.'
    },
    {
      question: 'Podporuje SIESE trvalé uchovávání?',
      answer: 'Architektura podporuje dlouhodobé uchovávání. Konkrétní způsob archivace je třeba nastavit podle požadavků dané organizace.'
    },
    {
      question: 'Co se stane při výměně hardwaru?',
      answer: 'Přenos dat mezi úložišti lze realizovat pomocí SIESE MOF. Konkrétní migrační scénář se ověřuje podle prostředí organizace.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Státní správa a veřejný sektor"
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-[#f0f7ff] border-b border-blue-100/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            <button 
              onClick={onNavigateHome}
              className="flex items-center text-[#1a5bb5] hover:underline font-medium gap-1"
            >
              <ArrowLeft size={15} />
              <span>Domů</span>
            </button>
            <span>/</span>
            <span className="text-gray-400">Řešení</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Státní správa</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            {/* Title / H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Státní správa
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Společný text / Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Rozhodnutí, usnesení a další úřední dokumenty musí zůstat dostupné a čitelné i po výměně informačních systémů. SIESE pomáhá dlouhodobě uchovávat digitální záznamy, doložit jejich historii a řídit jejich životní cyklus — bez nutnosti nahrazovat stávající spisovou službu.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350}>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-8 py-4 rounded-md text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Domluvit konzultaci</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: Požadavky veřejné správy */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Zákonné a provozní nároky
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Požadavky veřejné správy
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <Archive size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dlouhodobé uchovávání dokumentů
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Zajistěte dostupnost digitálních záznamů po dobu stanovenou příslušnými pravidly, včetně dokumentů určených k trvalému uchování.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <ShieldCheck size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Důvěryhodnost elektronických záznamů
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Uchovávejte důkazy o původu, integritě a historii dokumentů.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <FileSearch size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kontroly a dohledatelnost
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Připravujte podklady pro audit, kontrolní orgány i další oprávněné žádosti.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Co SIESE řeší */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co SIESE řeší
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Block 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5bb5] mb-3">
                  Dokumenty zůstávají ověřitelné
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Dlouhodobé uchování a průběžné přerazítkování podporují ověřitelnost záznamů i po změně technologie.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                  <Archive size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5bb5] mb-3">
                  Archiv nezávislý na původním systému
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Dokumenty a jejich metadata zůstávají dostupné i po migraci nebo výměně hardwaru.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                  <FileText size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5bb5] mb-3">
                  Řízená skartace
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Retenční pravidla, evidence operací a protokoly o skartaci usnadňují doložení toho, jak bylo se záznamy naloženo.
                </p>
              </div>
            </ScrollReveal>

            {/* Block 4 */}
            <ScrollReveal delay={250} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                  <FolderSync size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#1a5bb5] mb-3">
                  Napojení bez výměny spisové služby
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  SIESE lze integrovat prostřednictvím API se stávajícími spisovými a agendovými systémy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Proč SIESE? */}
      <section className="py-16 md:py-24 bg-[#0d2346] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Proč SIESE?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm mb-6 border border-blue-400/30">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Méně dohledávání
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Rychlejší příprava podkladů pro kontroly a vyřizování žádostí.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm mb-6 border border-blue-400/30">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Bezpečná archivace
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Dostupnost dokumentů i po změně systému nebo dodavatele.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-sm mb-6 border border-blue-400/30">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Okamžitě doložitelná historie
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Doložitelná historie uložených záznamů a jejich životního cyklu.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Bezproblémová integrace do vašich systémů a procesů */}
      <section className="py-12 md:py-16 bg-dot-grid border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border-2 border-blue-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Server size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Bezproblémová integrace do vašich systémů a procesů
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-light">
                  SIESE se může napojit prostřednictvím REST API na stávající systémy a běžet na vlastní infrastruktuře organizace. Architektura podporuje rozsáhlé objemy dokumentů a jejich přesun mezi úložišti.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#1a5bb5] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm whitespace-nowrap"
                >
                  Konzultovat architekturu
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5: Časté otázky */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Odpovědi na vaše otázky
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Časté otázky
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <ScrollReveal key={index} delay={index * 60}>
                  <div 
                    className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-blue-300 shadow-sm bg-blue-50/20' : 'border-gray-200 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-base font-semibold pr-4 transition-colors ${
                        isOpen ? 'text-[#1a5bb5]' : 'text-gray-800'
                      }`}>
                        {item.question}
                      </span>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#1a5bb5] text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-blue-50 pt-3 font-light">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a5bb5] via-[#1e6cd9] to-[#0052cc] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Zjistěte, jak může SIESE zjednodušit přípravu podkladů pro kontrolu
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak zajistit dlouhodobou dostupnost a ověřitelnost úředních listin bez nutnosti měnit stávající spisovou službu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-10 py-4 rounded-md text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95"
              >
                Domluvit konzultaci
              </button>
              <button
                onClick={onNavigateHome}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium px-8 py-4 rounded-md text-base transition-colors"
              >
                Zpět na hlavní přehled
              </button>
            </div>

            {/* Footer copyright */}
            <div className="pt-12 mt-12 border-t border-white/10 text-center text-white/50 text-[11px] md:text-xs">
              &copy; 2026 MELITE. Všechna práva vyhrazena.
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
