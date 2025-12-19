import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Stats />
      
      {/* New sections added based on request */}
      <Automation />
      <Adaptability />
      <WhyUs />
      
      {/* Partner Section added above FAQ */}
      <PartnerSection />
      
      <FAQ />
      <ContactCTA />
    </div>
  );
};

export default App;