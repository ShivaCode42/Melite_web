import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  ShieldCheck, 
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
  Sparkles,
  Search,
  History,
  FileCheck,
  Building2,
  Workflow,
  Shield,
  AlertTriangle,
  FolderArchive,
  CalendarCheck,
  FileSearch,
  CheckSquare,
  ShieldAlert,
  Sliders,
  Award,
  Server,
  UserCheck,
  Trash2,
  PauseCircle,
  Eye,
  FileSpreadsheet
} from 'lucide-react';

interface ComplianceDepartmentPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const ComplianceDepartmentPage: React.FC<ComplianceDepartmentPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Hlídá SIESE změny zákonů a regulatorních požadavků?',
      answer: 'SIESE je technický archivační a důkazní systém, který precizně vykonává a prokazuje vámi zadaná pravidla. Právní a regulatorní analýzu a definici lhůt provádí vaše compliance nebo právní oddělení, systém následně zajistí jejich bezchybné a automatické vymáhání bez závislosti na lidském faktoru.'
    },
    {
      question: 'Zajistí SIESE soulad s GDPR a právem na výmaz?',
      answer: 'Ano. SIESE umožňuje nastavit přesná retenční pravidla pro osobní údaje a po uplynutí zákonného důvodu k uchování provést certifikovanou skartaci. Zároveň generuje nezměnitelný protokol o likvidaci jako jednoznačný důkaz pro Úřad pro ochranu osobních údajů.'
    },
    {
      question: 'Dostaneme report o stavu archivovaných záznamů pro audit?',
      answer: 'Ano. Systém poskytuje ucelené reporty o stavu uložených dokumentů, uplatněných retenčních lhůtách, provedených skartacích i aktivních výjimkách (Legal Hold), které lze přímo a bez ručního sběru předložit interním i externím auditorům.'
    },
    {
      question: 'Dokáže SIESE doložit, kdo měl k dokumentu přístup?',
      answer: 'Ano. SIESE vede podrobný a nezfalšovatelný auditní záznam o každém přístupu, zobrazení, stažení či exportu dokumentu, včetně časového razítka a identifikace uživatele či systému. Při vyšetřování incidentu tak doložíte skutečný stav, nikoliv jen teoretická oprávnění.'
    },
    {
      question: 'Dokáže SIESE prokázat neměnnost dokumentu i po 10 či 20 letech?',
      answer: 'Ano. Využívá kvalifikovaná časová razítka, elektronické pečetě a technologii LTV (Long Term Validation) s automatickým přerazítkováním před vypršením platnosti kryptografických algoritmů a certifikátů, čímž zajišťuje plnou právní prokazatelnost dle nařízení eIDAS.'
    },
    {
      question: 'Platí to pro všechny typy dokumentů a systémů v organizaci?',
      answer: 'Ano. SIESE je systémově i formátově agnostické. Pomocí REST API se napojí na jakýkoliv firemní systém (ERP, CRM, DMS, HRIS, spisovou službu) a bezpečně uchovává PDF, XML, skeny i nestrukturovaná data s garantovanou integritou.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Compliance oddělení"
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
            <span className="text-gray-400">Podle oddělení</span>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Compliance</span>
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
            {/* Štítek: Compliance · Risk management · DPO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-blue-100 text-xs sm:text-sm font-medium tracking-wide mb-6">
              <ShieldCheck size={15} className="text-blue-200" />
              <span>Compliance &middot; Risk management &middot; DPO</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Retenční pravidla, dohledatelnost a důkazy pod kontrolou
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Při auditu nebo regulatorní kontrole nestačí vědět, kde je dokument uložený. Potřebujete doložit, jak byl uchováván, jaká pravidla se na něj vztahovala a jak s ním bylo nakládáno. SIESE řídí životní cyklus uložených záznamů, uplatňuje retenční pravidla a drží podklady pro kontrolu, šetření nebo zpětné prověření události.
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

      {/* [SEKCE: SITUACE, VE KTERÝCH POTŘEBUJETE MÍT ZÁZNAMY POD KONTROLOU — 3 karty] */}
      <section className="bg-[#f0f7ff] border-y border-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Klíčové regulatorní scénáře
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Situace, ve kterých potřebujete mít záznamy pod kontrolou
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: Audit a regulatorní kontrola */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <FileSearch size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Audit a regulatorní kontrola
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Doložíte, jak organizace s dokumentem nakládala, jaká pravidla se na něj vztahovala a jaký záznam o jeho životním cyklu máte.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: GDPR a retenční lhůty */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <CalendarCheck size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    GDPR a retenční lhůty
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Dokumenty nemají zůstávat bez důvodu ani mizet bez podkladu. Pod kontrolou jsou pravidla uchovávání, jejich uplatnění a provedená skartace.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Bezpečnostní incident */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Bezpečnostní incident
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Aktuální oprávnění neříkají, co se dělo dřív. Při šetření potřebujete, kdo k uloženému záznamu přistoupil nebo ho sdílel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO SE UKÁŽE, KDYŽ POTŘEBUJETE DOLOŽIT, ŽE PRAVIDLA FUNGOVALA — 5 KARET] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Běžná praxe a rizika
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Co se ukáže, když potřebujete doložit, že pravidla fungovala
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Bez centrální a technicky garantované evidence se z každého auditu stává časově náročná a riziková rekonstrukce.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Karta 1 */}
            <ScrollReveal delay={50} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Chybějící záznam komplikuje kontrolu
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Dokument chybí, časové razítko už nelze ověřit nebo není záznam o skartaci. Místo doložení postupu začíná rekonstrukce. Výsledek kontroly pak závisí i na tom, jaké podklady organizace předloží.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 2 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                    <History size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Životní cyklus dokumentu se rekonstruuje zpětně
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Kontrola chce vědět, kdy byl záznam uložen, jak s ním bylo nakládáno a jak uchovávání skončilo. Podklady jsou v několika systémech, e-mailech a interní evidenci. Sestavení zabere čas a nemusí dát úplný obraz.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 3 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-4">
                    <Trash2 size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Skartaci je potřeba nejen provést, ale také doložit
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Některé dokumenty zůstávají déle, než je potřeba, protože nikdo nechce převzít odpovědnost za jejich odstranění. Jiné se smažou a chybí záznam, co bylo odstraněno a kdy.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 4 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <Sliders size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Změna pravidla se musí promítnout do praxe
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Nová retenční lhůta se jinak promítá v každém systému zvlášť. Bez jednotného nastavení se změna někde neprojeví, nebo nepůjde doložit, že se pravidlo uplatnilo.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 5 */}
            <ScrollReveal delay={250} className="h-full md:col-span-2 lg:col-span-2">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Historie přístupů chybí až ve chvíli, kdy ji potřebujete
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Po incidentu nestačí vědět, kdo má k dokumentu přístup dnes. Potřebujete, kdo k němu přistoupil nebo ho sdílel v daném období. Když evidence chybí, zpětné šetření končí u oprávnění, ne u činu.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: JAK SIESE POMÁHÁ — Control & Prove] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafd] border-y border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Řešení a technologie
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Jak SIESE pomáhá
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                SIESE spojuje retenční pravidla s dlouhodobým uchováváním a prokazatelnou evidencí.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: Control */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                      <Sliders size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Pilíř 1</span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Control — řízení pravidel a životního cyklu
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Centrální nastavení pravidel
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Pravidla uchovávání a skartace se definují centrálně podle typů dokumentů a regulatorních požadavků, nikoliv rozptýleně v jednotlivých aplikacích.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Skartace s protokolem
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Skartace probíhá podle schváleného procesu s automatickým vygenerováním nezpochybnitelného protokolu o bezpečném a včasném odstranění.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Pozastavení skartace (Legal Hold)
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Možnost okamžitého zmrazení skartačních lhůt pro dotčené záznamy v případě probíhajícího šetření, kontroly či sporu.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Pravidla zůstávají odpovědností organizace
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          SIESE poskytuje technický mechanismus pro exekuci a evidenci pravidel, která definuje compliance tým organizace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500 font-light">
                  <PauseCircle size={14} className="text-[#1a5bb5]" />
                  <span>Okamžitá aktivace Legal Hold pro jakoukoliv množinu dokumentů</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2: Prove */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                      <ShieldCheck size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Pilíř 2</span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Prove — dlouhodobá integrita a důkazy
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Životní cyklus dokumentu
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Kompletní chronologická stopa od okamžiku vstupu do archivu přes aplikaci retenčních pravidel až po řízené zničení.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Kvalifikovaná razítka, pečeti a ověřitelnost
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Každý dokument je opatřen kvalifikovaným časovým razítkem a pečetí s automatickým přerazítkováním po celou dobu uchování.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Záznamy o přístupech a sdílení
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Neměnná evidence (audit log) o tom, kdo, kdy a za jakým účelem k dokumentu přistoupil nebo jej exportoval.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Podklad pro kontrolu
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Okamžitý export uceleného balíčku důkazů a historie pro dozorové orgány, auditory i interní prověrky.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-blue-700 font-medium">
                  <Award size={15} className="text-[#1a5bb5]" />
                  <span>Dlouhodobá prokazatelnost: Postaveno na kvalifikovaných službách dle eIDAS a eIDAS 2</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: PŘIPRAVUJEME — PŘEHLED VÝJIMEK] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafd] to-white border-t border-blue-100/70">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#1a5bb5] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Budoucí rozšíření</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Připravujeme: přehled výjimek
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Automatizovaný dohled a včasná detekce nesouladu se stanovenými pravidly.
              </p>
            </div>
          </ScrollReveal>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                <FileSpreadsheet size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Připravovaný modul</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Dohled nad souladem a anomáliemi v reálném čase
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  1
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Přehled stavu záznamů
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Centrální dashboard monitorující dodržování nastavených retenčních politik napříč všemi připojenými systémy a archivy.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  2
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Výjimky k prověření
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Automatická detekce anomálií – dokumenty po splatnosti skartace bez výjimky, chybějící metadata, neobvyklé vzorce přístupů.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  3
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Podklady pro nápravu
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Okamžitý návrh nápravných kroků a vygenerování podkladů pro odpovědné osoby s plným auditním záznamem o zásahu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO TO PŘINÁŠÍ COMPLIANCE ODDĚLENÍ] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/70">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Měřitelné výsledky
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co to přináší compliance oddělení
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FileSearch size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Podklady pro kontrolu bez ručního sběru
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Konec zdlouhavého obíhání IT a správců aplikací. Reporty a průkazní záznamy vygenerujete na několik kliknutí.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Trash2 size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Skartace s dohledatelnou historií
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Jasně doložitelný proces likvidace dat podle GDPR a zákonných lhůt. Vždy víte, co, proč a kdy bylo smazáno.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Podklady pro šetření
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    V případě bezpečnostního incidentu nebo podezření na únik máte k dispozici nezpochybnitelný záznam o přístupech.
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

      {/* [SEKCE: ČASTÉ OTÁZKY] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Otázky a odpovědi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Časté otázky
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="border border-blue-100 rounded-2xl overflow-hidden bg-white shadow-xs transition-all">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-blue-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-bold text-gray-900">
                        {item.question}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[#1a5bb5] flex items-center justify-center flex-shrink-0">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-sm text-gray-600 font-light leading-relaxed border-t border-gray-50 bg-[#fbfdff]">
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

      {/* [BOTTOM CTA BANNER] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a5bb5] to-[#0d3b82] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Chcete mít jistotu, že vaše dokumenty projdou každým auditem?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Během 30 minut si ukážeme, jak nastavit spolehlivá retenční pravidla a získat nezpochybnitelný auditní přehled bez ručního dohledávání.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#1a5bb5] hover:bg-blue-50 font-bold px-8 py-4 rounded-md text-base shadow-xl hover:shadow-2xl transition-all transform active:scale-95 inline-flex items-center gap-2"
            >
              <span>Domluvit konzultaci</span>
              <ArrowRight size={18} />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
