import React from 'react';

const ArticleCard: React.FC<{ title: string; platform: string; link: string }> = ({ title, platform, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg border border-gray-200/80 hover:border-brand-green transition-all duration-300 group shadow-lg hover:shadow-xl h-full flex flex-col justify-between">
    <div>
      <p className="text-sm font-semibold text-brand-green-dark mb-2">{platform}</p>
      <h3 className="text-xl font-bold text-dark-text mb-4 group-hover:text-brand-green-dark transition-colors duration-300">{title}</h3>
    </div>
    <span className="font-semibold text-brand-green group-hover:underline mt-4">Ler artigo &rarr;</span>
  </a>
);


const ArticlesSection: React.FC = () => {
  return (
    <section id="articles" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Pensando a <span className="text-brand-green-dark">Inovação</span>
        </h2>
        <p className="text-lg text-medium-text max-w-3xl mx-auto">
          Ideias, reflexões e aprendizados que compartilho sobre tecnologia, liderança e o futuro da indústria.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
         <ArticleCard 
          title="INVENTORY AUTOMATION DEVELOPMENT OF COMPUTER VISION IN DRONES"
          platform="Blucher Proceedings"
          link="https://www.proceedings.blucher.com.br/article-details/inventory-automation-development-of-computer-vision-in-drones-39878"
        />
        <ArticleCard 
          title="O que significa saber IA no currículo profissional do futuro?"
          platform="Medium"
          link="https://phbirais.medium.com/o-que-significa-saber-ia-no-curr%C3%ADculo-profissional-do-futuro-abcafe422a2f"
        />
        <ArticleCard 
          title="7 benefícios da Realidade Aumentada na Educação"
          platform="Medium"
          link="https://phbirais.medium.com/7-benef%C3%ADcios-da-realidade-aumentada-na-educa%C3%A7%C3%A3o-4ded4383cca5"
        />
      </div>
    </section>
  );
};

export default ArticlesSection;