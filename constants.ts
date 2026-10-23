import { 
  FileText, ShieldAlert, BadgeDollarSign, Scale, Search, ShieldCheck, 
  FileCheck, PenTool, Archive, Handshake, Headphones, Cpu,
  Radio, Landmark, Building2, Activity, Zap, FlaskConical
} from 'lucide-react';

export interface SolutionIndustry {
  id: string;
  name: string;
  href: string;
  description: string;
  icon: any;
}

export const SOLUTION_INDUSTRIES: SolutionIndustry[] = [
  {
    id: 'telekomunikace',
    name: 'Telekomunikace',
    href: '/telekomunikace',
    description: 'Automatizace smluv a masový digitální onboarding klientů.',
    icon: Radio,
  },
  {
    id: 'finance',
    name: 'Finance',
    href: '/finance',
    description: 'Úvěrové a pojišťovací procesy, AML a striktní compliance.',
    icon: Landmark,
  },
  {
    id: 'statni-sprava',
    name: 'Státní správa',
    href: '/statni-sprava',
    description: 'Důvěryhodný archiv, eIDAS, spisová služba a skartační řád.',
    icon: Building2,
  },
  {
    id: 'zdravotnictvi',
    name: 'Zdravotnictví',
    href: '/zdravotnictvi',
    description: 'Archivační vrstva, informované souhlasy a ochrana dat.',
    icon: Activity,
  },
  {
    id: 'farmacie',
    name: 'Farmacie',
    href: '/farmaie',
    description: 'Vědecký vývoj, SOP, šaržové záznamy a inspekce SÚKL/EMA.',
    icon: FlaskConical,
  },
  {
    id: 'energetika-utility',
    name: 'Energetika a utility',
    href: '/energetika-utility',
    description: 'Zákaznické smlouvy, as-built dokumentace, revize a NIS2.',
    icon: Zap,
  },
];

export interface SolutionDepartment {
  id: string;
  name: string;
  href: string;
  description: string;
  icon: any;
}

export const SOLUTION_DEPARTMENTS: SolutionDepartment[] = [
  {
    id: 'pravni-oddeleni',
    name: 'Právní',
    href: '/pravni-oddeleni',
    description: 'Důležité dokumenty a smlouvy ověřitelné i po letech.',
    icon: Scale,
  },
  {
    id: 'compliance-oddeleni',
    name: 'Compliance',
    href: '/compliance-oddeleni',
    description: 'Retenční pravidla, dohledatelnost a důkazy pod kontrolou.',
    icon: ShieldCheck,
  },
  {
    id: 'record-management',
    name: 'Record management',
    href: '/record-management',
    description: 'Uplatnění skartačních pravidel, řízení životního cyklu a protokol o skartaci.',
    icon: Archive,
  },
];

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  heroDescription: string;
  stats: { value: string; label: string }[];
  keyChallenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  'telekomunikace': {
    id: 'telekomunikace',
    name: 'Telekomunikace',
    tagline: 'Řešení pro telekomunikační operátory a poskytovatele připojení',
    heroDescription: 'Zpracovávejte statisíce klientských smluv, dodatků a protokolů bez prodlev. Digitální podpis přes SMS i BankID a okamžitá aktivace služeb.',
    stats: [
      { value: '98 %', label: 'smluv podepsáno v den doručení' },
      { value: '3x', label: 'rychlejší onboarding nových zákazníků' },
      { value: '0 Kč', label: 'náklady na fyzický tisk a archivaci papíru' },
    ],
    keyChallenges: [
      { title: 'Vysoké objemy smluvních dokumentů', desc: 'Desítky tisíc nových smluv měsíčně zatěžují call centra i administrativu.' },
      { title: 'Časové prodlevy při podpisu kurýrem', desc: 'Fyzické doručování zpožďuje zahájení fakturace a zvyšuje míru storna smluv.' },
      { title: 'Zabezpečení osobních údajů', desc: 'Přísné nároky GDPR a telekomunikačního zákona na archivaci a důvěryhodnost.' }
    ],
    solutions: [
      { title: 'Bleskový online podpis přes SMS i BankID', desc: 'Zákazník podepíše smlouvu na svém mobilním telefonu během 60 sekund.' },
      { title: 'Automatické párování s billingem a CRM', desc: 'Dokument se po podpisu sám zaeviduje do zákaznického profilu a aktivuje službu.' },
      { title: 'Dlouhodobý důvěryhodný archiv s časovými razítky', desc: 'Garance právní platnosti smluv i po mnoha letech pro potřeby ČTÚ a soudů.' }
    ]
  },
  'finance': {
    id: 'finance',
    name: 'Finance & Pojišťovnictví',
    tagline: 'Bezpečné a regulované řešení pro banky, fintech a pojišťovny',
    heroDescription: 'Plovoucí schvalovací procesy pro úvěrové žádosti, pojistné smlouvy a AML dokumentaci s plným souladem s požadavky ČNB a EBA.',
    stats: [
      { value: '100 %', label: 'soulad s regulacemi ČNB a eIDAS' },
      { value: '-70 %', label: 'doba zpracování úvěrové dokumentace' },
      { value: 'Audit-ready', label: 'okamžitý přístup k úplné historii změn' },
    ],
    keyChallenges: [
      { title: 'Přísná regulace a auditní nároky', desc: 'Požadavky ČNB, AML a eIDAS na jednoznačnou identifikaci a nepopiratelnost podpisu.' },
      { title: 'Komplexní schvalovací kolečka', desc: 'Víceúrovňové schvalování rizikovými analytiky, právníky a manažery.' },
      { title: 'Riziko neplatnosti elektronického podpisu', desc: 'Obava z právní napadnutelnosti smluv při soudních či exekučních sporech.' }
    ],
    solutions: [
      { title: 'Kvalifikovaná časová razítka a pečeti', desc: 'Všechny finanční dokumenty splňují nejvyšší evropské standardy digitální důvěry.' },
      { title: 'Přísně řízená přístupová práva (RBAC)', desc: 'Zaměstnanci vidí jen data nezbytná pro jejich roli s detailním logováním každého zobrazení.' },
      { title: 'Integrace do core-bankingových systémů', desc: 'Hladké napojení na hlavní bankovní software přes robustní REST API.' }
    ]
  },
  'statni-sprava': {
    id: 'statni-sprava',
    name: 'Státní správa & Veřejný sektor',
    tagline: 'Elektronická spisová služba a certifikovaná archivace pro úřady a samosprávy',
    heroDescription: 'Moderní a legislativně čistá správa spisů, úředních desek a smluv v souladu se zákonem o archivnictví a spisové službě.',
    stats: [
      { value: '100 %', label: 'soulad se zákonem č. 499/2004 Sb.' },
      { value: 'eIDAS', label: 'certifikované časové razítkování' },
      { value: '10+ let', label: 'garance čitelnosti v balíčcích AIP' },
    ],
    keyChallenges: [
      { title: 'Zákonné požadavky na skartační řízení', desc: 'Nutnost přesně hlídat skartační lhůty (A/S/V) a garantovat doložitelné zničení či předání do archivu.' },
      { title: 'Přerazítkovávání a stárnutí certifikátů', desc: 'Riziko, že po expiraci certifikátu ztratí úřední listina právní účinnost.' },
      { title: 'Napojení na Datové schránky a PVS', desc: 'Nutnost automatizovaného příjmu a vypravování bez manuálního stahování.' }
    ],
    solutions: [
      { title: 'Automatizované přerazítkování (LTV)', desc: 'Systém sám v předstihu obnovuje časová razítka před vypršením jejich platnosti.' },
      { title: 'Standardizované balíčky SIP / AIP / DIP', desc: 'Dlouhodobé uchování dokumentů ve formátech PDF/A s kompletními XML metadaty.' },
      { title: 'Řízené skartační protokoly', desc: 'Generování skartačních návrhů jedním kliknutím s automatickou evidencí protokolu.' }
    ]
  },
  'farmacie-zdravotnictvi': {
    id: 'farmacie-zdravotnictvi',
    name: 'Farmacie & Zdravotnictví',
    tagline: 'Ochrana citlivé zdravotnické dokumentace a validace pro klinické studie',
    heroDescription: 'Zabezpečená platforma pro nemocnice, laboratoře a farmaceutické společnosti s důrazem na integritu dat a ochranu citlivých informací.',
    stats: [
      { value: 'GDPR & HIPAA', label: 'nejvyšší úroveň zabezpečení citlivých údajů' },
      { value: '21 CFR Part 11', label: 'připraveno pro validaci auditní stopy' },
      { value: 'Zero-data leak', label: 'šifrování dat při přenosu i uložení' },
    ],
    keyChallenges: [
      { title: 'Mimořádně citlivá zdravotní data', desc: 'Přísná legislativa pro nakládání se zdravotnickou dokumentací a anonymizací.' },
      { title: 'Regulace klinických studií a šarží', desc: 'Požadavky SÚKL a EMA na nepozměnitelnost záznamů a kompletní auditní trail.' },
      { title: 'Předávání dokumentace mezi pracovišti', desc: 'Bezpečné sdílení zpráv a konsilií bez rizika neoprávněného nahlížení.' }
    ],
    solutions: [
      { title: 'Kryptografická integrita záznamů', desc: 'Nemožnost zpětné úpravy schválených protokolů a výsledků testů.' },
      { title: 'Role-based access s dvoufaktorovou autentizací', desc: 'Ověření lékařů a výzkumníků pro přístup k vybraným složkám.' },
      { title: 'Bezpečné portálové podepisování', desc: 'Informované souhlasy pacientů podepsané přímo na tabletu s biometrickým profilem.' }
    ]
  },
  'energetika-utility': {
    id: 'energetika-utility',
    name: 'Energetika & Utility',
    tagline: 'Správa technické, revizní a smluvní dokumentace pro energetický sektor',
    heroDescription: 'Centrální evidence odběrných míst, revizních zpráv, smluv s velkoodběrateli a servisní dokumentace pro energetické a distribuční společnosti.',
    stats: [
      { value: '100 tis+', label: 'smluvních vztahů pod jednou střechou' },
      { value: '-85 %', label: 'času stráveného dohledáváním revizí' },
      { value: '24/7', label: 'okamžitý přístup techniků v terénu' },
    ],
    keyChallenges: [
      { title: 'Rozsáhlá technická a výkresová dokumentace', desc: 'Stovky gigabajtů schémat, revizních knih a protokolů o připojení.' },
      { title: 'Koordinace terénních techniků a revizáků', desc: 'Nutnost rychlého podpisu předávacích protokolů přímo na stavbách a stanicích.' },
      { title: 'Pravidelné revize a zákonné lhůty', desc: 'Riziko prošvihnutí zákonných termínů revizí zařízení a vedení.' }
    ],
    solutions: [
      { title: 'Mobilní podepisování v terénu', desc: 'Technik nechá zákazníka podepsat protokol na tabletu a data se ihned propíšou do centrály.' },
      { title: 'Automatické notifikace blížících se revizí', desc: 'Systém hlídá termíny a s předstihem upozorní odpovědného dispečera.' },
      { title: 'Velkokapacitní objektové úložiště DDS', desc: 'Škálovatelné úložiště navržené pro objemné technické výkresy a skeny.' }
    ]
  }
};

export interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Řešení', href: '#reseni', hasDropdown: true },
  { name: 'Produkty', href: '#produkty' },
  { name: 'O nás', href: '#o-nas' },
  { name: 'Kontakt', href: '#kontakt' },
];

export const PROBLEMS = [
  {
    icon: Scale,
    title: 'Právní a compliance rizika',
    description: 'Nevíte s jistotou, kdo dokument podepsal, jaká je jeho platnost a obáváte se, zda digitální podpis obstojí i po letech u soudu.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Provozní a finanční neefektivita',
    description: 'Správa papírových dokumentů je finančně nákladná a časově náročná. Na fyzické podpisy jednotlivých stran se musí zbytečně čekat což vede k prodlevám a frustraci.'
  },
  {
    icon: Search,
    title: 'Chaos v evidenci',
    description: 'Smlouvy se ztrácí v e-mailech, nevíte, u koho se podpis zasekl a která verze dokumentu je skutečně platná.'
  },
  {
    icon: ShieldAlert,
    title: 'Chybí kontrola nad citlivými daty',
    description: 'Zaměstnanci běžně používají neschválené online nástroje pro správu dokumentů, čímž dochází k riziku úniku citlivých dat.'
  }
];

export const WORKFLOW_STEPS = [
  {
    title: 'Vytvoření dokumentu.',
    description: 'Dokument je v pracovní fázi.'
  },
  {
    title: 'Schvalování',
    description: 'Dokument putuje na základě nastavené workflow automaticky ke schválení.'
  },
  {
    title: 'Podpis',
    description: 'Oběma stranám přijde e-mail z kterého se prokliknou do zabezpečeného portálu, ověří svou totožnost (např. BankID, eObčanky) a dokument podepíší.'
  },
  {
    title: 'Časová razítka a certifikáty',
    description: 'Po podepsání je dokument na pozadí automaticky opatřen certifikátem a časovým razítkem. Tím je garantován obsah dokumentu i čas podpisu.'
  },
  {
    title: 'Archivace',
    description: 'Dokument se automaticky uloží do archivu. Systém sám hlídá platnost certifikátů a před jejich expirací se automaticky obnoví, čímž prodlouží jejich platnost o další roky.'
  },
  {
    title: 'Skartace',
    description: 'Po uplynutí zákonné lhůty (např. 10 let) systém upozorní zodpovědnou osobu a provede bezpečné a doložitelné smazání dat.'
  }
];

export const STATS = [
  {
    value: '85%',
    text: 'pokles chybovosti v dokumentech.'
  },
  {
    value: '90%',
    text: 'úspora času při evidenci a kontrole dokumentů.'
  },
  {
    value: '100%',
    text: 'dokumentů najdete přehledně na jednom místě.'
  }
];

export const ADAPTABILITY_TABS = [
  'Platforma',
  'Správa dokumentů',
  'Analytika',
  'Migrace'
];

export const MODULE_CONTENT = {
  'Platforma': {
    layout: 'code',
    title: 'Core',
    description: 'Slouží jako základní platforma pro správu uživatelů, bezpečnosti a integrací. Zajiždťuje, aby všechny ostatní moduly komunikovaly hladce a bezpečně.',
    features: [
      { label: 'Integrovatelnost:', text: 'REST API pro snadné napojení na vaše ERP, CRM, spisovou službu či jiné aplikace.' },
      { label: 'Bezpečnost:', text: 'Pokročilá autentizace (SSO, AD/LDAP) a řízení oprávnění.' },
      { label: 'Přehled:', text: 'Centrální auditní stopa, logování a systémová upozornění.' }
    ]
  },
  'Správa dokumentů': {
    layout: 'grid',
    items: [
      {
        title: 'Content',
        description: 'Modul pomáhá transformovat obyčejná data na právně závazné dokumenty pomocí certifikátů a ověřování podpisů.',
        features: [
          { label: 'Digitální důvěra:', text: 'Integrace elektronických podpisů, pečetí a certifikátů.' },
          { label: 'Validace:', text: 'Automatické ověřování platnosti podpisů a certifikačních cest.' },
          { label: 'Kryptografická ochrana:', text: 'Řízení integrity obsahu.' }
        ]
      },
      {
        title: 'Document Management System',
        description: 'Modul pro efektivní správu životního cyklu dokumentů. Modul navržený pro práci s velkými objemy dat, přehledné verzování dokumentů a řízení oběhu.',
        features: [
          { label: 'Workflow:', text: 'Řízení oběhu dokumentů a schvalovacích procesů.' },
          { label: 'Verzování:', text: 'Kompletní historie změn a správa metadat.' },
          { label: 'Výkon:', text: 'Optimalizace pro objemné datové struktury.' }
        ]
      },
      {
        title: 'Distributed Document Storage',
        description: 'Bezpečné úložiště, které roste s vámi. Vysoce dostupné, objektové úložiště navržené pro maximální výkon a bezpečnost distribuovaných dat.',
        features: [
          { label: 'Vysoká dostupnost:', text: 'Inteligentní distribuce mezi uzly a geografická redundance.' },
          { label: 'Ochrana dat:', text: 'Ochrana proti ztrátě integrity a neautorizovanému přístupu.' },
          { label: 'Škálovatelnost:', text: 'Navrženo pro robustní ukládání milionů dokumentů.' }
        ]
      },
      {
        title: 'Archiv',
        description: 'Garantovaná dlouhodobá archivace. Zajistěte soulad s legislativou (eIDAS, zákon o archivnictví) a uchovejte dokumenty čitelné a platné po desítky let.',
        features: [
          { label: 'Legislativní soulad:', text: 'Plná podpora eIDAS, balíčkování (SIP/AIP/DIP) a výpůjček.' },
          { label: 'Dlouhodobá péče:', text: 'Aplikace archivních časových razítek a přerazítkování.' },
          { label: 'Řízená skartace:', text: 'Automatická správa skartačních lhůt a bezpečné mazání dat.' }
        ]
      }
    ]
  },
  'Analytika': {
    layout: 'visual',
    visualType: 'chart',
    title: 'Dashboard',
    description: 'Získejte okamžitý přehled o rizicích a příležitostech. Analyzujte jednoduše velké objemy dat z dokumentů i auditní záznamy pomocí dynamických reportů.',
    features: [
      { label: 'Vizualizace:', text: 'Interaktivní grafy a dashboardy s možností filtrování.' },
      { label: 'Reporting:', text: 'Export přehledů do PDF/CSV pro potřeby managementu či auditu.' },
      { label: 'Customizace:', text: 'Možnost vytvářet vlastní pohledy na provozní data.' }
    ]
  },
  'Migrace': {
    layout: 'visual',
    visualType: 'list',
    title: 'Migration On the Fly',
    description: 'Rozšíření pro bezpečnou změnu úložišť za plného chodu systému. Ideální pro modernizaci infrastruktury bez dopadu na koncové uživatele.',
    features: [
      { label: 'Žádné výpadky:', text: 'Migrace mezi databázemi či hybridními cloudy běží na pozadí.' },
      { label: 'Integrita:', text: 'Transparentní přenos včetně metadat a ověření konzistence.' },
      { label: 'Auditovatelnost:', text: 'Plná kontrola a plánování migračního procesu.' }
    ]
  }
};

export const WHY_US_CARDS = [
  {
    icon: Handshake,
    title: 'Jsme spolehlivý partner',
    description: 'Už od roku 2013 vyvíjíme spolehlivé IT systémy, na které se spoléhají přední české firmy.'
  },
  {
    icon: Headphones,
    title: 'Podpora 24/7',
    description: 'Naším zákazníkům poskytujeme nepřetržitou technickou podporu.'
  },
  {
    icon: Cpu,
    title: 'Moderní technologie',
    description: 'Stavíme na špičkových technologiích Oracle, Red Hat a moderních cloudových platformách.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Je možné systém provozovat mimo cloudové úložiště?',
    answer: 'Ano, náš systém je plně připraven na on-premise nasazení ve vaší infrastruktuře nebo v privátním cloudu podle vašich bezpečnostních požadavků.'
  },
  {
    question: 'Jak je řešeno zabezpečení dokumentů?',
    answer: 'Bezpečnost zajišťujeme šifrováním dat, dvoufaktorovou autentizací, detailním řízením přístupových práv a kompletní auditní stopou všech operací.'
  },
  {
    question: 'Musím si hlídat obnovu časových razítek u dokumentů?',
    answer: 'Ne, systém automaticky sleduje platnost certifikátů a časových razítek a zajišťuje jejich včasnou obnovu (přerazítkování) pro dlouhodobou archivaci.'
  },
  {
    question: 'Co když ztratím přihlašovací údaje?',
    answer: 'Pro obnovu přístupu můžete využít automatizovaný proces resetu hesla nebo kontaktovat vašeho firemního administrátora, případně naši technickou podporu.'
  }
];

export const CONTACT_DETAILS = {
  addressLines: [
    'Melite s.r.o.',
    'Pražákova 1008/69',
    '639 00 Brno – Štýřice'
  ],
  email: 'info@melite.cz',
  phone: '+420 530 515 200'
};