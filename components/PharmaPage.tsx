import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  FlaskConical, 
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
  Database,
  Lock,
  Scale,
  Sparkles,
  Search,
  UserCheck,
  History,
  FileCheck
} from 'lucide-react';

interface PharmaPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const PharmaPage: React.FC<PharmaPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Budeme muset i nadále kvůli inspekci držet staré systémy v provozu?',
      answer: 'Ne. Záznam se archivuje i s metadaty, podpisy a auditní stopou, takže je prokazatelný bez původní aplikace.'
    },
    {
      question: 'Co se stane, když vyprší podpis nebo certifikát?',
      answer: 'Archiv záznamy automaticky přerazítkovává, takže zůstávají ověřitelné po celou dobu uchování.'
    },
    {
      question: 'Je SIESE cloudové řešení?',
      answer: 'Ne. SIESE běží on-premise, připravovaná AI také lokálně.'
    },
    {
      question: 'Nahradí SIESE QMS nebo eTMF?',
      answer: 'Ne. Napojí se za ně a převezme uvolněné záznamy.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Farmacie a vědecký vývoj"
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
            <span className="text-gray-900 font-semibold">Farmacie</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a5bb5] hover:text-blue-700 bg-white px-3 py-1.5 rounded-md border border-blue-200 shadow-xs"
          >
            <span>Domluvit konzultaci</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* [HERO SECTION] */}
      <section className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            {/* Title / H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Farmacie a vědecký vývoj
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Při inspekci SÚKL nebo EMA rozhoduje, jaká verze předpisu, certifikátu nebo protokolu platila v konkrétní den. SIESE je důkazní vrstva nad vašími systémy, která běží na vaší infrastruktuře.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
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

      {/* [PRUH: CO UŽ PLATÍ] */}
      <section className="bg-[#f0f7ff] border-y border-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5]">
                Regulační rámec &bull; Co už platí
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: GMP / GDP */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <FileCheck size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    GMP / GDP
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Inspekce chce přesnou verzi SOP, šaržového záznamu, CoA a change control k danému dni.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: GCP a CTR */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <FileCheck2 size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    GCP a CTR
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Dodatek protokolu znamená re-consent u správné verze a úplné eTMF při uzavření studie.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Farmakovigilance */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <Clock size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    Farmakovigilance
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Hlášení nežádoucího účinku stojí na prokazatelném dni nula vůči 15denní lhůtě.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: BOLESTI — 3 karty] */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Běžná úskalí a rizika
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Rizika ve vývoji a distribuci léčiv
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  01
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Neúplná dokumentace při auditu
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  GMP, GDP a pravidla pro spolupráci s lékaři jsou přísné. Při inspekci, reklamaci šarže nebo zákaznickém auditu se dokládá, jaký SOP, CoA, change control nebo schválení dodavatele platilo v konkrétní den. Chybějící verze znamená nález, zastavenou šarži nebo nákladnou rekonstrukci. U smluv s lékaři (HCP / EFPIA) se stejně draze dokládá transparentnost.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  02
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Životnost systému končí dřív než platnost záznamu
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Výrobní a studijní dokumentace se uchovává desítky let, LIMS, eTMF a QMS se mění každých 7–10 let. Po vyřazení musí záznam zůstat i s metadaty, podpisy a auditní stopou, protože inspektor chce kontext, ne holý soubor. Při běžné migraci se tahle prokazatelnost rozpadne a držet kvůli tomu starý systém stojí peníze a nese bezpečnostní riziko.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  03
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Evidence souhlasu napříč projekty a pracovišti
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Studie napříč desítkami pracovišť vyžaduje při každém dodatku protokolu přepodepsání souhlasu u správné verze. Hlášení nežádoucího účinku běží na 15denní lhůtě. Po uzavření musí dokumentace studie zůstat úplná a prokazatelná.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: ŘEŠENÍ] */}
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

          <div className="space-y-8">
            {/* Block 1: Prokazatelnost po celá desetiletí */}
            <ScrollReveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Dlouhodobá integrita
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Prokazatelnost po celá desetiletí
                </h3>
                <div className="space-y-3.5 text-sm text-blue-100 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Napojení:</strong> přes API na QMS, DMS, ERP, LIMS nebo eTMF/CTMS, na pozadí nebo s vlastním rozhraním.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Při uložení:</strong> kvalifikované časové razítko a elektronická pečeť na každý SOP, šaržový záznam, certifikát a HCP smlouvu.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Po celou dobu uchování:</strong> automatické přerazítkování a konverze do PDF/A.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Záznam v kontextu:</strong> metadata, podpisy, historie verzí a auditní stopa pohromadě. Inspektor ho dostane i bez původního systému.</span>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                    <Sparkles size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>eIDAS 2 ready:</strong> Postaveno na kvalifikovaných službách vytvářejících důvěru dle eIDAS — razítka, pečeti, validace — a navrženo podle požadavků na kvalifikovanou elektronickou archivaci dle eIDAS 2 (čl. 45j, prováděcí nařízení 2025/2532).</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2: Čtyři důkazy pro integritu dat (ALCOA+) */}
            <ScrollReveal delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Principy ALCOA+
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Čtyři důkazy pro integritu dat
                </h3>
                <p className="text-sm text-blue-100 font-light mb-6">
                  Odpovídají principům integrity dat, které inspekce očekávají (ALCOA+).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/15 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">Kdo</span>
                    <h4 className="text-base font-bold text-white mb-2">Důkaz původu</h4>
                    <p className="text-xs text-blue-100 font-light">Identifikace autora a schvalovatele záznamu.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/15 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">Kdy</span>
                    <h4 className="text-base font-bold text-white mb-2">Důkaz existence v čase</h4>
                    <p className="text-xs text-blue-100 font-light">Kvalifikované časové razítko vzniku listiny.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/15 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">Beze změny</span>
                    <h4 className="text-base font-bold text-white mb-2">Důkaz integrity</h4>
                    <p className="text-xs text-blue-100 font-light">Kryptografická záruka nepozměnitelnosti.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/15 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">Co dál</span>
                    <h4 className="text-base font-bold text-white mb-2">Důkaz životního cyklu</h4>
                    <p className="text-xs text-blue-100 font-light">Auditní trail všech kroků až po skartaci.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 3: Retence a data pod kontrolou */}
            <ScrollReveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Retence & Bezpečnost
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Retence a data pod kontrolou
                </h3>
                <div className="space-y-3.5 text-sm text-blue-100 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Retence podle typu záznamu:</strong> eTMF, šaržové záznamy a další výrobní dokumentace, i bez pevného konce uchování.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Pozastavení skartace:</strong> při inspekci, šetření či sporu. Skartace s protokolem.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Expirace certifikátů a smluv dodavatelů hlídané včas:</strong> (připravujeme).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>On-premise:</strong> výrobní know-how zůstává uvnitř vaší infrastruktury.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 4: SIESE Care — studie a farmakovigilance (připravujeme) */}
            <ScrollReveal delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Klinické studie & Bezpečnost
                  </div>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    Připravujeme
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  SIESE Care — studie a farmakovigilance
                </h3>
                <div className="space-y-3.5 text-sm text-blue-100 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Re-consent:</strong> při změně protokolu kampaň na správnou verzi souhlasu.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Den nula:</strong> prokazatelné razítko vůči 15denní lhůtě.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Uzavření studie:</strong> kontrola úplnosti eTMF.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bezproblémová integrace do vašich systémů a procesů */}
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

      {/* [SEKCE: VÝSLEDKY — 4 karty] */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Přidaná hodnota
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Proč SIESE
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Audity bez starostí
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Životní cyklus záznamu, verzi k historickému datu a auditní stopu předložíte SÚKL, EMA nebo auditorovi na vyžádání z jednoho místa.
                </p>
              </div>
            </ScrollReveal>

            {/* 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Už žádné udržování starých systémů kvůli kontrolám
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Záznamy z vyřazených LIMS, eTMF či QMS zůstávají prokazatelné v jednom archivu, bez licencí za aplikace, které už nikdo nepoužívá.
                </p>
              </div>
            </ScrollReveal>

            {/* 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Průkaznost i po desítkách let
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Co bylo schváleno, přežije expiraci certifikátů, odchod personálu i výměnu systému.
                </p>
              </div>
            </ScrollReveal>

            {/* 4 */}
            <ScrollReveal delay={400} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Know-how pod vaší kontrolou
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Klíčové informace, smlouvy o kvalitě, certifikáty šarží ani HCP dokumentace neopustí vaši infrastrukturu.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: FAQ] */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-t border-blue-50">
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
                      isOpen ? 'border-blue-300 shadow-sm bg-white' : 'border-gray-200 hover:border-blue-200 bg-white'
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

      {/* [CTA BANNER] */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a5bb5] via-[#1e6cd9] to-[#0052cc] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ukážeme vám, jak by vypadaly podklady pro vaši příští inspekci
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak zajistit soulad se SÚKL, EMA a principy ALCOA+ bez nutnosti udržovat staré systémy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-10 py-4 rounded-md text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95"
              >
                Domluvit 30min konzultaci
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
