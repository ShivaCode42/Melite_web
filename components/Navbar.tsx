import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        // Offset for the fixed navbar height
        const offset = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
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
          : 'bg-white/10 backdrop-blur-sm py-2 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[60px]' : 'h-[72px]'}`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span 
                className={`font-bold text-xl tracking-wider cursor-pointer transition-colors duration-300 ${
                  isScrolled ? 'text-[#1a5bb5]' : 'text-white'
                }`} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                MELITE
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-[#1a5bb5]' 
                        : 'text-gray-100 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <a
              href="#kontakt"
              onClick={(e) => handleScrollToSection(e, '#kontakt')}
              className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-all duration-300 shadow-sm ${
                isScrolled
                  ? 'bg-[#1a5bb5] hover:bg-blue-700 text-white'
                  : 'bg-[#1a5bb5] hover:bg-blue-600 text-white'
              }`}
            >
              Kontaktujte nás
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-[#1a5bb5]' : 'text-gray-100 hover:text-white'
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out origin-top ${
          isOpen 
            ? 'opacity-100 scale-y-100 pointer-events-auto' 
            : 'opacity-0 scale-y-0 pointer-events-none'
        } ${isScrolled ? 'bg-white shadow-xl' : 'bg-[#0d1e35]'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isScrolled ? 'text-gray-600 hover:bg-gray-50' : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => handleScrollToSection(e, '#kontakt')}
            className="block w-full text-center text-white bg-[#1a5bb5] hover:bg-blue-600 px-3 py-3 rounded-md text-base font-medium mt-4 transition-colors"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </nav>
  );
};