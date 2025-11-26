import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if it's just a hash link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-wider cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                MELITE
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
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
              onClick={(e) => handleScroll(e, '#kontakt')}
              className="bg-[#1a5bb5] hover:bg-blue-600 text-white px-5 py-2 rounded-sm text-sm font-medium transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1e35] border-b border-white/10 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => handleScroll(e, '#kontakt')}
              className="block w-full text-left text-white bg-[#1a5bb5] hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium mt-4 transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};