import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-12 flex items-center min-h-screen">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-in-left">
          <span className="font-mono text-brand-green-dark">Olá, meu nome é</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-dark-text my-3">
            Pedro Henrique Birais
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-brand-green-dark mb-6">
            Arquiteto de Soluções &amp; Líder Técnico em IA e Inovação.
          </h2>
          <p className="text-lg text-medium-text mb-8 max-w-xl leading-relaxed">
            Especialista em transformar desafios complexos em soluções tecnológicas de alto impacto, com foco em Inteligência Artificial, IoT e Indústria 4.0.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Meus Projetos
            </a>
            <a 
              href="https://linkedin.com/in/phbirais" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-brand-green/50 transform hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-brand-green/20 rounded-full transform rotate-6"></div>
            <img 
              src="https://github.com/phbirais.png" 
              alt="Foto de Pedro Henrique Birais"
              className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;