import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  ShieldCheck, 
  Server, 
  FileCheck2, 
  Network, 
  Scale, 
  Clock, 
  Layers, 
  FileText, 
  SlidersHorizontal, 
  CheckCircle, 
  ArrowRight, 
  Plus, 
  Minus,
  ArrowLeft,
  Lock,
  Cpu,
  Database
} from 'lucide-react';

interface TelecommunicationsPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const TelecommunicationsPage: React.FC<TelecommunicationsPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Nahradí SIESE naše CRM nebo billing?',
      answer: 'Ne. SIESE doplňuje stávající systémy o vrstvu pro dlouhodobé uchování a prokazatelnost záznamů.'
    },
    {
      question: 'Co se stane, když vyprší platnost certifikátu?',
      answer: 'SIESE podporuje průběžné přerazítkování, které pomáhá zachovat ověřitelnost archivovaných záznamů.'
    },
    {
      question: 'Jak řeší SIESE retenční lhůty?',
      answer: 'Pravidla se nastavují podle typu záznamu. Skartaci lze doložit protokolem.'
    },
    {
      question: 'Zvládne velké objemy dokumentů?',
      answer: 'Řešení je navrženo pro rozsáhlé archivy. Konkrétní kapacitu a výkon je vhodné ověřit podle požadavků vašeho prostředí.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Telekomunikace, velkoobchod a provozovatelé sítí"
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
            <span className="text-gray-900 font-semibold">Telekomunikace</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={100}>
            {/* Title / H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight mb-8 leading-[1.2]">
              Telekomunikace
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Když zákazník reklamuje vyúčtování nebo ČTÚ chce vidět přijaté podmínky, rozhoduje verze a okamžik přijetí. SIESE se napojuje na vaše stávající systémy, bez nutnosti cokoliv manuálně ukládat. U každé uzavřené smlouvy a změny tarifu doloží, že v daný okamžik existovala, že se nezměnila a odkud pochází. Razítka se před expirací obnovují, takže jsou dokument vždy legislativně platné.
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

      {/* SECTION 1: Co musí telekomunikační operátor zvládnout */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Regulační a provozní realita
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co musí telekomunikační operátor zvládnout
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <Scale size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ČTÚ a zákaznické smlouvy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Dohledat smluvní podmínky, změny tarifů a podklady k reklamacím.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <Clock size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  GDPR a retenční lhůty
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Uchovávat záznamy po potřebnou dobu a doložit, kdy byly řádně skartovány.
                </p>
              </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <ShieldCheck size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  NIS2 a provoz sítí
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Mít k dispozici dohledatelné záznamy a informace o přístupech v rozsahu nastaveném pro daný systém.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Kde SIESE pomáhá */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Oblasti využití
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Kde SIESE pomáhá
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Block 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a5bb5] mb-4">
                    Zákaznické smlouvy a B2B vztahy
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Uchovávejte smlouvy, dodatky, změny tarifů a souhlasy v podobě, kterou lze později ověřit.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-50 text-xs text-gray-400">
                  Spotřebitelské i velkoobchodní kontrakty
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                    <Network size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a5bb5] mb-4">
                    Síťová infrastruktura
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Mějte dlouhodobě dostupné propojovací smlouvy, věcná břemena, nájemní smlouvy i projektovou a servisní dokumentaci.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-50 text-xs text-gray-400">
                  Vedení, optika, vysílače a břemena
                </div>
              </div>
            </ScrollReveal>

            {/* Block 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-gradient-to-b from-[#f8fbff] to-white rounded-2xl p-8 border border-blue-100 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1a5bb5] text-white flex items-center justify-center mb-6 shadow-sm">
                    <Scale size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a5bb5] mb-4">
                    Právní oddělení a compliance
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Připravujte podklady pro spory, kontroly, audity i due diligence bez zdlouhavého dohledávání napříč systémy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-50 text-xs text-gray-400">
                  Připravenost na kontroly a auditní trail
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Jak SIESE pomáhá (Prove, Understand, Control) */}
      <section className="py-16 md:py-24 bg-[#0d2346] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-2">
                Moduly a schopnosti
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Jak SIESE pomáhá
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Prove */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Důvěryhodnost
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Prove — doložitelná historie dokumentů
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed flex-grow">
                  Kvalifikovaná časová razítka, elektronické pečeti a průběžné přerazítkování pomáhají zachovat ověřitelnost záznamů po dobu jejich uchování.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 2: Understand (připravujeme) */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Kontext
                  </div>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-400/30">
                    Připravujeme
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Understand — smlouvy v souvislostech
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed flex-grow">
                  Propojení rámcových smluv, dodatků, ceníků a souhlasů usnadní orientaci v dokumentaci a určení verze platné k určitému datu.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 3: Control */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Správa životního cyklu
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Control — řízená retence a skartace
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed flex-grow">
                  Nastavte pravidla podle typu záznamu, pozastavte skartaci při sporu a uchovávejte protokol o jejím provedení.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Co tím získáte */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Přínosy pro organizaci
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co tím získáte
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Rychlejší vyřízení reklamací
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Snadnější přístup k relevantním smlouvám a jejich historii.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Lepší připravenost na kontrolu
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Dohledatelné záznamy a dokumentované operace.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-full bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Nezávislost na původním systému
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Dlouhodobé uchování dokumentů a metadat i při změně CRM, billingu nebo úložiště.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: Nasazení bez zbytečných zásahů */}
      <section className="py-12 md:py-16 bg-dot-grid border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border-2 border-blue-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Server size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Nasazení bez zbytečných zásahů
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

      {/* SECTION 6: Časté otázky */}
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

      {/* SECTION 7: Final CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a5bb5] via-[#1e6cd9] to-[#0052cc] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Zjistěte, jak může SIESE zjednodušit práci s vašimi smlouvami
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak propojit stávající billing s důvěryhodným úložištěm a zajistit soulad s ČTÚ i NIS2.
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
