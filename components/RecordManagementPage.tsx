import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Archive,
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
  FileSpreadsheet,
  Layers,
  Copy,
  BrainCircuit,
  FileText
} from 'lucide-react';

interface RecordManagementPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const RecordManagementPage: React.FC<RecordManagementPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Nahrazuje SIESE náš současný spisový systém nebo DMS?',
      answer: 'Ne. SIESE slouží jako archivační a retenční vrstva, která přebírá záznamy určené k dlouhodobému uchování a řízení životního cyklu. Váš DMS nebo spisová služba nadále fungují pro běžnou operativu.'
    },
    {
      question: 'Jak SIESE řeší Legal Hold (pozastavení skartace)?',
      answer: 'Kdykoliv lze na konkrétní záznamy nebo celou skupinu dokumentů uvalit Legal Hold. Skartační proces se pro tyto záznamy okamžitě zastaví bez ohledu na uplynutí standardní lhůty a zůstane aktivní až do jeho výslovného zrušení.'
    },
    {
      question: 'Co se stane se záznamem po provedení skartace?',
      answer: 'Samotný obsah souboru je nevratně a bezpečně odstraněn. V systému však zůstává metadata záznamu a protokol o skartaci (kdo, kdy, na základě jakého pravidla skartaci schválil a provedl), což je klíčové pro doložení auditu.'
    },
    {
      question: 'Jak probíhá import a migrace stávajícího archivu do SIESE?',
      answer: 'SIESE nabízí migrační nástroje a REST API, které umožňují hromadný import dokumentů včetně existujících metadat. Systém pomůže vyčistit duplicity a sjednotit evidenci.'
    },
    {
      question: 'Lze nastavit různá oprávnění pro různé role?',
      answer: 'Ano. SIESE podporuje detailní řízení přístupových práv (RBAC) s integrací na vaše SSO/Active Directory. Správci záznamů, compliance manažeři a běžní uživatelé mají oddělená oprávnění.'
    },
    {
      question: 'Kde jsou data uložena?',
      answer: 'SIESE může běžet plně on-premise na vaší vlastní infrastruktuře nebo v privátním certifikovaném cloudu v EU. Vaše data nikdy neopouštějí váš bezpečnostní perimetr.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Record management"
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
            <span className="text-gray-900 font-semibold">Record management</span>
          </div>
        </div>
      </div>

      {/* [HERO SECTION] */}
      <section className="relative bg-gradient-to-br from-[#1e6cd9] via-[#1a5bb5] to-[#0d3b82] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-dot-grid-white opacity-20 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            {/* Štítek: Records Manager · Information Governance · Document Controller */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-blue-100 text-xs sm:text-sm font-medium tracking-wide mb-6">
              <Archive size={15} className="text-blue-200" />
              <span>Records Manager &middot; Information Governance &middot; Document Controller</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Mějte pod kontrolou, co uchovat, co skartovat a co o tom doložit
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Skartační pravidla jsou jedna věc. Jejich uplatnění v praxi druhá. SIESE řídí retenční lhůty u uložených záznamů, eviduje jejich životní cyklus a ke skartaci provedené v SIESE uchovává protokol.
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

      {/* [SEKCE: CO UŽ DNES ŘEŠÍTE — 3 karty] */}
      <section className="bg-[#f0f7ff] border-y border-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Reálné výzvy v praxi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Co už dnes řešíte
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: Skartační backlog */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <Trash2 size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Skartační backlog
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Záznamy zůstávají uložené i po uplynutí retenční lhůty. Nikdo nechce rozhodnout o odstranění bez jistoty, že je správný čas.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: Migrace archivu */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <FolderArchive size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Migrace archivu
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Starý archiv se stěhuje a s ním nejednotná metadata, nejasné názvy a několik kopií téhož dokumentu. Přesun souborů pořádek v záznamech neudělá.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Audit a kontrola */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <FileSearch size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Audit a kontrola
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Které záznamy se uchovávají, kterým skončila lhůta a co už bylo skartováno? Bez evidence se odpověď skládá z tabulek, systémů a paměti lidí.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: KDE SPRÁVA ZÁZNAMŮ ZBYTEČNĚ KOMPLIKUJE PRÁCI — 5 KARET] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Kde správa záznamů zbytečně komplikuje práci
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Chybějící provázanost mezi pravidly a technickou realizací vede ke ztrátě kontroly nad životním cyklem dokumentů.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Karta 1 */}
            <ScrollReveal delay={50} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <Sliders size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Pravidla jsou v tabulce, systémy se neshodnou
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Skartační plán existuje, ale DMS, SharePoint, e-mail a ERP ho uplatňují každý jinak. Kontrola výjimek zůstává na lidech.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 2 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                    <AlertTriangle size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Nikdo nechce mazat
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Záznamy zůstávají déle, než pravidlo předpokládá. Archiv roste a organizace dál drží data, u kterých je potřeba posoudit, jestli důvod k uchování ještě trvá.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 3 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-4">
                    <CheckSquare size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Skartaci je potřeba také doložit
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    „Záznam jsme odstranili“ při zpětném prověření nestačí. Potřebujete, kterého záznamu se operace týkala a kdy proběhla.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 4 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <UserCheck size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Hledání stojí na lidech
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Metadata a názvy vznikaly v různých obdobích a podle různých zvyklostí. Najít záznam často znamená vědět, kdo ho založil a jak ho pojmenoval. Když ten člověk odejde, odejde i jeho znalost archivu.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 5 */}
            <ScrollReveal delay={250} className="h-full md:col-span-2 lg:col-span-2">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <Copy size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Více kopií, nejasný původní záznam
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Stejný dokument leží na několika místech a verze nejsou snadno rozlišitelné. Bez vazeb je obtížné určit, který záznam je rozhodující a kterou kopii lze odstranit.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: JAK SIESE POMÁHÁ — Control & Rozhraní] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafd] border-y border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Jak SIESE pomáhá
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                SIESE uplatní retenční pravidla na uložené záznamy, eviduje jejich životní cyklus a zpřístupní protokol provedených operací. Informace o záznamech v systému jsou na jednom místě.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: Control — retenční pravidla a skartace pod kontrolou */}
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
                        Control — retenční pravidla a skartace pod kontrolou
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
                          Retenční pravidla na jednom místě
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Pravidla se nastaví podle typu záznamu a na záznamy v SIESE se uplatňují jednotně.
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
                          Operace odstranění proběhne v souladu s pravidlem a v systému zůstává záznam o tom, co a kdy bylo skartováno.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Historie životního cyklu
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          U každého záznamu je evidováno, kdy byl uložen, jaká pravidla se na něj vztahovala a jaké operace s ním proběhly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Přehled o stavu záznamů
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Rychlý přehled o tom, které záznamy se blíží ke konci lhůty, které jsou ve výjimce a které byly skartovány.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-blue-700 font-medium">
                  <PauseCircle size={15} className="text-[#1a5bb5]" />
                  <span>Podpora pro okamžitý Legal Hold a výjimky ze skartace</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2: Rozhraní pro každodenní správu archivu */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                      <Search size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Pilíř 2</span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        Rozhraní pro každodenní správu archivu
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
                          Vyhledávání podle metadat a stavu
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Záznamy dohledáte podle strukturovaných parametrů, retenčního stavu nebo data uložení.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Podklady pro právní oddělení a compliance
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Když přijde požadavek na dohledání podkladů nebo prověření skartace, informace jsou dostupné přímo v systému.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Hromadné operace a auditní stopa
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Možnost hromadné správy záznamů se zachováním individuální průkaznosti a detailního auditního záznamu pro každý soubor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={15} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1">
                          Garantovaná integrita a časová razítka
                        </h4>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          Kvalifikovaná časová razítka a elektronické pečetě s průběžným přerazítkováním zajišťují platnost po celou dobu uchování.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-2 text-xs text-blue-700 font-medium">
                  <Award size={15} className="text-[#1a5bb5]" />
                  <span>Dlouhodobá prokazatelnost: V souladu se standardy eIDAS a požadavky na archivaci</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: PŘIPRAVUJEME — UNDERSTAND] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafd] to-white border-t border-blue-100/70">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#1a5bb5] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Budoucí rozšíření</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Komunikujte s archivem přirozenou řečí
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Inteligentní vyhledávání informací napříč tisíci dokumenty rychle a snadno.
              </p>
            </div>
          </ScrollReveal>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="grid grid-cols-1 gap-6 relative z-10">
              <div className="p-6 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-sm mb-4">
                  <Sparkles size={20} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  AI agent pro váš archiv
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Získejte potřebné odpovědi rychle a bez zdlouhavého hledání. Umělá inteligence pracuje přímo s vašimi daty – lokálně, zcela pod vaší plnou kontrolou a bez vysokých měsíčních nákladů.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO TO PŘINÁŠÍ SPRÁVCI ZÁZNAMŮ — 3 KARTY] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-blue-100/70">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Konkrétní přínosy pro vaše oddělení
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sliders size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Jednotná pravidla pro záznamy v SIESE
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Retenční lhůty se uplatňují v jednom systému podle jasně nastavených pravidel, nikoliv ručně napříč několika úložišti.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <FileCheck size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Skartace, kterou lze zpětně doložit
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    K provedené skartaci existuje protokol. Při kontrole nebo auditu doložíte postup i výsledek.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <History size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Správa archivu nestojí jen na paměti lidí
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Informace o záznamech, jejich stavu a historii jsou evidovány v systému, ne v hlavách odcházejících kolegů.
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
              Chcete mít správu záznamů a skartaci pod kontrolou?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Během 30 minut si ukážeme, jak nastavit jednotná retenční pravidla, automatizovat skartaci a získat jistotu před každým auditem.
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
