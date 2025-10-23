import React from 'react';

const educationHistory = [
  {
    degree: 'Doutorando em Sistemas Inteligentes',
    institution: 'Universidade Federal do ABC (UFABC)',
    period: '2024 - Presente',
  },
  {
    degree: 'MBA em Gestão de Projetos',
    institution: 'Fundação Getulio Vargas (FGV)',
    period: '2024 - 2026',
  },
  {
    degree: 'Mestrado em Engenharia Robótica',
    institution: 'Universidade Federal do ABC (UFABC)',
    period: '2020 - 2023',
  },
  {
    degree: 'Bacharel em Engenharia Robótica',
    institution: 'Universidade Federal do ABC (UFABC)',
    period: '2013 - 2018',
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Formação <span className="text-brand-green-dark">Acadêmica</span>
        </h2>
        <p className="text-lg text-medium-text max-w-3xl mx-auto">
          Minha jornada de aprendizado contínuo, construindo uma base sólida em tecnologia, engenharia e gestão.
        </p>
      </div>
      
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-3 top-0 h-full w-0.5 bg-brand-green/30" aria-hidden="true"></div>
        
        <div className="relative flex flex-col gap-12">
          {educationHistory.map((edu, index) => (
            <div key={index} className="pl-12 relative animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="absolute left-0 top-1 w-6 h-6 bg-brand-green rounded-full border-4 border-light-bg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-sm text-gray-500 mb-1 font-mono">{edu.period}</p>
                <h3 className="text-xl font-bold text-dark-text mb-1">{edu.degree}</h3>
                <p className="text-medium-text font-semibold">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;