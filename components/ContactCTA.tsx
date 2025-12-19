import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { Phone } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="kontakt" className="py-12 md:py-24 bg-[#1e6cd9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
         <div className="absolute inset-0 bg-dot-grid-white opacity-40"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-6 leading-tight">
              Začněte spravovat vaše dokumenty lépe už dnes!
            </h2>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
              Zaujalo vás naše řešení a rádi byste se dozvěděli víc?
              <br className="hidden md:block" />
              Sjednejte si nezávaznou prezentaci šitou na míru vám s jedním z našich specialistů.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Boxes */}
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          
          {/* Address Box */}
          <ScrollReveal delay={200} className="flex-1">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg h-full transition-all hover:bg-white/15">
              <h3 className="text-white font-medium mb-4 text-lg">Adresa</h3>
              <div className="text-blue-50 space-y-1 text-sm leading-relaxed">
                {CONTACT_DETAILS.addressLines.map((line, index) => (
                  <p key={index} className={index === 0 ? "font-semibold text-white mb-2" : "font-light"}>
                    {line}
                  </p>
                ))}
                <div className="pt-4 flex items-center gap-2 text-white">
                  <Phone size={16} className="text-blue-300" />
                  <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="font-semibold hover:text-blue-100 transition-colors">
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Actions Box */}
          <ScrollReveal delay={400} className="flex-1">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg flex flex-col justify-center h-full transition-all hover:bg-white/15">
              <h3 className="text-white font-medium mb-6 text-lg text-center md:text-left">
                Kontaktujte nás
              </h3>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="block w-full bg-white text-[#1e6cd9] hover:bg-blue-50 text-center py-4 rounded-md text-sm font-bold transition-all shadow-lg active:scale-95"
                >
                  Napsat zprávu
                </a>
                
                <p className="text-blue-100 text-xs text-center font-light opacity-60">
                  Na zprávy odpovídáme zpravidla do 24 hodin.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};