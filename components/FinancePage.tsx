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
  FolderGit2,
  Server
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
  const [activeHelpTab, setActiveHelpTab] = useState('overitelnost');

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
              Bankovnictví a finance
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
                <span>Domluvit konzultaci</span>
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

      {/* SECTION 3: Jak SIESE pomáhá (tabbed widget working like homepage Adaptability) */}
      <section id="jak-siese-pomaha" className="py-16 md:py-24 bg-dot-grid border-y border-blue-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Architektura & schopnosti
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Jak SIESE pomáhá
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
                Prohlédněte si klíčové schopnosti systému pro bezpečné, dlouhodobě ověřitelné a regulované uchovávání finančních záznamů v souladu s ČNB i evropskou legislativou.
              </p>
            </div>
          </ScrollReveal>

          {/* Helper functions and tab rendering */}
          {(() => {
            const helpModules = [
              {
                id: 'overitelnost',
                tabLabel: 'Dlouhodobá ověřitelnost',
                category: 'Archivace & formáty',
                title: 'Dlouhodobá ověřitelnost dokumentů',
                description: 'Kvalifikovaná časová razítka, elektronické pečeti a jejich obnovování před expirací zajišťují dlouhodobou ověřitelnost uložených dokumentů. Archivní formáty (PDF/A, archivní balíčky) pomáhají zachovat jejich dostupnost i po zániku původního systému.',
                features: [
                  { label: 'Kvalifikovaná časová razítka:', text: 'Zaručený důkaz o existenci a neměnnosti v čase podle standardů eIDAS.' },
                  { label: 'Průběžné přerazítkování (LTV):', text: 'Automatická obnova platnosti certifikátů dříve, než původní podpis expiruje.' },
                  { label: 'Archivní standardy PDF/A:', text: 'Standardizované formáty garantující čitelnost po 10, 20 i 30 letech bez závislosti na původním software.' },
                  { label: 'Ověřitelný původ:', text: 'Uchování celého certifikačního řetězce (CRL / OCSP) přímo u záznamu.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                          <FileCheck2 size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 truncate max-w-[170px]">Uverova_smlouva_2024.pdf</div>
                          <div className="text-[11px] text-gray-400">PDF/A-2b • 2.4 MB</div>
                        </div>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle size={12} />
                        Ověřeno (LTV)
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <ShieldCheck size={14} className="text-[#1a5bb5]" />
                          <span>Kvalifikovaná pečeť</span>
                        </div>
                        <span className="font-semibold text-gray-900">Platná (QTSP)</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock size={14} className="text-[#1a5bb5]" />
                          <span>Časové razítko</span>
                        </div>
                        <span className="font-mono text-gray-900">23. 10. 2024 UTC</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Lock size={14} className="text-[#1a5bb5]" />
                          <span>Integrita obsahu</span>
                        </div>
                        <span className="text-emerald-600 font-semibold">100% nezměněno</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Automatické přerazítkování:</span>
                      <span className="font-medium text-[#1a5bb5]">Aktivní (před expirací)</span>
                    </div>
                  </div>
                )
              },
              {
                id: 'eidas',
                tabLabel: 'Připraveno na eIDAS 2',
                category: 'Soulad s legislativou',
                title: 'Připraveno na eIDAS 2',
                description: 'SIESE využívá kvalifikované služby vytvářející důvěru podle eIDAS (razítka, pečeti, validace) a je navrženo s ohledem na požadavky kvalifikované elektronické archivace podle eIDAS 2 (čl. 45j, prováděcí nařízení 2025/2532). Právní domněnka integrity a původu se uplatní při splnění příslušných podmínek. Samotný SharePoint ani běžný DMS ji automaticky nezajišťují.',
                features: [
                  { label: 'Článek 45j eIDAS 2:', text: 'Architektura navržená v souladu s evropskými standardy kvalifikované elektronické archivace.' },
                  { label: 'Právní domněnka integrity:', text: 'Zákonná presumpce platnosti a neměnnosti dokumentu u soudu i při kontrolách ČNB.' },
                  { label: 'Důvěryhodné služby (QTSP):', text: 'Přímé napojení na kvalifikované poskytovatele služeb vytvářejících důvěru.' },
                  { label: 'Doplněk ke stávajícímu DMS:', text: 'Zajišťuje důkazní vrstvu, kterou SharePoint ani běžná úložiště sami neposkytují.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-6 font-sans">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center">
                        <Scale size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Evropský standard</div>
                        <div className="text-lg font-bold text-gray-900">eIDAS 2 (čl. 45j)</div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-100 mb-4 text-xs text-gray-700 leading-relaxed">
                      <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle size={13} className="text-[#1a5bb5]" />
                        Právní domněnka integrity a původu
                      </div>
                      Podle prováděcího nařízení 2025/2532 má kvalifikovaně archivovaný elektronický dokument u soudu i regulátora plnou důkazní váhu.
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="text-gray-400 font-medium">Běžný DMS / SharePoint</div>
                        <div className="font-semibold text-gray-700 mt-0.5">Bez právní domněnky</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                        <div className="text-emerald-700 font-medium">SIESE vrstva</div>
                        <div className="font-semibold text-emerald-900 mt-0.5">Kvalifikovaný důkaz</div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'retence',
                tabLabel: 'Řízení životního cyklu',
                category: 'Retence & skartace',
                title: 'Řízení přístupů a životního cyklu dokumentů',
                description: 'Nastavte pravidla uchovávání dokumentů, evidujte provedené operace a dokumentujte skartaci. V případě sporu nebo kontroly můžete skartaci pozastavit.',
                features: [
                  { label: 'Jednotná retenční pravidla:', text: 'Lhůty podle typu smlouvy, regulatorních požadavků a vyhlášek bez ruční evidence.' },
                  { label: 'Pozastavení skartace (Legal Hold):', text: 'Okamžité zmrazení skartačního plánu pro dotčené smlouvy v případě sporu nebo šetření.' },
                  { label: 'Skartace s protokolem:', text: 'Neodvolatelný digitální certifikát o provedeném zničení s časovým razítkem.' },
                  { label: 'Řízení oprávnění a přístupů:', text: 'Detailní evidence, kdo, kdy a za jakým účelem k dokumentu přistoupil.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <History size={16} className="text-[#1a5bb5]" />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Životní cyklus smlouvy</span>
                      </div>
                      <span className="text-[10px] bg-blue-50 text-[#1a5bb5] font-semibold px-2 py-0.5 rounded-full">
                        Retence: 10 let
                      </span>
                    </div>
                    <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Uložení & digitální pečeť</div>
                          <div className="text-[11px] text-gray-500">Kvalifikované časové razítko aplikováno</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#1a5bb5] ring-4 ring-blue-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Aktivní retenční běh</div>
                          <div className="text-[11px] text-gray-500">Pravidelná obnova razítek (LTV)</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                            <span>Legal Hold aktivní</span>
                            <span className="text-[9px] bg-amber-100 px-1.5 py-0.5 rounded font-semibold text-amber-800">Zmrazeno</span>
                          </div>
                          <div className="text-[11px] text-gray-500">Skartace pozastavena pro šetření ČNB</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-300 ring-4 ring-gray-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-gray-500">Řízená skartace</div>
                          <div className="text-[11px] text-gray-400">Trvalý protokol o odstranění záznamu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'souvislosti',
                tabLabel: 'Smlouvy v souvislostech',
                category: 'Propojení dokumentace',
                isUpcoming: true,
                title: 'Smlouvy vždy v souvislostech',
                description: 'Propojení smluv, dodatků, sazebníků a pojistných podmínek pomůže určit, která verze byla platná v konkrétním okamžiku.',
                features: [
                  { label: 'Provázání dodatků se smlouvou:', text: 'Kompletní řetězec změn smlouvy v čase bez rizika přehlédnutí novějšího ujednání.' },
                  { label: 'Vazba na sazebníky a VOP:', text: 'Automatické spárování s verzí obchodních podmínek platnou v okamžiku podpisu.' },
                  { label: 'Rekonstrukce stavu k datu:', text: 'Okamžitý náhled na platné znění smluvního vztahu k libovolnému dni v minulosti.' },
                  { label: 'Rychlé řešení reklamací:', text: 'Podklady pro právní a reklamační oddělení připravené během několika sekund.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <FolderGit2 size={16} className="text-[#1a5bb5]" />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Smluvní souvislosti</span>
                      </div>
                      <span className="text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                        Připravujeme
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 mb-3">
                      <div className="text-[11px] text-gray-500 font-medium mb-1">Kořenový dokument:</div>
                      <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                        <FileText size={13} className="text-[#1a5bb5]" />
                        Rámcová smlouva o úvěru #8412 (2021)
                      </div>
                    </div>
                    <div className="pl-4 border-l-2 border-blue-200 space-y-2 mb-3 text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-blue-50 shadow-xs">
                        <span className="text-gray-800 font-medium truncate">Dodatek č. 1 – Úroková sazba (2022)</span>
                        <span className="text-[10px] text-gray-400 shrink-0">Aktivní</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-blue-50 shadow-xs">
                        <span className="text-gray-800 font-medium truncate">Sazebník poplatků v. 2021-Q1</span>
                        <span className="text-[10px] text-emerald-600 font-medium shrink-0">Spárováno</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-white border border-blue-50 shadow-xs">
                        <span className="text-gray-800 font-medium truncate">VOP platné v den podpisu</span>
                        <span className="text-[10px] text-emerald-600 font-medium shrink-0">Spárováno</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-emerald-700 bg-emerald-50/80 p-2 rounded border border-emerald-100 flex items-center gap-1.5">
                      <CheckCircle size={12} className="shrink-0" />
                      <span>Rekonstrukce znění platného k 15. 6. 2022 hotova</span>
                    </div>
                  </div>
                )
              },
              {
                id: 'kontroly',
                tabLabel: 'Podpora interních kontrol',
                category: 'DORA, MiFID II a IDD',
                isUpcoming: true,
                title: 'Podpora interních kontrol',
                description: 'Připravované funkce pomohou evidovat schvalování, spravovat přístupová oprávnění a doložit plnění interních pravidel. Součástí bude také možnost zachytit návaznost jednotlivých kroků a souvisejících důkazů pro potřeby požadavků DORA, MiFID II a IDD.',
                features: [
                  { label: 'Soulad s DORA:', text: 'Prokazatelná digitální provozní odolnost a neměnnost kritických finančních záznamů.' },
                  { label: 'Evidence pro MiFID II & IDD:', text: 'Uchování investičních dotazníků, předsmluvních informací a záznamů z jednání.' },
                  { label: 'Schvalovací procesy:', text: 'Auditovatelné zachycení rozhodnutí úvěrových komisí a schvalovacích kroků.' },
                  { label: 'Exporty pro ČNB:', text: 'Generování uceleného důkazního balíčku pro plánované i neohlášené regulatorní kontroly.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <FileSearch size={16} className="text-[#1a5bb5]" />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Audit & Regulace</span>
                      </div>
                      <span className="text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                        Připravujeme
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">DORA</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Audit ready</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">MiFID II</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Evidováno</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">ČNB</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Report 1-click</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 mb-2">Auditní log operací (neměnný):</div>
                    <div className="space-y-1.5 font-mono text-[11px] text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">14:02:11</span>
                        <span className="text-gray-800">Schválení výboru podepsáno</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">11:15:40</span>
                        <span className="text-gray-800">Export balíčku pro audit ČNB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">09:30:22</span>
                        <span className="text-emerald-700 font-medium">Ověření integrity: 100% OK</span>
                      </div>
                    </div>
                  </div>
                )
              }
            ];

            const activeModule = helpModules.find(m => m.id === activeHelpTab) || helpModules[0];

            const renderModuleCard = (moduleItem: typeof helpModules[0]) => (
              <div className="bg-white rounded-2xl overflow-hidden border border-blue-100 flex flex-col lg:flex-row shadow-sm min-h-[420px]">
                {/* Left text column */}
                <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">
                      {moduleItem.category}
                    </span>
                    {moduleItem.isUpcoming && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                        Připravujeme
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {moduleItem.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed font-light">
                    {moduleItem.description}
                  </p>
                  <ul className="space-y-3.5">
                    {moduleItem.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-sm text-gray-700 leading-relaxed flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#1a5bb5] shrink-0 mt-1" />
                        <div>
                          <span className="font-semibold text-gray-900">{feature.label}</span>{' '}
                          <span className="text-gray-600">{feature.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right visual column */}
                <div className="lg:w-1/2 bg-gradient-to-br from-blue-50/60 via-indigo-50/30 to-white p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
                  <div className="relative z-10 w-full flex justify-center">
                    {moduleItem.visual}
                  </div>
                </div>
              </div>
            );

            return (
              <>
                {/* Desktop View: Tabbed Interface (Visible from md up) */}
                <div className="hidden md:block">
                  <ScrollReveal delay={200}>
                    <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
                      {helpModules.map((tab) => {
                        const isActive = activeHelpTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveHelpTab(tab.id)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border whitespace-nowrap flex items-center gap-2 ${
                              isActive
                                ? 'bg-[#1a5bb5] text-white border-[#1a5bb5] shadow-md'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <span>{tab.tabLabel}</span>
                            {tab.isUpcoming && (
                              <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                                isActive ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'
                              }`}>
                                Připravujeme
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </ScrollReveal>

                  <div key={activeHelpTab}>
                    <ScrollReveal delay={300}>
                      {renderModuleCard(activeModule)}
                    </ScrollReveal>
                  </div>
                </div>

                {/* Mobile View: Vertical Stacked Interface (Visible below md) */}
                <div className="md:hidden space-y-16">
                  {helpModules.map((moduleItem, idx) => (
                    <div key={moduleItem.id}>
                      <ScrollReveal delay={idx * 80}>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-[2px] bg-blue-100 flex-grow"></div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-[#1a5bb5] font-bold uppercase tracking-widest text-xs whitespace-nowrap">
                              {moduleItem.tabLabel}
                            </h3>
                            {moduleItem.isUpcoming && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-amber-100 text-amber-800">
                                Připravujeme
                              </span>
                            )}
                          </div>
                          <div className="h-[2px] bg-blue-100 flex-grow"></div>
                        </div>
                        {renderModuleCard(moduleItem)}
                      </ScrollReveal>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
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

      {/* [SEKCE: INTEGRACE - Bezproblémová integrace do vašich systémů a procesů] */}
      <section className="py-12 md:py-16 bg-dot-grid border-y border-blue-100/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-blue-100 p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-[#edf4fe] text-[#1a5bb5] flex items-center justify-center flex-shrink-0">
                <Server size={32} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-snug">
                  Bezproblémová integrace do vašich systémů a procesů
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  SIESE se může napojit prostřednictvím REST API na stávající systémy a běžet na vlastní infrastruktuře organizace. Architektura podporuje rozsáhlé objemy dokumentů a jejich přesun mezi úložišti.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#1a5bb5] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm md:text-base transition-colors shadow-sm whitespace-nowrap"
                >
                  Konzultovat architekturu
                </button>
              </div>
            </div>
          </ScrollReveal>
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

      {/* Modal */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};
