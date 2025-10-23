import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../types';

const projects: Project[] = [
  {
    name: "Hustly Education",
    description: "Plataforma de educação generativa que utiliza IA como copiloto de ensino para estudantes, otimizando o aprendizado.",
    tech: ["React", "Supabase", "IA"],
    link: "https://hustly.tech/",
    imageUrl: "https://via.placeholder.com/500x300.png/047857/FFFFFF?text=Hustly",
    challenge: "A educação tradicional luta para oferecer caminhos de aprendizado personalizados em escala. Estudantes se sentem perdidos e desengajados.",
    myRole: "Como co-fundador e arquiteto de soluções, fui responsável por desenhar a arquitetura da plataforma, desenvolver o MVP e integrar os modelos de IA generativa.",
    solution: "Desenvolvemos uma plataforma SaaS onde a IA atua como um tutor pessoal, criando trilhas de conteúdo dinâmicas, gerando quizzes e respondendo dúvidas em tempo real.",
    impact: "Aumento de 40% no engajamento dos alunos em projetos piloto. Redução do tempo necessário para domínio de um tópico em 25%."
  },
  {
    name: "Express AI",
    description: "Um microSaaS que utiliza IA para ensinar e avaliar os usuários a dominar a arte da comunicação.",
    tech: ["Google Cloud", "React", "FastAPI", "Gemini"],
    link: "https://expressai-v1-649614933205.us-west1.run.app/",
    imageUrl: "/images/express-ai.png",
    challenge: "Muitos profissionais têm dificuldade em comunicar suas ideias de forma clara e impactante, perdendo oportunidades de carreira.",
    myRole: "Desenvolvi o produto de ponta a ponta, desde a ideação e arquitetura na GCP até a implementação do frontend e backend, integrando o Gemini para análise de fala.",
    solution: "Criei uma aplicação que grava a fala do usuário, transcreve e utiliza IA para fornecer feedback instantâneo sobre clareza, ritmo, uso de vícios de linguagem e poder de persuasão.",
    impact: "Usuários reportaram um aumento de 30% na confiança em apresentações após duas semanas de uso."
  },
  {
    name: "Smart Factory SENAI-SP",
    description: "Liderança técnica de mais de 15 projetos de tecnologia aplicada a industria somando + de 5 Milhões em recursos",
    tech: ["IA", "Eletrônica", "Software", "Automação"],
    link: "https://www.portaldaindustria.com.br/canais/plataforma-inovacao-para-industria/categoria/smart-factory/",
    imageUrl: "https://via.placeholder.com/500x300.png/047857/FFFFFF?text=Smart+Factory",
    challenge: "A indústria brasileira enfrenta o desafio de se modernizar para competir globalmente, mas carece de soluções acessíveis e integradas de Indústria 4.0.",
    myRole: "Como líder técnico e arquiteto de soluções, coordenei equipes multidisciplinares para desenvolver e implantar soluções de IA, IoT e robótica em ambientes de manufatura.",
    solution: "Entregamos mais de 15 projetos, incluindo sistemas de visão computacional para controle de qualidade, plataformas de IoT para monitoramento de chão de fábrica e robôs autônomos.",
    impact: "Portfólio de projetos de R$ 5 milhões, resultando em melhorias de eficiência de até 40% para as empresas parceiras."
  },
  {
    name: "Craftbox Code",
    description: "Um kit para ensinar lógica e programação para crianças utilizando realidade aumentada.",
    tech: ["Unity", "C#", "ARKit", "ARCore"],
    link: "https://craftbox.digital/",
    imageUrl: "https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Craftbox",
    challenge: "Despertar o interesse de crianças pela programação de forma lúdica e tangível, superando a barreira de abstração dos conceitos de lógica.",
    myRole: "Atuei como desenvolvedor principal, responsável pela criação da experiência em Realidade Aumentada com Unity e C#, integrando os marcadores físicos com os blocos de lógica virtuais.",
    solution: "Desenvolvemos um kit físico com blocos que, ao serem visualizados pela câmera do celular ou tablet, se transformam em comandos de programação em um ambiente 3D interativo.",
    impact: "O projeto foi validado em workshops com crianças, apresentando um aumento de 80% no engajamento em atividades de lógica em comparação com métodos tradicionais."
  },
  {
    name: "UFABC Next",
    description: "Plataforma que apoia os alunos da UFABC com avaliações de professores, estatísticas e planejamento de matrícula.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    link: "https://ufabcnext.com/",
    imageUrl: "/images/ufabc-next.png",
    challenge: "Os alunos da UFABC enfrentavam grande dificuldade em planejar suas matrículas e acompanhar o progresso acadêmico devido à complexidade da estrutura curricular da universidade.",
    myRole: "Como um dos criadores e mantenedores do projeto, fui responsável pelo desenvolvimento do frontend com React e Next.js, e pela modelagem do banco de dados PostgreSQL.",
    solution: "Criamos uma plataforma open-source que centraliza o histórico do aluno, permite simular matrículas, fornece estatísticas de desempenho e avaliações de disciplinas pela comunidade.",
    impact: "Tornou-se a principal ferramenta de planejamento para mais de 10.000 alunos, reduzindo significativamente o estresse e o tempo gasto no processo de matrícula."
  },
  {
    name: "Tamandutech",
    description: "Criação e liderança da equipe de robótica de competição da UFABC com mais de 60 integrantes.",
    tech: ["Robótica", "C++", "Python", "Hardware"],
    link: "https://www.instagram.com/tamandutech/",
    imageUrl: "https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Tamandutech",
    challenge: "A UFABC carecia de uma equipe de robótica de competição consolidada que pudesse representar a universidade em torneios e servir como um polo de desenvolvimento prático.",
    myRole: "Fui um dos fundadores e líder da equipe por mais de 5 anos, sendo responsável pela gestão de projetos, captação de recursos, e mentoria técnica das áreas de software e eletrônica.",
    solution: "Estruturamos a equipe do zero, definindo processos de gestão, criando sub-equipes (mecânica, eletrônica, software) e desenvolvendo robôs para diversas competições, como a RoboCup.",
    impact: "Consolidamos uma equipe com mais de 60 membros, conquistamos múltiplos prêmios em competições nacionais e estabelecemos parcerias que garantiram a sustentabilidade do projeto."
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Projetos em <span className="text-brand-green-dark">Destaque</span>
          </h2>
          <p className="text-lg text-medium-text max-w-3xl mx-auto">
            Soluções que desenvolvi e liderei, aplicando tecnologia para resolver desafios reais da indústria e do mercado.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} onDetailsClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default ProjectsSection;