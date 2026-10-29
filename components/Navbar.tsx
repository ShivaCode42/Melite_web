import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SOLUTION_INDUSTRIES, SOLUTION_DEPARTMENTS } from '../constants';

interface NavbarProps {
  onNavigate?: (href: string) => void;
  isSubpage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, isSubpage = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const isSolid = isScrolled || isSubpage;

  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setIsSolutionsOpen(false);

    if (onNavigate) {
      onNavigate(href);
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-1 border-b border-gray-100' 
          : isSubpage
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2 border-b border-gray-100'
          : 'bg-white/10 backdrop-blur-sm py-2 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[60px]' : isSubpage ? 'h-[64px]' : 'h-[72px]'}`}>
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span 
                className={`font-bold text-xl tracking-wider cursor-pointer transition-colors duration-300 flex items-center gap-1 ${
                  isSolid ? 'text-[#1a5bb5]' : 'text-white'
                }`} 
                onClick={(e) => {
                  if (onNavigate) {
                    onNavigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                MELITE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                {NAV_LINKS.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="relative" ref={solutionsRef}>
                        <button
                          type="button"
                          onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                          className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md cursor-pointer ${
                            isSolid 
                              ? isSolutionsOpen
                                ? 'text-[#1a5bb5] bg-blue-50'
                                : 'text-gray-700 hover:text-[#1a5bb5] hover:bg-gray-50' 
                              : isSolutionsOpen
                              ? 'text-white bg-white/20'
                              : 'text-gray-100 hover:text-white hover:bg-white/10'
                          }`}
                          aria-expanded={isSolutionsOpen}
                          aria-haspopup="true"
                        >
                          <span>{link.name}</span>
                          <ChevronDown 
                            size={15} 
                            className={`transition-transform duration-200 ${
                              isSolutionsOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>

                        {/* Dropdown Menu */}
                        <div 
                          className={`absolute top-full left-0 mt-2 w-[620px] bg-white rounded-2xl shadow-2xl border border-blue-100/90 py-3 px-3 transition-all duration-200 transform origin-top-left z-50 max-h-[85vh] overflow-y-auto ${
                            isSolutionsOpen 
                              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                          }`}
                          style={{
                            boxShadow: '0 20px 40px -8px rgba(13, 59, 130, 0.16), 0 0 0 1px rgba(219, 234, 254, 0.8)'
                          }}
                        >
                          <div className="grid grid-cols-2 divide-x divide-gray-100">
                            {/* Sloupec vlevo: Podle oboru */}
                            <div className="pr-3">
                              <div className="px-3 pt-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                Podle oboru
                              </div>

                              <div className="space-y-0.5">
                                {SOLUTION_INDUSTRIES.map((industry) => {
                                  const Icon = industry.icon;
                                  return (
                                    <a
                                      key={industry.id}
                                      href={industry.href}
                                      onClick={(e) => handleLinkClick(e, industry.href)}
                                      className="group flex items-center justify-between p-2 rounded-xl transition-all duration-150 hover:bg-blue-50/80 cursor-pointer"
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-xs">
                                          <Icon size={16} strokeWidth={2} />
                                        </div>
                                        <div className="min-w-0">
                                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1a5bb5] transition-colors block truncate">
                                            {industry.name}
                                          </span>
                                          <span className="text-[11px] text-gray-500 block truncate font-light">
                                            {industry.description}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight 
                                        size={14} 
                                        className="text-gray-300 group-hover:text-[#1a5bb5] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1.5" 
                                      />
                                    </a>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Sloupec vpravo: Podle oddělení */}
                            <div className="pl-3">
                              <div className="px-3 pt-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                Podle oddělení
                              </div>

                              <div className="space-y-0.5">
                                {SOLUTION_DEPARTMENTS.map((dept) => {
                                  const Icon = dept.icon;
                                  return (
                                    <a
                                      key={dept.id}
                                      href={dept.href}
                                      onClick={(e) => handleLinkClick(e, dept.href)}
                                      className="group flex items-center justify-between p-2 rounded-xl transition-all duration-150 hover:bg-blue-50/80 cursor-pointer"
                                    >
                                      <div className="flex items-center gap-2.5 min-w-0">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1a5bb5] group-hover:bg-[#1a5bb5] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-xs">
                                          <Icon size={16} strokeWidth={2} />
                                        </div>
                                        <div className="min-w-0">
                                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#1a5bb5] transition-colors block truncate">
                                            {dept.name}
                                          </span>
                                          <span className="text-[11px] text-gray-500 block truncate font-light">
                                            {dept.description}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight 
                                        size={14} 
                                        className="text-gray-300 group-hover:text-[#1a5bb5] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1.5" 
                                      />
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                        isSolid 
                          ? 'text-gray-600 hover:text-[#1a5bb5] hover:bg-gray-50' 
                          : 'text-gray-100 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#kontakt"
              onClick={(e) => handleLinkClick(e, '#kontakt')}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm ${
                isSolid
                  ? 'bg-[#1a5bb5] hover:bg-blue-700 text-white'
                  : 'bg-[#1a5bb5] hover:bg-blue-600 text-white'
              }`}
            >
              Kontaktujte nás
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                isSolid ? 'text-gray-600 hover:text-[#1a5bb5]' : 'text-gray-100 hover:text-white'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out origin-top ${
          isOpen 
            ? 'opacity-100 scale-y-100 pointer-events-auto' 
            : 'opacity-0 scale-y-0 pointer-events-none'
        } ${isSolid ? 'bg-white shadow-xl' : 'bg-[#0d1e35]'}`}
      >
        <div className="px-3 pt-3 pb-4 space-y-1 sm:px-4 border-t border-gray-100/20 max-h-[85vh] overflow-y-auto">
          
          {/* Řešení mobile item with expandable list */}
          <div>
            <button
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                isSolid ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="font-semibold">Řešení</span>
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-200 ${
                  isMobileSolutionsOpen ? 'rotate-180 text-[#1a5bb5]' : ''
                }`} 
              />
            </button>

            {isMobileSolutionsOpen && (
              <div className="pl-3 pr-2 py-2 space-y-1 mt-1 border-l-2 border-[#1a5bb5]/50 ml-3">
                <div className="px-2 pb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Podle oboru:
                </div>
                {SOLUTION_INDUSTRIES.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <a
                      key={industry.id}
                      href={industry.href}
                      onClick={(e) => {
                        setIsMobileSolutionsOpen(false);
                        handleLinkClick(e, industry.href);
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isSolid
                          ? 'text-gray-800 hover:text-[#1a5bb5] hover:bg-blue-50'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="font-medium">{industry.name}</span>
                    </a>
                  );
                })}

                <div className="px-2 pt-2.5 pb-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-t border-gray-200/40 mt-2">
                  Podle oddělení:
                </div>
                {SOLUTION_DEPARTMENTS.map((dept) => {
                  const Icon = dept.icon;
                  return (
                    <a
                      key={dept.id}
                      href={dept.href}
                      onClick={(e) => {
                        setIsMobileSolutionsOpen(false);
                        handleLinkClick(e, dept.href);
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isSolid
                          ? 'text-gray-800 hover:text-[#1a5bb5] hover:bg-blue-50'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="w-7 h-7 rounded-md bg-blue-100 text-[#1a5bb5] flex items-center justify-center flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="font-medium">{dept.name}</span>
                    </a>
                  );
                })}

                <div className="pt-2 mt-1 border-t border-gray-200/40">
                  <a
                    href="#reseni"
                    onClick={(e) => {
                      setIsMobileSolutionsOpen(false);
                      handleLinkClick(e, '#reseni');
                    }}
                    className={`block px-3 py-1.5 text-xs font-semibold ${
                      isSolid ? 'text-[#1a5bb5]' : 'text-blue-300'
                    }`}
                  >
                    Přehled platformy SIESE &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
          {NAV_LINKS.filter((link) => !link.hasDropdown).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isSolid ? 'text-gray-600 hover:bg-gray-50' : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#kontakt"
            onClick={(e) => handleLinkClick(e, '#kontakt')}
            className="block w-full text-center text-white bg-[#1a5bb5] hover:bg-blue-600 px-3 py-3 rounded-md text-base font-medium mt-4 transition-colors shadow-sm"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </nav>
  );
};