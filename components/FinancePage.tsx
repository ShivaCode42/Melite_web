import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Landmark, 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  Clock, 
  FileText, 
  ArrowRight, 
  Plus, 
  Minus,
  ArrowLeft,
  AlertTriangle,
  Lock,
  Layers,
  Sparkles,
  CheckCircle,
  FileSearch,
  History,
  FolderGit2
} from 'lucide-react';

interface FinancePageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const FinancePage: React.FC<FinancePageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Jaký je rozdíl mezi SIESE a běžným DMS?',
      answer: 'DMS slouží především ke správě dokumentů. SIESE u uloženého záznamu dokládá, že v daný okamžik existoval, že se nezměnil, odkud pochází a co se s ním dělo až po skartaci.'
    },
    {
      question: 'Co když vyprší platnost podpisu nebo certifikátu?',
      answer: 'U záznamu uloženého v SIESE přerazítkování drží ověřitelnost i po vypršení původního podpisu nebo certifikátu.'
    },
    {
      question: 'Musí data opustit naši infrastrukturu?',
      answer: 'Ne. SIESE lze provozovat na vlastní infrastruktuře organizace.'
    },
    {
      question: 'Zaručí SIESE soulad s regulací?',
      answer: 'Ne. SIESE podporuje uchovávání a prokazatelnost uložených záznamů. Celkový soulad závisí na procesech, nastavení a povinnostech konkrétní instituce.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Finance — Banky, pojišťovny a fintech"
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
            <span className="text-gray-900 font-semibold">Finance</span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a5bb5] hover:text-blue-700 bg-white px-3 py-1.5 rounded-md border border-blue-200 shadow-xs"
          >
            <span>Domluvit 30min konzultaci</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            {/* Tag / Štítek */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-blue-100 mb-8 border border-white/20">
              <Landmark size={14} className="text-blue-200" />
              <span>Finance &middot; Banky &middot; Pojišťovny &middot; Investiční společnosti &middot; Fintech</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Title / H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight mb-8 leading-[1.2]">
              Finanční dokumenty, u kterých doložíte existenci, původ i integritu po letech
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Úvěrové smlouvy, pojistné dokumenty a AML podklady mohou být důležité ještě dlouho poté, co původní systém doslouží. SIESE uchovává digitální záznamy tak, aby šlo doložit, že v daný okamžik existovaly, že se nezměnily a odkud pocházejí, včetně celé jejich historie. Zůstávají prokazatelné při šetření ČNB, auditu, sporu i po výměně interních systémů.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={350}>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-8 py-4 rounded-md text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Domluvit 30min konzultaci</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 1: Nové regulace vyžadují spolehlivější správu dokumentů */}
      <section className="py-16 md:py-24 bg-[#f8fbff] border-b border-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Regulatorní nároky
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Nové regulace vyžadují spolehlivější správu dokumentů
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DORA */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <ShieldCheck size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  DORA
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Doložte integritu uložených záznamů k ICT rizikům. Řetězec schválení, kdo co potvrdil a nad kterou verzí, připravujeme v SIESE Comply.
                </p>
              </div>
            </ScrollReveal>

            {/* AML */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <FileSearch size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AML a související povinnosti
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Mějte prokazatelné podklady a nastavená pravidla jejich uchovávání podle příslušných požadavků.
                </p>
              </div>
            </ScrollReveal>

            {/* Dlouhodobá důvěryhodnost */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-6 font-bold text-lg">
                  <Clock size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dlouhodobá důvěryhodnost dokumentů
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Zachovejte ověřitelnost záznamů i v době, kdy už původní podpisové certifikáty nebo informační systémy nejsou aktuální.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Jsou vám tyto problémy povědomé? */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Běžná úskalí v odvětví
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                Jsou vám tyto problémy povědomé?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  01
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a5bb5] transition-colors">
                  Dlouhodobé smluvní vztahy
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Po letech může být obtížné doložit, jaká verze smlouvy nebo podmínek platila v okamžiku konkrétní události.
                </p>
              </div>
            </ScrollReveal>

            {/* 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  02
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a5bb5] transition-colors">
                  Dokumenty bez dostatečných důkazů
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Samotné uložení souboru nedokládá, že v daný okamžik existoval, odkud pochází a zda se v průběhu času změnil.
                </p>
              </div>
            </ScrollReveal>

            {/* 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  03
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a5bb5] transition-colors">
                  Náročná příprava na šetření ČNB a audit
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Dokumenty, schválení, přístupy a retenční záznamy bývají rozdělené mezi několik systémů.
                </p>
              </div>
            </ScrollReveal>

            {/* 4 */}
            <ScrollReveal delay={250} className="h-full">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  04
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a5bb5] transition-colors">
                  Konflikt mezi uchováním a výmazem
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Sektorové předpisy mohou vyžadovat dlouhodobé uchování, zatímco pravidla ochrany osobních údajů omezují dobu jejich zpracování.
                </p>
              </div>
            </ScrollReveal>

            {/* 5 */}
            <ScrollReveal delay={300} className="h-full md:col-span-2 lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-xs hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col justify-start group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs mb-5">
                  05
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1a5bb5] transition-colors">
                  Rizika při due diligence
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Neúplná dokumentace a obtížně dohledatelné dodatky komplikují prověrky i převody portfolií.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: Jak SIESE pomáhá */}
      <section className="py-16 md:py-24 bg-[#0d2346] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-2">
                Architektura & schopnosti
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                Jak SIESE pomáhá
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {/* 1: Dlouhodobá ověřitelnost dokumentů */}
            <ScrollReveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Archivace & formáty
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Dlouhodobá ověřitelnost dokumentů
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Kvalifikovaná časová razítka, elektronické pečeti a jejich obnovování před expirací zajišťují dlouhodobou ověřitelnost uložených dokumentů. Archivní formáty (PDF/A, archivní balíčky) pomáhají zachovat jejich dostupnost i po zániku původního systému.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: Připraveno na eIDAS 2 */}
            <ScrollReveal delay={150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Soulad s legislativou
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Připraveno na eIDAS 2
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  SIESE využívá kvalifikované služby vytvářející důvěru podle eIDAS (razítka, pečeti, validace) a je navrženo s ohledem na požadavky kvalifikované elektronické archivace podle eIDAS 2 (čl. 45j, prováděcí nařízení 2025/2532). Právní domněnka integrity a původu se uplatní při splnění příslušných podmínek. Samotný SharePoint ani běžný DMS ji automaticky nezajišťují.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Řízení přístupů a životního cyklu dokumentů */}
            <ScrollReveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">
                  Retence & skartace
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Řízení přístupů a životního cyklu dokumentů
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Nastavte pravidla uchovávání dokumentů, evidujte provedené operace a dokumentujte skartaci. V případě sporu nebo kontroly můžete skartaci pozastavit.
                </p>
              </div>
            </ScrollReveal>

            {/* 4: Smlouvy vždy v souvislostech (připravujeme) */}
            <ScrollReveal delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Propojení dokumentace
                  </div>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    Připravujeme
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Smlouvy vždy v souvislostech
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Propojení smluv, dodatků, sazebníků a pojistných podmínek pomůže určit, která verze byla platná v konkrétním okamžiku.
                </p>
              </div>
            </ScrollReveal>

            {/* 5: Podpora interních kontrol (připravujeme) */}
            <ScrollReveal delay={300}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    DORA, MiFID II a IDD
                  </div>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                    Připravujeme
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Podpora interních kontrol
                </h3>
                <p className="text-sm text-blue-100 font-light leading-relaxed">
                  Připravované funkce pomohou evidovat schvalování, spravovat přístupová oprávnění a doložit plnění interních pravidel. Součástí bude také možnost zachytit návaznost jednotlivých kroků a souvisejících důkazů pro potřeby požadavků DORA, MiFID II a IDD.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 4: Co získáte */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Klíčové přínosy
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co získáte
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Lepší připravenost na ČNB a audit
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Podklady k uloženým dokumentům, jejich historii, přístupům a skartaci na jednom místě.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Dlouhodobou prokazatelnost
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Důkaz, že záznam v daný okamžik existoval, že se nezměnil a odkud pochází, i po vypršení certifikátu.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Řízenou retenci
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Jednotně nastavená pravidla a doložitelná skartace.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Menší závislost na původních systémech
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    Archivace ve standardních formátech a bez vazby na licence původního systému.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 5: Časté otázky */}
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

      {/* SECTION 6: Final CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#1a5bb5] via-[#1e6cd9] to-[#0052cc] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Zjistěte, jak může SIESE zjednodušit práci s vašimi finančními záznamy
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak zajistit dlouhodobou důvěryhodnost smluv, soulad s ČNB, eIDAS 2 i DORA bez výměny stávajícího softwaru.
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
