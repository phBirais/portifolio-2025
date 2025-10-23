import React from 'react';

const InfoCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200/80 transform hover:scale-105 hover:border-brand-green transition-all duration-300 shadow-lg">
    <h3 className="text-xl font-bold text-brand-green-dark mb-2">{title}</h3>
    <p className="text-medium-text">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Sobre <span className="text-brand-green-dark">Mim</span>
        </h2>
        <p className="text-lg text-medium-text max-w-3xl mx-auto">
          Apaixonado por resolver problemas complexos com tecnologia e inovação.
        </p>
      </div>
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-4">
          <p className="text-medium-text leading-relaxed">
            Com mais de uma década de experiência em desenvolvimento de produtos e projetos, minha jornada é movida pela paixão de resolver problemas complexos com tecnologia. No Distrito Tecnológico do SENAI-SP, lidero projetos de inovação, focando na digitalização industrial através de IA, IoT e sistemas conectados.
          </p>
           <blockquote className="mt-6 p-4 border-l-4 border-brand-green bg-green-50 rounded-r-lg">
            <h4 className="font-bold text-lg text-dark-text mb-2">Minha Filosofia de Trabalho</h4>
            <p className="text-medium-text italic">
              "Acredito que a melhor inovação nasce da colaboração entre a expertise técnica e uma visão clara de futuro. Meu foco é traduzir a complexidade tecnológica em soluções de negócio com impacto mensurável, sempre colocando o usuário no centro da estratégia."
            </p>
          </blockquote>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <InfoCard
            title="Arquiteto de Soluções"
            description="Desenhando sistemas escaláveis e resilientes que integram IA e IoT para a Indústria 4.0."
          />
          <InfoCard
            title="Gestão Técnica"
            description="Liderando equipes multidisciplinares para entregar projetos de alto impacto, do conceito à produção."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;