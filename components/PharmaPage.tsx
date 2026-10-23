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
  FileCheck,
  FolderGit2,
  FileSearch,
  Activity,
  AlertCircle
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
  const [activeHelpTab, setActiveHelpTab] = useState<string>('dlouhodoba-integrita');

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

      {/* SECTION: Jak SIESE pomáhá (tabbed widget working like Finance / Homepage) */}
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
                Prohlédněte si klíčové schopnosti systému pro bezpečné, dlouhodobě ověřitelné a regulované uchovávání záznamů farmaceutické výroby a klinického vývoje v souladu se SÚKL, EMA a FDA.
              </p>
            </div>
          </ScrollReveal>

          {/* Helper functions and tab rendering */}
          {(() => {
            const helpModules = [
              {
                id: 'dlouhodoba-integrita',
                tabLabel: 'Dlouhodobá ověřitelnost',
                category: 'Archivace & eIDAS 2',
                title: 'Prokazatelnost záznamů po celá desetiletí',
                description: 'Výrobní a studijní dokumentace ve farmacii musí zůstat prokazatelná po celá desetiletí, i když LIMS, QMS či eTMF mezitím doslouží. SIESE vytváří nezávislou důkazní vrstvu s automatickým přerazítkováním bez nutnosti udržovat zastaralé aplikace v chodu.',
                features: [
                  { label: 'Přímé napojení na systémy:', text: 'API integrace na QMS, DMS, ERP, LIMS nebo eTMF/CTMS na pozadí i s vlastním rozhraním.' },
                  { label: 'Zabezpečení při uložení:', text: 'Kvalifikované časové razítko a elektronická pečeť na každý SOP, šaržový záznam, certifikát CoA i HCP smlouvu.' },
                  { label: 'Průběžná obnova (LTV):', text: 'Automatické přerazítkování před expirací certifikátů a konverze do dlouhodobě udržitelného formátu PDF/A.' },
                  { label: 'Záznam v plném kontextu:', text: 'Metadata, podpisy, historie verzí a kompletní auditní stopa zůstávají pohromadě i po vyřazení původního systému.' },
                  { label: 'Připraveno na eIDAS 2:', text: 'Postaveno na kvalifikovaných službách vytvářejících důvěru dle eIDAS a standardech kvalifikované elektronické archivace (čl. 45j, prováděcí nařízení 2025/2532).' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1a5bb5] flex items-center justify-center font-bold">
                          <FileCheck2 size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900 truncate max-w-[170px]">Sarze_CZ-89421_CoA_Release.pdf</div>
                          <div className="text-[11px] text-gray-400">PDF/A-2b • 3.8 MB • GAMP 5 & eIDAS</div>
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
                          <span>Kvalifikovaná pečeť výrobce</span>
                        </div>
                        <span className="font-semibold text-gray-900">Platná (QTSP)</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock size={14} className="text-[#1a5bb5]" />
                          <span>Časové razítko vzniku</span>
                        </div>
                        <span className="font-mono text-gray-900">18. 09. 2024 10:14 UTC</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Lock size={14} className="text-[#1a5bb5]" />
                          <span>Integrita šarže & CoA</span>
                        </div>
                        <span className="text-emerald-600 font-semibold">100% nezměněno</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex items-center gap-2 text-gray-700">
                          <UserCheck size={14} className="text-[#1a5bb5]" />
                          <span>Kvalifikovaná osoba (QP)</span>
                        </div>
                        <span className="font-medium text-gray-900">Dr. E. Dvořáková (Kvalifikovaný)</span>
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
                id: 'alcoa',
                tabLabel: 'Integrita dat ALCOA+',
                category: 'Regulační shoda SÚKL / EMA',
                title: 'Čtyři důkazy pro integritu dat (ALCOA+)',
                description: 'Inspektoři SÚKL, EMA i FDA vyžadují striktní dodržování principů integrity dat. SIESE poskytuje nezpochybnitelné důkazy původu, času vzniku, absolutní neměnnosti a kompletního životního cyklu pro každý regulovaný záznam.',
                features: [
                  { label: 'Důkaz původu (Attributable):', text: 'Jednoznačná identifikace autora záznamu, operátora výrobní linky i schvalující osoby s ověřenou identitou.' },
                  { label: 'Důkaz existence v čase (Contemporaneous):', text: 'Kvalifikované časové razítko fixující přesný okamžik vzniku listiny a schvalovacích kroků.' },
                  { label: 'Důkaz neměnnosti (Original & Accurate):', text: 'Kryptografické hashování a digitální pečeť garantující nulovou neautorizovanou změnu.' },
                  { label: 'Důkaz životního cyklu (Complete & Consistent):', text: 'Neměnný auditní trail sledující veškeré operace od zrodu až po případnou skartaci.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-6 font-sans">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] flex items-center justify-center">
                        <Scale size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1a5bb5]">Standard integrity dat</div>
                        <div className="text-lg font-bold text-gray-900">ALCOA+ / GAMP 5 / 21 CFR Part 11</div>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-100 mb-4 text-xs text-gray-700 leading-relaxed">
                      <div className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                        <CheckCircle size={13} className="text-[#1a5bb5]" />
                        Kvalifikovaná auditní stopa pro inspekci SÚKL a EMA
                      </div>
                      Každý záznam nese matematicky ověřitelný řetězec důkazů splňující nejvyšší regulatorní nároky na integritu dat cGMP.
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="text-gray-400 font-medium">KDO &bull; Původ</div>
                        <div className="font-semibold text-gray-700 mt-0.5">Identifikace autora & QP</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="text-gray-400 font-medium">KDY &bull; Čas vzniku</div>
                        <div className="font-semibold text-gray-700 mt-0.5">Kvalifikované razítko</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="text-gray-400 font-medium">BEZE ZMĚNY &bull; Integrita</div>
                        <div className="font-semibold text-gray-700 mt-0.5">Kryptografický otisk</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100">
                        <div className="text-emerald-700 font-medium">CO DÁL &bull; Cyklus</div>
                        <div className="font-semibold text-emerald-900 mt-0.5">Audit trail až po skartaci</div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'retence',
                tabLabel: 'Řízení životního cyklu',
                category: 'Retence & On-Premise bezpečnost',
                title: 'Řízení životního cyklu a inspekční připravenost',
                description: 'Nastavte diferencovaná pravidla uchovávání podle typu farmaceutické dokumentace. Spravujte lhůty vázané na události a v případě šetření nebo auditu okamžitě zmrazte skartační běh.',
                features: [
                  { label: 'Retence podle typu záznamu:', text: 'Automatická pravidla pro šaržové záznamy, SOP, analytické certifikáty, validace i eTMF bez ruční evidence.' },
                  { label: 'Pozastavení skartace (Legal Hold):', text: 'Okamžité zmrazení skartačního plánu pro dotčené šarže při auditu SÚKL, reklamaci nebo sporu.' },
                  { label: '100% On-Premise provoz:', text: 'Výrobní receptury, patenty a citlivé výrobní know-how nikdy neopouštějí vaši podnikovou síť.' },
                  { label: 'Řízená skartace s protokolem:', text: 'Po vypršení lhůty proběhne skartace s vystavením neodvolatelného časově orazítkovaného protokolu.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <History size={16} className="text-[#1a5bb5]" />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Životní cyklus šarže</span>
                      </div>
                      <span className="text-[10px] bg-blue-50 text-[#1a5bb5] font-semibold px-2 py-0.5 rounded-full">
                        Retence: 25 let / událost
                      </span>
                    </div>
                    <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Uložení & digitální pečeť</div>
                          <div className="text-[11px] text-gray-500">Časové razítko při propuštění šarže QP</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#1a5bb5] ring-4 ring-blue-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Aktivní retenční běh</div>
                          <div className="text-[11px] text-gray-500">Průběžná obnova LTV razítek a verifikace</div>
                        </div>
                      </div>
                      <div className="relative flex items-start gap-3 pl-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-amber-100 mt-0.5 shrink-0 z-10"></div>
                        <div>
                          <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                            <span>Legal Hold aktivní</span>
                            <span className="text-[9px] bg-amber-100 px-1.5 py-0.5 rounded font-semibold text-amber-800">Zmrazeno</span>
                          </div>
                          <div className="text-[11px] text-gray-500">Skartace pozastavena pro audit SÚKL / reklamaci</div>
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
                id: 'siese-care',
                tabLabel: 'Klinické studie & SIESE Care',
                category: 'Klinické studie & Farmakovigilance',
                isUpcoming: true,
                title: 'SIESE Care — studie a farmakovigilance',
                description: 'Připravované rozšíření navržené pro klinická hodnocení a farmakovigilanci. Usnadňuje správu informovaných souhlasů napříč multicentrickými studiemi a garantuje dodržení přísných lhůt hlášení nežádoucích účinků.',
                features: [
                  { label: 'Re-consent kampaně:', text: 'Při změně protokolu studie zacílená distribuce a prokazatelná evidence podepsání aktuální verze souhlasu.' },
                  { label: 'Prokazatelný Den nula (Day 0):', text: 'Časově orazítkovaný záznam přijetí hlášení nežádoucího účinku pro splnění 15denní lhůty.' },
                  { label: 'Uzavření studie (Study Close-out):', text: 'Automatická kontrola úplnosti a integrity eTMF složek před finálním auditem.' },
                  { label: 'Smlouvy s lékaři (HCP / EFPIA):', text: 'Auditovatelná vazba mezi smlouvami, poskytnutým plněním a verzemi podmínek.' }
                ],
                visual: (
                  <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-blue-100 p-5 font-sans">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <FlaskConical size={16} className="text-[#1a5bb5]" />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Klinická hodnocení & PV</span>
                      </div>
                      <span className="text-[10px] bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                        Připravujeme
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3 text-center">
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">Den nula (Day 0)</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Lhůta 15 dní OK</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">Re-consent</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Centra akt.</div>
                      </div>
                      <div className="p-2 rounded bg-blue-50 border border-blue-100">
                        <div className="text-[10px] text-gray-500 font-medium">eTMF Audit</div>
                        <div className="text-xs font-bold text-[#1a5bb5]">Složka úplná</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-gray-700 mb-2">Auditní log operací (neměnný):</div>
                    <div className="space-y-1.5 font-mono text-[11px] text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">14:22:05</span>
                        <span className="text-gray-800">Příjem SAE — Zaznamenán Day 0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">11:08:30</span>
                        <span className="text-gray-800">Re-consent: 48 center aktualizováno</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">09:15:12</span>
                        <span className="text-emerald-700 font-medium">Integrita eTMF: 100% OK</span>
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
