import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Solution } from './components/Solution';
import { Stats } from './components/Stats';
import { Automation } from './components/Automation';
import { Adaptability } from './components/Adaptability';
import { WhyUs } from './components/WhyUs';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { AdminDashboard } from './components/AdminDashboard';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(window.location.hash === '#admin');

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdmin(window.location.hash === '#admin');
      if (window.location.hash === '#admin') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

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
      
      <FAQ />
      <ContactCTA />
      
      {/* Simple Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} MELITE. Všechna práva vyhrazena. 
            <button 
              onClick={() => window.location.hash = 'admin'} 
              className="ml-2 hover:text-blue-500 transition-colors"
            >
              Správa
            </button>
          </div>
        </ScrollReveal>
      </footer>
    </div>
  );
};

export default App;