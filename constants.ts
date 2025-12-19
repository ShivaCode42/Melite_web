import { FileText, ShieldAlert, BadgeDollarSign, Scale, Search, ShieldCheck, FileCheck, PenTool, Archive, Handshake, Headphones, Cpu } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Řešení', href: '#reseni' },
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