import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Zap, 
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
  History,
  FileCheck,
  Building2,
  Workflow,
  Shield,
  HardHat,
  AlertTriangle,
  FolderArchive,
  Cpu,
  BadgeAlert
} from 'lucide-react';

interface EnergetikaUtilityPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const EnergetikaUtilityPage: React.FC<EnergetikaUtilityPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Můžeme SIESE provozovat na vlastní infrastruktuře kvůli požadavkům NIS2?',
      answer: 'Ano. SIESE je primárně navrženo pro on-premise nasazení v prostředí zákazníka nebo v privátním cloudu, v plném souladu s bezpečnostními požadavky na kritickou infrastrukturu.'
    },
    {
      question: 'Nahrazuje SIESE naše stávající systémy jako SAP, GIS nebo DMS?',
      answer: 'Ne. SIESE funguje jako archivační a důkazní vrstva napojená za stávající provozní systémy přes REST API. Provozní agendy zůstávají v původních nástrojích.'
    },
    {
      question: 'Jak je zajištěna platnost dokumentů po 20, 30 nebo 50 letech?',
      answer: 'Systém automaticky provádí průběžné přerazítkování (LTV) před vypršením certifikátů a konverzi do standardu PDF/A, čímž garantuje právní platnost a čitelnost po celou dobu životnosti díla.'
    },
    {
      question: 'Jak pomůže SIESE při konsolidaci systémů po fúzích a akvizicích?',
      answer: 'Díky modulu SIESE Migration On the Fly dokážeme extrahovat a dlouhodobě archivovat dokumenty i s metadaty ze starých systémů, které pak můžete bezpečně odstavit a ušetřit licenční náklady.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Energetika a utility"
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
            <span className="text-gray-900 font-semibold">Energetika a utility</span>
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
              Energetika a utility
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Od milionů zákaznických smluv po technickou dokumentaci energetické infrastruktury s životností desítek let. SIESE zajišťuje jejich dlouhodobé uchování a dohledatelnost na vaší vlastní infrastruktuře, ať už jako služba napojená na stávající systémy, nebo s vlastním pracovním rozhraním.
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
            {/* 1: ERÚ */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <Scale size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    ERÚ
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Šetření reklamací a kontrola smluvních podmínek u odběrných míst.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: NIS2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <ShieldCheck size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    NIS2
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Integrita záznamů a evidence přístupů u subjektů kritické infrastruktury.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: EIA a integrované povolení */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <FileCheck2 size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    EIA a integrované povolení
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Povolení a environmentální závazky trvají celý život zdroje.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: DVĚ OBLASTI NASAZENÍ] */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Rozsah pokrytí
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Dvě oblasti nasazení
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light mt-3 max-w-2xl mx-auto">
                SIESE spolehlivě pokrývá masovou klientskou administrativu i desítky let trvající správu technologické infrastruktury.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: Prodej */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-gradient-to-br from-blue-50/70 to-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-300 shadow-sm transition-all h-full flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center shadow-md">
                    <Zap size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">B2C & B2B Obchod</span>
                    <h3 className="text-2xl font-bold text-gray-900">Prodej</h3>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed font-normal mb-6">
                  Zákaznické smlouvy, ceníky, fixace, změny dodavatele, reklamace a šetření ERÚ.
                </p>
                <div className="mt-auto pt-5 border-t border-blue-100/80 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Masové zpracování statisíců smluv a dodatků ročně</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Okamžitá rekonstrukce platného ceníku k libovolnému datu</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Průkaznost pro Energetický regulační úřad (ERÚ)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Column 2: Infrastruktura */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 shadow-sm transition-all h-full flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0d2346] text-white flex items-center justify-center shadow-md">
                    <HardHat size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Technologie & Majetek</span>
                    <h3 className="text-2xl font-bold text-gray-900">Infrastruktura</h3>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed font-normal mb-6">
                  Projektová a as-built dokumentace, věcná břemena, stavební povolení, předávací protokoly, revize, údržba, EIA a environmentální zprávy, povolení a licence, dokumentace BOZP.
                </p>
                <div className="mt-auto pt-5 border-t border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Uchování výkresové a revizní dokumentace po celou životnost díla</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Nezávislost na odchodu klíčových zaměstnanců a dodavatelů</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle size={15} className="text-[#1a5bb5]" />
                    <span>Ochrana před ztrátou záruk při uplatnění vad a haváriích</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: BOLESTI — 5 karet] */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-t border-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Běžná úskalí v praxi
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Kde možná i vaše společnost ztrácí důkazy a peníze
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Spory o ceníky a kontroly ERÚ
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Při změnách cen vznikají statisíce úprav ročně. Při reklamaci vyúčtování rozhoduje, zda u odběrného místa doložíte, jakou verzi smlouvy a ceníku zákazník přijal.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Dokumentace mizí s lidmi a systémy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Dokumentace elektráren, sítí a trafostanic musí přežít generace systémů i zaměstnanců. Pokud zaměstnanec odejde nebo je starý systém vyřazen, je složité a občas i nemožné získat kompletní dokumentaci.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Povolení a environmentální závazky
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  EIA, integrované povolení, emisní limity a vodoprávní rozhodnutí mají platnost v řádu desítek let. Ztráta originálního rozhodnutí či auditní stopy k jeho plnění ohrožuje provoz zdroje.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 4 */}
            <ScrollReveal delay={250} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Akvizice zanechávají staré archivy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Při nákupech fotovoltaik, větrných parků či tepláren přebíráte desítky nesourodých systémů, disků a šanonů. Udržovat staré systémy kvůli historii je drahé a bezpečnostně riskantní.
                </p>
              </div>
            </ScrollReveal>

            {/* Card 5 */}
            <ScrollReveal delay={300} className="h-full md:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-4">
                  05
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#1a5bb5] transition-colors leading-snug">
                  Uplatnění záruk a spory s dodavateli
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Při havárii nebo skryté vadě po letech potřebujete okamžitě doložit předávací protokol, atest materiálu a záruční podmínky. Bez dohledatelné dokumentace ztrácíte nárok na plnění a nesete plné náklady.
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
            {/* Block 1: Důkaz pro obchod i infrastrukturu */}
            <ScrollReveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Právní jistota & Dlouhodobá integrita
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Důkaz pro obchod i infrastrukturu
                </h3>
                <div className="space-y-3.5 text-sm text-blue-100 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>REST API integrace:</strong> Napojení na stávající systémy (CRM, billing, ERP / SAP, GIS, DMS) na pozadí i s vlastním rozhraním.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Digitální důvěra:</strong> Kvalifikovaná časová razítka a elektronická pečeť pro každou smlouvu, ceník, revizní zprávu a stavební protokol.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>Automatické přerazítkování:</strong> Průběžná obnova časových razítek a konverze do PDF/A pro uchování platnosti po celá desetiletí.</span>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                    <Sparkles size={18} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <span><strong>eIDAS 2 ready:</strong> Postaveno na kvalifikovaných službách vytvářejících důvěru dle eIDAS a navrženo podle požadavků na kvalifikovanou elektronickou archivaci (čl. 45j, prováděcí nařízení 2025/2532).</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2: Jeden záznam k místu & Hlídání lhůt (Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Block 2: Jeden záznam k místu */}
              <ScrollReveal delay={150} className="h-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Kontext & Souvislosti
                    </div>
                    <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      Připravujeme
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Jeden záznam k místu
                  </h3>
                  <p className="text-sm text-blue-100 font-light leading-relaxed mb-4">
                    Propojení všech smluv, revizí, technických listů a zásahů k jednomu odběrnému místu nebo technologickému celku.
                  </p>
                  <div className="mt-auto space-y-2 text-xs text-blue-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-300" />
                      <span>Sjednocení historie trafa, vedení i odběratele</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-300" />
                      <span>Okamžitý auditní náhled pro techniky i právníky</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Block 3: Hlídání lhůt */}
              <ScrollReveal delay={200} className="h-full">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col justify-start">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                      Prevence rizik
                    </div>
                    <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      Připravujeme
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Hlídání lhůt
                  </h3>
                  <p className="text-sm text-blue-100 font-light leading-relaxed mb-4">
                    Automatické sledování expirace smluv, termínů periodických revizí, platnosti povolení a licencí s včasným varováním.
                  </p>
                  <div className="mt-auto space-y-2 text-xs text-blue-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-300" />
                      <span>Upozornění před vypršením zákonných lhůt revizí</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-300" />
                      <span>Včasné obnovení certifikací a environmentálních zpráv</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Block 4: Úložiště, konsolidace a NIS2 */}
            <ScrollReveal delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Infrastruktura & Soulad s NIS2
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Úložiště, konsolidace a NIS2
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-blue-100 font-light leading-relaxed">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Layers size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-1">SIESE MOF (Migration On the Fly):</strong>
                      <span>Bezpečná migrace a konsolidace starých archivů z akvizic za plného chodu systému bez odstávek.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Database size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-1">SIESE DDS (Distributed Document Storage):</strong>
                      <span>Velkokapacitní distribuované objektové úložiště pro objemné technické výkresy, schémata a skeny.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <ShieldCheck size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-1">Soulad s NIS2:</strong>
                      <span>Šifrování, garance integrity dat, detailní auditní stopa přístupů a operací pro subjekty kritické infrastruktury.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Server size={20} className="text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-1">On-premise nasazení:</strong>
                      <span>Data zůstávají na vaší vlastní infrastruktuře pod plnou kontrolou vašeho IT a bezpečnostního týmu.</span>
                    </div>
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
                  SIESE se může napojit prostřednictvím REST API na stávající systémy (SAP, CRM, GIS, spisová služba) a běžet na vlastní infrastruktuře organizace. Architektura podporuje rozsáhlé objemy dokumentů a jejich přesun mezi úložišti.
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

      {/* [SEKCE: VÝSLEDKY — 3 karty] */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1: Obhajitelnost */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Obhajitelnost
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Okamžitě doložitelná verze smlouvy a ceníku při reklamacích odběratelů i kontrolách ERÚ.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: Efektivní kontrola záruk */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Efektivní kontrola záruk
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  As-built dokumentace a revizní zprávy dohledatelné za sekundy i po odchodu původních dodavatelů a zaměstnanců.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Nižší náklady a větší bezpečnost */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Nižší náklady a větší bezpečnost
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Odstavení starých neudržovaných systémů po akvizicích bez ztráty kontinuity a právní váhy dokumentů.
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
              Ukážeme vám, jak by vypadal důkaz pro vaši poslední reklamaci nebo havárii
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak zajistit soulad s ERÚ a NIS2, dlouhodobou ochranu as-built dokumentace a bezpečné on-premise nasazení.
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
