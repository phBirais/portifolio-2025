import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import TestimonialsSection from './components/TestimonialsSection';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#education', label: 'Formação' },
    { href: '#projects', label: 'Projetos' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#articles', label: 'Artigos' },
  ];

  return (
    <div className="bg-light-bg text-dark-text font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-brand-green-dark">
            Portfólio
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-medium-text hover:text-brand-green-dark transition-colors">{link.label}</a>
            ))}
            <a href="#contact" className="bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-green-dark transition-all duration-300">
              Contato
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="text-dark-text focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-medium-text hover:text-brand-green-dark block px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center mt-2 bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-green-dark transition-all duration-300">
                Contato
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="container mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ArticlesSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
