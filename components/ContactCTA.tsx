
import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const ContactCTA: React.FC = () => {
  return (
    <section id="kontakt" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#1e6cd9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
         <div className="absolute inset-0 bg-dot-grid-white opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Začněte spravovat vaše dokumenty lépe už dnes!
            </h2>
            <div className="text-blue-50 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light opacity-90 space-y-1">
              <p>Zaujalo vás naše řešení a rádi byste se dozvěděli víc?</p>
              <p>Sjednejte si nezávaznou prezentaci šitou na míru vám s jedním z našich specialistů.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Boxes Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-32">
          
          {/* Address Box */}
          <ScrollReveal delay={200} className="h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-xl h-full transition-all hover:bg-white/10 flex flex-col">
              <h3 className="text-white font-bold text-2xl mb-12">Adresa</h3>
              
              <div className="flex-grow">
                <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-[0.2em] opacity-80">Hlavní office</h4>
                <div className="text-white space-y-2 text-lg leading-relaxed font-normal">
                  {CONTACT_DETAILS.addressLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Actions Box */}
          <ScrollReveal delay={400} className="h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-xl h-full flex flex-col transition-all hover:bg-white/10">
              <h3 className="text-white font-bold text-2xl mb-16 leading-tight">
                Kontaktujte nás na mailu <br />
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="underline hover:text-blue-100 transition-colors">{CONTACT_DETAILS.email}</a> nebo 👇
              </h3>
              
              <div className="flex-grow flex flex-col justify-center items-center">
                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="w-full max-w-sm bg-white text-[#1e6cd9] hover:bg-blue-50 text-center py-5 rounded-xl text-lg font-bold transition-all shadow-lg active:scale-[0.98] mb-8"
                >
                  Napsat zprávu
                </a>
                <p className="text-white/70 text-sm text-center font-normal">
                  Na zprávy odpovídáme zpravidla do 24 hodin.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer/Copyright Section matching the image line */}
        <ScrollReveal delay={500}>
          <div className="pt-12 border-t border-white/10 text-center text-white/50 text-[11px] md:text-xs tracking-tight">
            &copy; 2026 MELITE. Všechna práva vyloučena.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
