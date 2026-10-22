import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { Stats } from './components/Stats';
import { Automation } from './components/Automation';
import { Adaptability } from './components/Adaptability';
import { WhyUs } from './components/WhyUs';
import { PartnerSection } from './components/PartnerSection';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { IndustryPage } from './components/IndustryPage';
import { TelecommunicationsPage } from './components/TelecommunicationsPage';
import { FinancePage } from './components/FinancePage';
import { PublicSectorPage } from './components/PublicSectorPage';
import { INDUSTRY_DETAILS } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Handle browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title based on current path
  useEffect(() => {
    if (currentPath === '/telekomunikace' || currentPath === '/reseni/telekomunikace') {
      document.title = 'Telekomunikace — Archivace smluv, kterou doložíte i po letech | SIESE';
    } else if (currentPath === '/finance' || currentPath === '/reseni/finance') {
      document.title = 'Finance — Finanční dokumenty, u kterých doložíte existenci | SIESE';
    } else if (currentPath === '/statni-sprava' || currentPath === '/reseni/statni-sprava') {
      document.title = 'Státní správa — Dlouhodobé uchovávání úředních dokumentů | SIESE';
    } else if (currentPath.startsWith('/reseni/')) {
      const id = currentPath.replace('/reseni/', '').replace(/\/$/, '');
      const ind = INDUSTRY_DETAILS[id];
      if (ind) {
        document.title = `${ind.name} | SIESE - Správa dokumentů`;
      } else {
        document.title = 'SIESE - Správa dokumentů';
      }
    } else {
      document.title = 'SIESE - Správa dokumentů';
    }
  }, [currentPath]);

  const handleNavigate = (href: string) => {
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        // Small delay to allow home components to mount before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const offset = 72;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const offset = 72;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
      return;
    }

    if (href === '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating to an industry URL (e.g., /telekomunikace or /reseni/finance)
    window.history.pushState({}, '', href);
    setCurrentPath(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matches:
  const isTelekomunikaceRoute = 
    currentPath === '/telekomunikace' || 
    currentPath === '/reseni/telekomunikace' ||
    currentPath === '/telekomunikace/' ||
    currentPath === '/reseni/telekomunikace/';

  const isFinanceRoute = 
    currentPath === '/finance' || 
    currentPath === '/reseni/finance' ||
    currentPath === '/finance/' ||
    currentPath === '/reseni/finance/';

  const isStatniSpravaRoute = 
    currentPath === '/statni-sprava' || 
    currentPath === '/reseni/statni-sprava' ||
    currentPath === '/statni-sprava/' ||
    currentPath === '/reseni/statni-sprava/';

  const industryId = currentPath.startsWith('/reseni/') 
    ? currentPath.replace('/reseni/', '').replace(/\/$/, '') 
    : null;
  const currentIndustry = (industryId && !isTelekomunikaceRoute && !isFinanceRoute && !isStatniSpravaRoute) ? INDUSTRY_DETAILS[industryId] : null;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar onNavigate={handleNavigate} />
      
      {isTelekomunikaceRoute ? (
        <TelecommunicationsPage 
          onNavigateHome={() => handleNavigate('/')} 
          onNavigateToSection={handleNavigate}
        />
      ) : isFinanceRoute ? (
        <FinancePage 
          onNavigateHome={() => handleNavigate('/')} 
          onNavigateToSection={handleNavigate}
        />
      ) : isStatniSpravaRoute ? (
        <PublicSectorPage 
          onNavigateHome={() => handleNavigate('/')} 
          onNavigateToSection={handleNavigate}
        />
      ) : currentIndustry ? (
        <>
          <IndustryPage 
            industry={currentIndustry} 
            onNavigateHome={() => handleNavigate('/')}
            onSelectIndustry={(href) => handleNavigate(href)}
          />
          <ContactCTA />
        </>
      ) : (
        <>
          <Hero />
          <Problems />
          <Solution />
          <Stats />
          <Automation />
          <Adaptability />
          <WhyUs />
          <PartnerSection />
          <FAQ />
          <ContactCTA />
        </>
      )}
    </div>
  );
};

export default App;