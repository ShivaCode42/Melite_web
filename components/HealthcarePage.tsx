import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ConsultationModal } from './ConsultationModal';
import { 
  Activity, 
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
  HeartPulse,
  Scale,
  Sparkles,
  FileSpreadsheet
} from 'lucide-react';

interface HealthcarePageProps {
  onNavigateHome: () => void;
  onNavigateToSection?: (href: string) => void;
}

export const HealthcarePage: React.FC<HealthcarePageProps> = ({
  onNavigateHome,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeHelpTab, setActiveHelpTab] = useState('prove');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Nahrazuje SIESE současný nemocniční systém?',
      answer: 'Ne. Napojí se za něj. Nemocniční systém dál vede klinická data, SIESE uchovává důkaz o souhlasu a dokumentaci po dobu lhůty.'
    },
    {
      question: 'Jak SIESE řeší lhůty podle vyhlášky č. 444/2024 Sb.?',
      answer: 'Retenční pravidla se nastavují podle kategorie záznamu, ne jednou plošnou lhůtou.'
    },
    {
      question: 'Co se stane, když vyprší podpis nebo certifikát?',
      answer: 'Archiv záznamy automaticky přerazítkovává, takže zůstávají ověřitelné po celou dobu uchování.'
    },
    {
      question: 'Musí zdravotní data do cloudu?',
      answer: 'Ne. SIESE běží on-premise, připravovaná AI také lokálně.'
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-gray-900">
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        industryName="Zdravotnictví a nemocniční dokumentace"
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
            <span className="text-gray-900 font-semibold">Zdravotnictví</span>
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
            {/* Title / H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
              Zdravotnictví
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            {/* Perex */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
              Zdravotnická dokumentace a souhlas pacienta musí zůstat dostupné a prokazatelné i poté, co zdrojový systém doslouží. SIESE je archivační vrstva nad nemocničními systémy. Klinická data dál vede nemocniční systém. SIESE dokládá, co bylo s pacientem ujednáno a že se záznam nezměnil.
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
                Legislativa v praxi &bull; Co už platí
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1: Vyhláška č. 444/2024 Sb. */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <Scale size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    Vyhláška č. 444/2024 Sb.
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Od 1. 1. 2025 diferencované lhůty. U lůžkové péče běžně 40 let od posledního propuštění, u řady ambulantních kategorií kratší.
                </p>
              </div>
            </ScrollReveal>

            {/* 2: Informovaný souhlas */}
            <ScrollReveal delay={150} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <FileCheck2 size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    Informovaný souhlas
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  U soudu rozhoduje, že pacient dostal konkrétní verzi informací v přiměřeném předstihu před zákrokem.
                </p>
              </div>
            </ScrollReveal>

            {/* 3: GDPR */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-xs h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold text-xs">
                    <Lock size={16} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    GDPR
                  </h3>
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Zdravotní údaje (čl. 9) zůstávají v organizaci. Žádost pacienta o přístup (čl. 15) potřebuje dohledatelné záznamy.
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
                Rizika při evidenci zdravotnické dokumentace
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
                  Nemocniční systém eviduje zákrok, ne dohodu s pacientem
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Středně velká nemocnice řeší 50–200 souhlasů denně. Naskenovaný formulář u soudu neprokáže časovou posloupnost, informovaný nesouhlas s vysvětlením následků, odvolání souhlasu ani rozsah oprávnění zákonného zástupce nebo opatrovníka.
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
                  Lhůty 40 a více let přežijí každý systém
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Vyhláška č. 444/2024 Sb. nastavuje lhůtu podle kategorie záznamu, ne jedním číslem pro všechno. Nemocniční systémy se mění každých 7–10 let a při běžné migraci se prokazatelnost podpisů a auditní vazby rozpadne.
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
                  Dostupnost i po výměně systému
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Dokumentace musí zůstat dostupná a prokazatelná i dlouho poté, co zdrojový systém doslouží. Držet starý systém jen kvůli čtení starých souhlasů stojí peníze a představuje bezpečnostní rizika.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* [SEKCE: ŘEŠENÍ — Prove · Control · Care — Interaktivní widget] */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1a5bb5] block mb-2">
                Prove &middot; Control &middot; Care
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                Jak SIESE pomáhá
              </h2>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                SIESE spojuje dlouhodobou důkazní sílu zdravotnické dokumentace s přesným řízením skartačních lhůt podle vyhlášky č. 444/2024 Sb. a garantuje 100% on-premise bezpečnost.
              </p>
            </div>
          </ScrollReveal>

          {/* Tab helper and cards */}
          {(() => {
            const helpModules = [
              {
                id: 'prove',
                tabLabel: 'Prove (Důvěryhodnost)',
                category: 'Důvěryhodnost & eIDAS',
                title: 'Prove — důkaz, který přežije nemocniční systém',
                description: 'Zdravotnická dokumentace musí obstát před soudem i po 30 či 40 letech, kdy původní NIS ani lékařské certifikáty dávno neexistují. SIESE zajišťuje okamžité kvalifikované zabezpečení a automatické dlouhodobé přerazítkování (LTV).',
                features: [
                  { label: 'Napojení na NIS:', text: 'Přes REST API na nemocniční systémy na pozadí nebo s vlastním rozhraním.' },
                  { label: 'Při uložení dokumentu:', text: 'Kvalifikované časové razítko a elektronická pečeť garantující integritu a přesný čas vzniku.' },
                  { label: 'Průběžná obnova (LTV):', text: 'Automatické přerazítkování před expirací podpisových certifikátů a konverze do PDF/A.' },
                  { label: 'Záznam v plném kontextu:', text: 'Metadata, podpisy lékařů a kompletní auditní stopa zůstávají čitelné i bez původního systému.' },
                  { label: 'Připraveno na eIDAS 2:', text: 'Postaveno na kvalifikovaných službách vytvářejících důvěru dle eIDAS a standardech eIDAS 2 (čl. 45j, prováděcí nařízení 2025/2532).' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                          <FileCheck2 size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 truncate max-w-[170px]">Operacni_protokol_Kardio.pdf</div>
                          <div className="text-[11px] text-gray-400">PDF/A-2b • 4.2 MB • eIDAS LTV</div>
                        </div>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                        <CheckCircle size={12} />
                        Kvalifikovaný důkaz
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <ShieldCheck size={14} className="text-[#1a5bb5]" />
                          <span>Kvalifikovaná pečeť nemocnice</span>
                        </div>
                        <span className="font-semibold text-gray-900">Platná (QTSP)</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock size={14} className="text-[#1a5bb5]" />
                          <span>Kvalifikované časové razítko</span>
                        </div>
                        <span className="font-mono text-gray-900">14. 03. 2024 09:42 UTC</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Lock size={14} className="text-[#1a5bb5]" />
                          <span>Integrita záznamu</span>
                        </div>
                        <span className="text-emerald-600 font-semibold">100% nezměněno</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Sparkles size={14} className="text-[#1a5bb5]" />
                          <span>Lékařský podpis</span>
                        </div>
                        <span className="font-medium text-gray-900">MUDr. J. Novák (Kvalifikovaný)</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Automatické LTV přerazítkování:</span>
                      <span className="font-medium text-[#1a5bb5]">Aktivní (před expirací)</span>
                    </div>
                  </div>
                )
              },
              {
                id: 'control',
                tabLabel: 'Control (Retence & lhůty)',
                category: 'Retence & vyhláška č. 444/2024 Sb.',
                title: 'Control — lhůty podle kategorie vyhlášky a řízená skartace',
                description: 'Nová vyhláška o zdravotnické dokumentaci č. 444/2024 Sb. přesně definuje retenční doby podle charakteru péče. SIESE uplatňuje pravidla automaticky, eviduje životní cyklus a umožňuje skartaci okamžitě zmrazit.',
                features: [
                  { label: 'Diferencovaná retence:', text: 'Lhůty podle konkrétní kategorie vyhlášky č. 444/2024 Sb. (lůžková péče 40 let, ambulantní 10 let, komplementární nálezy 5 let).' },
                  { label: 'Neurčitý konec lhůty:', text: 'Spolehlivá správa záznamů navázaných na událost (např. úmrtí pacienta nebo ukončení dispenzární péče).' },
                  { label: 'Pozastavení skartace (Legal Hold):', text: 'Okamžité zmrazení skartační lhůty při stížnosti, interním šetření nebo probíhajícím soudním sporu.' },
                  { label: 'Auditovaný protokol o skartaci:', text: 'Při skartaci vzniká nepozměnitelný protokol dokládající, co, kdy a na základě jakého pravidla bylo v SIESE odstraněno.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-6 font-sans">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                          <Scale size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Vyhláška č. 444/2024 Sb.</div>
                          <div className="text-[11px] text-gray-500">Skartační řád zdravotnické dokumentace</div>
                        </div>
                      </div>
                      <span className="bg-blue-50 text-[#1a5bb5] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-blue-200">
                        Automatická retence
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-gray-800">Lůžková péče — propouštěcí zpráva</span>
                          <span className="font-semibold text-[#1a5bb5]">Lhůta 40 let</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <span>Uloženo: 2024 • Konec lhůty: 2064</span>
                          <span className="text-emerald-600 font-medium">Aktivní archiv</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-gray-800">Ambulantní péče — zpráva specialisty</span>
                          <span className="font-semibold text-[#1a5bb5]">Lhůta 10 let</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-gray-500">
                          <span>Uloženo: 2024 • Konec lhůty: 2034</span>
                          <span className="text-emerald-600 font-medium">Aktivní archiv</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-amber-900 flex items-center gap-1.5">
                            <Clock size={12} className="text-amber-600" />
                            Pozastavení skartace (Legal Hold)
                          </span>
                          <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                            Aktivní hold
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-800 font-light mt-1">
                          Spis pacienta #842911 zmrazen z důvodu mimosoudního šetření. Žádná data nelze smazat.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Skartační protokol:</span>
                      <span className="font-semibold text-gray-800">Digitálně pečetěn (nepozměnitelný)</span>
                    </div>
                  </div>
                )
              },
              {
                id: 'onpremise',
                tabLabel: 'On-premise & bezpečnost',
                category: 'Bezpečnost & On-premise',
                title: 'Data v nemocnici — 100% On-premise provoz a soulad s NIS2',
                description: 'Citlivé zdravotnické údaje podle GDPR čl. 9 nikdy neopouštějí infrastrukturu vaší nemocnice. SIESE běží plně v lokálním prostředí s vysokou dostupností a plným souladem s požadavky kybernetické bezpečnosti.',
                features: [
                  { label: 'Lokální infrastruktura:', text: 'Systém běží lokálně na vašich serverech nebo v privátním nemocničním datacentru bez závislosti na veřejném cloudu.' },
                  { label: 'Ochrana citlivých dat (GDPR čl. 9):', text: 'Zdravotní data pacientů zůstávají plně pod kontrolou správce, chráněna robustním šifrováním.' },
                  { label: 'Připravenost na NIS2 / ZoKB:', text: 'Splnění bezpečnostních opatření pro poskytovatele základních a regulovaných zdravotnických služeb.' },
                  { label: 'Integrační rozhraní REST API:', text: 'Snadné napojení na stávající informační systémy nemocnice s možností škálování na miliony záznamů.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-6 font-sans">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center">
                        <Server size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Perimetr nemocnice</div>
                        <div className="text-lg font-bold text-gray-900">On-premise architektura</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-5">
                      <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-gray-700">
                        <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-[#1a5bb5]" />
                          GDPR čl. 9 & Zdravotnická data
                        </div>
                        Data pacientů neopouštějí interní nemocniční síť. Žádný transfer do veřejných zahraničních cloudů.
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="font-semibold text-gray-900 mb-0.5">NIS2 / ZoKB</div>
                          <div className="text-[11px] text-gray-500">Bezpečnostní dohled & logování</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="font-semibold text-gray-900 mb-0.5">REST API</div>
                          <div className="text-[11px] text-gray-500">Přímé napojení na nemocniční NIS</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
                      <span className="font-medium flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-emerald-600" />
                        Šifrování v klidu i při přenosu
                      </span>
                      <span className="font-bold text-emerald-900">AES-256</span>
                    </div>
                  </div>
                )
              },
              {
                id: 'care',
                tabLabel: 'SIESE Care',
                category: 'Posloupnost a projevy vůle',
                title: 'SIESE Care — důkaz posloupnosti a projevů vůle',
                isUpcoming: true,
                description: 'Středně velká nemocnice řeší desítky až stovky souhlasů denně. SIESE Care uchovává důkaz o přesném pořadí úkonů: že pacient nejprve obdržel poučení, porozuměl mu a teprve poté podepsal souhlas či vyjádřil informovaný nesouhlas.',
                features: [
                  { label: 'Posloupnost poučení a souhlasu:', text: 'Prokazatelné doručení a předání konkrétní verze informací nezpochybnitelně předchází samotnému podpisu souhlasu.' },
                  { label: 'Informovaný nesouhlas (Revers):', text: 'Řízená evidence nesouhlasu včetně vysvětlení následků a okamžitého zablokování indikovaného výkonu v systému.' },
                  { label: 'Zástupný souhlas a opatrovníci:', text: 'Právně jistá evidence rozsahu oprávnění zákonného zástupce či opatrovníka u nezletilých a nesvéprávných.' },
                  { label: 'Předání směny a práva pacientů:', text: 'Samostatný důkaz pro každého pacienta a blesková příprava podkladů pro žádost o nahlédnutí (GDPR čl. 15).' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-6 font-sans">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                          <HeartPulse size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Pacient #49201 • Kardiochirurgie</div>
                          <div className="text-[11px] text-gray-500">Časová osa projevů vůle</div>
                        </div>
                      </div>
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                        Připravujeme
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1a5bb5] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          1
                        </div>
                        <div className="flex-1 bg-gray-50 p-2 rounded-lg border border-gray-100">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-semibold text-gray-900">Předání poučení (v2.4)</span>
                            <span className="text-[10px] text-gray-400 font-mono">08:15:20</span>
                          </div>
                          <span className="text-[11px] text-gray-600">Pacient převzal informovaný formulář s riziky.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          2
                        </div>
                        <div className="flex-1 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-semibold text-gray-900">Podpis informovaného souhlasu</span>
                            <span className="text-[10px] text-[#1a5bb5] font-mono">08:45:10</span>
                          </div>
                          <span className="text-[11px] text-gray-600">Biometrický/kvalifikovaný podpis ověřen.</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          3
                        </div>
                        <div className="flex-1 bg-emerald-50/40 p-2 rounded-lg border border-emerald-100">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-semibold text-gray-900">Uložení s časovým razítkem</span>
                            <span className="text-[10px] text-emerald-600 font-mono">08:45:12</span>
                          </div>
                          <span className="text-[11px] text-emerald-800">Kvalifikovaná pečeť vytvořena do 2 sekund.</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Důkazní síla u soudu:</span>
                      <span className="font-semibold text-emerald-700">Časová posloupnost nezpochybnitelná</span>
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

      {/* [SEKCE: VÝSLEDKY — 3 karty] */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Proč SIESE
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#f0f7ff] rounded-2xl p-8 border border-blue-100 h-full flex flex-col justify-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a5bb5] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Obrana ve sporu i po desítkách let
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Důkaz o tom, s čím pacient souhlasil a v jakém pořadí, přežije expiraci certifikátů, odchod personálu i výměnu nemocničního systému.
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
                  Lhůty podle vyhlášky, ne odhadem
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Každá kategorie má vlastní retenci. Uchováte, co předpis vyžaduje, a ke každé skartaci máte auditní záznam.
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
                  Zdravotní data zůstanou u vás
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  Archiv běží na vaší infrastruktuře. Záznamy zůstávají čitelné desítky let i po výměně systému, bez rizik a nákladů za systém, který už nikdo nepoužívá.
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
              Ukážeme vám, jak by vypadal důkaz souhlasu pro spor nebo kontrolu
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Během 30 minut si ukážeme, jak zajistit soulad s vyhláškou č. 444/2024 Sb., dlouhodobou retenci na 40 let a ochranu pacientských dat.
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
