import React from 'react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-wider">MELITE</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-100 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="bg-[#2d76d8] hover:bg-blue-600 text-white px-5 py-2 rounded-sm text-sm font-medium transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};