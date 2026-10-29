import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Scale, 
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
  Gavel,
  CalendarCheck,
  FileSearch,
  CheckSquare,
  ShieldAlert,
  Sliders,
  Award,
  Server
} from 'lucide-react';

interface LegalDepartmentPageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const LegalDepartmentPage: React.FC<LegalDepartmentPageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Nahrazuje SIESE náš Contract Management System (CMS) nebo DMS?',
      answer: 'Ne. SIESE funguje jako archivační a důkazní vrstva. Váš CMS či DMS nadále slouží pro tvorbu, vyjednávání a běžný oběh dokumentů. SIESE přebírá finální podepsané dokumenty pro jejich dlouhodobé a prokazatelné uchování.'
    },
    {
      question: 'Jak SIESE pomůže, když protistrana u soudu napadne pravost elektronického podpisu?',
      answer: 'SIESE uchovává nejen samotný dokument, ale i kompletní auditní stopu, časová razítka a certifikační řetězce z doby vzniku. Dokáže doložit, že dokument od okamžiku uložení nebyl modifikován a že podpis byl v daném okamžiku platný.'
    },
    {
      question: 'Co se stane, když vyprší platnost kvalifikovaného certifikátu podpisu?',
      answer: 'SIESE průběžně a automaticky provádí přerazítkování (metoda LTV – Long Term Validation) kvalifikovanými časovými razítky dříve, než původní razítko nebo certifikát expiruje. Dokument tak zůstává právně účinný po celá desetiletí.'
    },
    {
      question: 'Lze do SIESE nastavit Legal Hold při probíhajícím sporu?',
      answer: 'Ano. Pokud hrozí nebo probíhá právní spor či kontrola, lze pro dotčené smlouvy a související dokumenty aktivovat funkci Legal Hold, která okamžitě pozastaví jakékoliv plánované skartace bez ohledu na uplynutí standardní retenční doby.'
    },
    {
      question: 'Běží SIESE v cloudu, nebo on-premise na naší infrastruktuře?',
      answer: 'SIESE lze nasadit on-premise přímo v infrastruktuře vaší organizace nebo v privátním cloudu. Vaše citlivé právní dokumenty a smlouvy tak nikdy neopustí vaše bezpečnostní perimetry.'
    },
    {
      question: 'Jak probíhá integrace se stávajícími nástroji právního oddělení?',
      answer: 'Přes moderní REST API nebo standardizované konektory. Dokumenty mohou být do SIESE odesílány automaticky po dokončení podpisového procesu (např. ze systémů elektronického podepisování nebo CMS).'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Právní oddělení"
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
            <span className="text-gray-900 font-semibold">Právní oddělení</span>
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
            {/* Štítek: Vedoucí právního oddělení · General Counsel · Legal Ops */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-blue-100 text-xs sm:text-sm font-medium tracking-wide mb-6">
              <Scale size={15} className="text-blue-200" />
              <span>Vedoucí právního oddělení &middot; General Counsel &middot; Legal Ops</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Důležité dokumenty ověřitelné i po letech. Bez složité rekonstrukce.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Ve sporu nestačí předložit smlouvu. Musíte také doložit, kdy existovala, zda se její obsah změnil a jaký je její původ. SIESE pomáhá zachovat ověřitelné důkazy o dokumentech i v době, kdy původní elektronický podpis už nelze běžně ověřit.
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

      {/* [SEKCE: KDE PRÁVNÍ ODDĚLENÍ ZTRÁCÍ ČAS A JISTOTU — 3 karty] */}
      <section className="bg-[#f0f7ff] border-y border-blue-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Rizika v právní praxi
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Kde právní oddělení ztrácí čas a jistotu
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: Spor */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <Gavel size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Spor
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Protistrana zpochybní pravost dokumentu nebo okamžik jeho vzniku. Podklady se hledají v archivech, e-mailech a u lidí, kteří už ve firmě nejsou.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: Due diligence */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <FileSearch size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Due diligence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Historie smlouvy se skládá z několika systémů a schránek bývalých zaměstnanců. Ověřit úplnost zabere čas a dodatky, které do archivu nedorazily, zůstanou skryté.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: Expirace elektronického podpisu */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-7 border border-blue-100 shadow-sm h-full flex flex-col justify-start hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Expirace elektronického podpisu
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Podpis nebo časové razítko už nelze ověřit stejným způsobem jako v době vzniku. Právní oddělení potřebuje doložit, jak byl dokument uchováván a které důkazy jsou stále dostupné.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO MUSÍ PRÁVNÍ ODDĚLENÍ ŘEŠIT RUČNĚ, KDYŽ DOKUMENTACE NESTAČÍ — 5 KARET] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Dopady neúplné evidence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Co musí právní oddělení řešit ručně, když dokumentace nestačí
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Bez systémové důkazní vrstvy dopadá zátěž na právníky právě ve chvíli, kdy jde o čas a peníze.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Karta 1 */}
            <ScrollReveal delay={50} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Pravost dokumentu se musí doložit
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Předložíte smlouvu a protistrana zpochybní její pravost nebo původ. Pokud chybějí důkazy o dokumentu, přichází na řadu další prověřování, odborné posudky a právní náklady.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 2 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                    <FolderArchive size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Smlouva není na jednom místě
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Rámcová smlouva je v jednom systému, dodatky v několika e-mailových schránkách a důležité oznámení u bývalého zaměstnance. Hrozí, že budete vycházet z neaktuální verze nebo přehlédnete důležitou lhůtu.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 3 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center mb-4">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Podpis časem ztrácí ověřitelnost
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Elektronické podpisy a časová razítka mají omezenou technickou platnost. Bez průběžného přerazítkování je pozdější ověření dokumentu složitější a pravost se musí dokazovat.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 4 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <CalendarCheck size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Retenční lhůty se hlídají ručně
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Pravidla uchovávání jsou v tabulce, skartace se dělá nárazově a u rozsáhlejších archivů se těžko dokládá, proč byl určitý dokument zničen, nebo naopak proč ještě existuje.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Karta 5 */}
            <ScrollReveal delay={250} className="h-full md:col-span-2 lg:col-span-2">
              <div className="bg-[#f8fafd] rounded-2xl p-7 border border-blue-100 h-full flex flex-col justify-between hover:border-blue-300 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Důkazní podklady se skládají až ve chvíli, kdy je potřebujete
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Auditní stopa, informace o verzích a okolnosti vzniku dokumentu jsou rozptýlené. Místo rychlého předložení ucelené složky se podklady rekonstruují pod tlakem běžícího sporu.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: JAK SIESE POMÁHÁ — Prove & Control] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafd] border-y border-blue-100/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Architektura důvěryhodnosti
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Jak SIESE pomáhá
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: Prove */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                      <ShieldCheck size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Modul důkazní vrstvy</span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Prove — důkazy o dokumentu i po letech
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70">
                      <h4 className="text-sm font-bold text-[#1a5bb5] mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Při uložení
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Vytvoření neměnného kryptografického otisku a připojení kvalifikovaného časového razítka a elektronické pečeti.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70">
                      <h4 className="text-sm font-bold text-[#1a5bb5] mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        V průběhu uchovávání
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Průběžné automatické přerazítkování (LTV – Long Term Validation) před expirací podpisových certifikátů a konverze do archivačních formátů PDF/A.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70">
                      <h4 className="text-sm font-bold text-[#1a5bb5] mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Při ověřování
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Okamžitá kontrola integrity a auditní stopy bez nutnosti specializovaného technického know-how.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70">
                      <h4 className="text-sm font-bold text-[#1a5bb5] mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Při sporu
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Generování uceleného důkazního balíčku, který obstojí u soudu nebo při auditu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">
                    Výsledek: Kdykoliv doložíte, že dokument existoval v konkrétním okamžiku a nezměnil se ani o čárku.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar 2: Control */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shadow-xs">
                      <Sliders size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Řízení životního cyklu</span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Control — pravidla uchovávání pod kontrolou
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100/70">
                      <h4 className="text-sm font-bold text-indigo-700 mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Retence podle typu dokumentu
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Automatické hlídání lhůt podle smluvních typů a zákonných předpisů bez manuálních tabulek.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100/70">
                      <h4 className="text-sm font-bold text-indigo-700 mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Skartace s protokolem
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Řízené a doložitelné skartační řízení s neměnným protokolem o zničení dokumentu.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100/70">
                      <h4 className="text-sm font-bold text-indigo-700 mb-1 flex items-center gap-2">
                        <CheckCircle size={15} />
                        Pozastavení skartace (Legal Hold)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
                        Okamžité pozastavení skartace dokumentů dotčených probíhajícím nebo hrozícím soudním sporem.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">
                    Výsledek: Plná compliance s GDPR a interními směrnicemi bez rizika neoprávněného smazání důkazů.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO TO PŘINÁŠÍ PRÁVNÍMU ODDĚLENÍ — 4 BENEFITY] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Konkrétní přínosy pro vaše oddělení
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Přímý vliv na právní jistotu, čas týmu a snížení nákladů na externí posudky.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Méně ruční rekonstrukce
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Konec dohledávání verzí po e-mailech a discích; veškerá historie a vazby jsou na jednom místě.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 2 */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckSquare size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Lepší kontrola nad životním cyklem dokumentů
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Automatizované dodržování retenčních pravidel, skartací a právních lhůt.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 3 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Scale size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Silnější podklady pro dokazování
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Neměnné důkazy o existenci, obsahu a časovém vývoji smluvního vztahu.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Benefit 4 */}
            <ScrollReveal delay={250} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-7 border border-blue-100 h-full flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Připraveno na požadavky eIDAS 2
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Plná kompatibilita s evropskými standardy důvěryhodných archivních služeb.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: CO PŘIPRAVUJEME — Smluvní historie v kontextu / Understand] */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafd] to-white border-t border-blue-100/70">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#1a5bb5] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={14} />
                <span>Budoucnost správy smluv</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Co připravujeme: smluvní historie v kontextu
              </h2>
              <p className="text-gray-600 text-sm md:text-base font-light">
                Inteligentní sémantická vrstva nad archivovanými smlouvami.
              </p>
            </div>
          </ScrollReveal>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold shadow-xs">
                <Workflow size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Připravovaný modul</span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Understand — jaká smluvní pozice platila k určitému datu
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  1
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Jeden záznam smluvního vztahu
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Propojení rámcové smlouvy, dodatků, ceníků a akceptací do jednoho uceleného stromu.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  2
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Pohled k historickému datu
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Možnost podívat se na přesné znění a podmínky smlouvy k libovolnému datu v minulosti.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f0f7ff] border border-blue-100/80">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-xs mb-3">
                  3
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  Přehled důležitých lhůt
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  Automatická extrakce a notifikace blížících se termínů výpovědí, prolongací a milníků.
                </p>
              </div>
            </div>
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
              Chcete mít jistotu, že vaše smlouvy obstojí i za 10 let?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
              Během 30 minut si ukážeme, jak zajistit nezpochybnitelnost smluv a řízenou skartaci bez závislosti na stárnoucích systémech.
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
