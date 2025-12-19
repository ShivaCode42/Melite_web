import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { Phone } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-[#1e6cd9] relative overflow-hidden">
      {/* Background decoration - simplified to match clean visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
         <div className="absolute inset-0 bg-dot-grid-white opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
              Začněte spravovat vaše dokumenty lépe už dnes!
            </h2>
            <p className="text-blue-50 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed font-light opacity-90">
              Zaujalo vás naše řešení a rádi byste se dozvěděli víc?
              <br />
              Sjednejte si nezávaznou prezentaci šitou na míru vám s jedním z našich specialistů.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Boxes Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Address Box */}
          <ScrollReveal delay={200}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-lg h-full transition-all hover:bg-white/15">
              <h3 className="text-white font-bold text-lg mb-8">Adresa</h3>
              
              <div className="mb-6">
                <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-wider">Hlavní office</h4>
                <div className="text-white space-y-1 text-sm leading-relaxed font-light">
                  {CONTACT_DETAILS.addressLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex items-center text-white">
                <Phone size={16} className="mr-3 opacity-80" />
                <a 
                  href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} 
                  className="text-sm font-bold hover:underline"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Actions Box */}
          <ScrollReveal delay={400}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-lg h-full flex flex-col transition-all hover:bg-white/15">
              <h3 className="text-white font-bold text-lg mb-10">
                Kontaktujte nás
              </h3>
              
              <div className="flex-grow flex flex-col justify-center items-center">
                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="w-full bg-white text-[#1e6cd9] hover:bg-blue-50 text-center py-4 rounded-md text-sm font-bold transition-all shadow-md active:scale-[0.98] mb-4"
                >
                  Napsat zprávu
                </a>
                <p className="text-white/70 text-[10px] md:text-xs text-center font-light">
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