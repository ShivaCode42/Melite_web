import React from 'react';
import { 
  Radio, Landmark, Building2, Activity, FlaskConical, Zap, 
  Scale, ShieldCheck, Archive,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface IndustryWidgetCard {
  id: string;
  name: string;
  urlPath: string;
  icon: React.ElementType;
  category: 'obor' | 'oddeleni';
}

export const INDUSTRY_CARDS: IndustryWidgetCard[] = [
  {
    id: 'telekomunikace',
    name: 'Telekomunikace',
    urlPath: '/telekomunikace',
    icon: Radio,
    category: 'obor',
  },
  {
    id: 'finance',
    name: 'Finance a pojišťovnictví',
    urlPath: '/finance',
    icon: Landmark,
    category: 'obor',
  },
  {
    id: 'statni-sprava',
    name: 'Státní správa',
    urlPath: '/statni-sprava',
    icon: Building2,
    category: 'obor',
  },
  {
    id: 'zdravotnictvi',
    name: 'Zdravotnictví',
    urlPath: '/zdravotnictvi',
    icon: Activity,
    category: 'obor',
  },
  {
    id: 'farmacie',
    name: 'Farmacie a vědecký vývoj',
    urlPath: '/farmaie',
    icon: FlaskConical,
    category: 'obor',
  },
  {
    id: 'energetika-utility',
    name: 'Energetika a utility',
    urlPath: '/energetika-utility',
    icon: Zap,
    category: 'obor',
  },
];

export const DEPARTMENT_CARDS: IndustryWidgetCard[] = [
  {
    id: 'pravni-oddeleni',
    name: 'Právní oddělení',
    urlPath: '/pravni-oddeleni',
    icon: Scale,
    category: 'oddeleni',
  },
  {
    id: 'compliance-oddeleni',
    name: 'Compliance oddělení',
    urlPath: '/compliance-oddeleni',
    icon: ShieldCheck,
    category: 'oddeleni',
  },
  {
    id: 'record-management',
    name: 'Record management',
    urlPath: '/record-management',
    icon: Archive,
    category: 'oddeleni',
  },
];

export const ALL_SOLUTION_CARDS: IndustryWidgetCard[] = [
  ...INDUSTRY_CARDS,
  ...DEPARTMENT_CARDS,
];

interface IndustrySolutionsWidgetProps {
  onNavigate?: (href: string) => void;
}

export const IndustrySolutionsWidget: React.FC<IndustrySolutionsWidgetProps> = ({ onNavigate }) => {
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.history.pushState({}, '', href);
      window.location.href = href;
    }
  };

  const renderCard = (card: IndustryWidgetCard, index: number) => {
    const Icon = card.icon;
    return (
      <ScrollReveal key={card.id} delay={index * 50} className="h-full">
        <a
          href={card.urlPath}
          onClick={(e) => handleItemClick(e, card.urlPath)}
          className="bg-white rounded-xl border border-blue-100/90 hover:border-blue-300 p-6 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group block"
        >
          {/* Icon & Title */}
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm mb-4">
              <Icon size={24} strokeWidth={1.8} />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#1a5bb5] transition-colors leading-snug">
              {card.name}
            </h3>
          </div>

          {/* Action Button */}
          <div className="pt-6 mt-6 border-t border-gray-100">
            <div className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white transition-all duration-200 shadow-sm">
              <span>Zjistit více</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      </ScrollReveal>
    );
  };

  return (
    <section id="obory" className="py-16 md:py-20 bg-[#f8fafd] border-y border-blue-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1a5bb5] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} className="text-[#1a5bb5]" />
              <span>Oborová specializace</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
              Řešení pro váš obor
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
              Prohlédněte si, jak SIESE řeší specifické procesní a regulatorní nároky ve vaší oblasti a jednotlivých odděleních.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">
          {/* Podle oboru Group */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2.5 bg-[#1a5bb5] text-white px-4 py-2 rounded-lg shadow-sm">
                  <Building2 size={18} />
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider">
                    Podle oboru
                  </span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-blue-200 via-blue-100 to-transparent flex-1"></div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {INDUSTRY_CARDS.map((card, index) => renderCard(card, index))}
            </div>
          </div>

          {/* Podle oddělení Group */}
          <div className="pt-8 md:pt-10 border-t-2 border-blue-100/90">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2.5 bg-[#1a5bb5] text-white px-4 py-2 rounded-lg shadow-sm">
                  <Scale size={18} />
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider">
                    Podle oddělení
                  </span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-blue-200 via-blue-100 to-transparent flex-1"></div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {DEPARTMENT_CARDS.map((card, index) => renderCard(card, index))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
