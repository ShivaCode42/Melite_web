import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-6">
              Začněte spravovat vaše dokumenty lépe už dnes!
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
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
            <div className="border border-blue-200 p-8 rounded-sm h-full">
              <h3 className="text-gray-800 font-medium mb-4 text-lg">Address</h3>
              <div className="text-gray-600 space-y-1 text-sm leading-relaxed">
                {CONTACT_DETAILS.addressLines.map((line, index) => (
                  <p key={index} className={index === 0 ? "font-medium text-gray-800 mb-1" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Actions Box */}
          <ScrollReveal delay={400} className="flex-1">
            <div className="border border-blue-200 p-8 rounded-sm flex flex-col justify-center h-full">
              <h3 className="text-blue-400 font-medium mb-6 text-lg text-center md:text-left">
                Kontaktujte nás
              </h3>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="block w-full bg-[#1e6cd9] hover:bg-blue-700 text-white text-center py-3 rounded-sm text-sm font-medium transition-colors"
                >
                  Napsat zprávu
                </a>
                
                <a 
                  href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`}
                  className="block w-full bg-[#aecbf0] hover:bg-blue-300 text-white text-center py-3 rounded-sm text-sm font-medium transition-colors"
                  title={CONTACT_DETAILS.phone}
                >
                  Zavolat
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
