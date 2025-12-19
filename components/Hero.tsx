
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const FORBIDDEN_DOMAINS = [
  'gmail.com',
  'seznam.cz',
  'email.cz',
  'post.cz',
  'tiscali.cz',
  'atlas.cz',
  'icloud.com',
  'outlook.com',
  'hotmail.com',
  'yahoo.com',
  'centrum.cz',
  'volny.cz',
  'zoho.com',
  'me.com'
];

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);
    
    if (!email || !email.includes('@')) {
      alert('Prosím zadejte platný e-mail.');
      return;
    }

    const domain = email.split('@')[1].toLowerCase().trim();
    
    if (FORBIDDEN_DOMAINS.includes(domain)) {
      setShowError(true);
      return;
    }

    setIsDownloading(true);

    // Simulate a short delay for UX
    setTimeout(() => {
      // In a real app, this would be a link to a static PDF file
      // For this demo, we create a simple blob representing the brochure
      const brochureContent = `
        SIESE - Chytrá evidence a správa dokumentů
        
        Evidujte veškeré elektronické dokumenty vaší organizace na jednom místě 
        a automatizujte jejich správu během celého jejich životního cyklu.
        
        Problémy, které řešíme:
        - Chaos v evidenci
        - Hlídání termínů
        - Legislativní a auditní rizika
        - Duplicitní záznamy
        - Chybějící časová razítka
        
        Kontakt: info@melite.cz | www.melite.cz
      `;
      
      const blob = new Blob([brochureContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'SIESE_Brozura.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      setEmail('');
      setShowError(false);
      alert('Brožura byla úspěšně stažena.');
    }, 800);
  };

  return (
    <div className="relative bg-gradient-to-br from-[#1e6cd9] to-[#004e9a] pt-32 pb-20 md:pt-48 md:pb-40 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* The dot grid pattern (white variant for dark background) */}
         <div className="absolute inset-0 bg-dot-grid-white opacity-40"></div>
         
         {/* Abstract circles for gradient texture */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl"></div>
         </div>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-relaxed">
            Komplexní cloudová platforma pro správu dokumentů
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={200}>
          <p className="text-blue-100 text-sm md:text-base mb-10 max-w-2xl mx-auto font-light">
            Schvalujte, podepisujte a archivujte všechny dokumenty na jednom místě.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={400}>
          <form onSubmit={handleDownload} className="flex flex-col sm:flex-row justify-center items-center gap-0 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (showError) setShowError(false);
              }}
              placeholder="váš pracovní email"
              className={`w-full sm:w-64 px-4 py-4 text-gray-900 bg-white placeholder-gray-400 focus:outline-none rounded-t-sm sm:rounded-l-sm sm:rounded-t-none text-sm transition-all focus:ring-2 ${showError ? 'ring-2 ring-red-400' : 'focus:ring-blue-300'}`}
            />
            <button 
              type="submit"
              disabled={isDownloading}
              className={`w-full sm:w-auto px-6 py-4 bg-[#0d1e35] text-white text-sm font-medium hover:bg-gray-900 transition-all rounded-b-sm sm:rounded-r-sm sm:rounded-b-none whitespace-nowrap flex items-center justify-center min-w-[160px] ${isDownloading ? 'opacity-75 cursor-wait' : ''}`}
            >
              {isDownloading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Stahování...
                </span>
              ) : 'Stáhnout brožuru'}
            </button>
          </form>
          
          <p className="mt-4 text-[10px] md:text-xs text-blue-100/60 font-light">
            Odesláním formuláře souhlasíte se zpracováním osobních údajů.
          </p>

          {showError && (
            <p className="mt-2 text-xs text-red-300 font-medium animate-pulse">
              Zadejte prosím svůj firemní e-mail pro stažení brožury.
            </p>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
};
