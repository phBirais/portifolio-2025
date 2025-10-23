document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    pt: {
      pageTitle: "Pedro Henrique Birais - Portfólio",
      navLogo: "Portfólio",
      navHome: "Início",
      navAbout: "Sobre",
      navEducation: "Formação",
      navProjects: "Projetos",
      navTestimonials: "Depoimentos",
      navArticles: "Artigos",
      navContact: "Contato",
      navHomeMobile: "Início",
      navAboutMobile: "Sobre",
      navEducationMobile: "Formação",
      navProjectsMobile: "Projetos",
      navTestimonialsMobile: "Depoimentos",
      navArticlesMobile: "Artigos",
      navContactMobile: "Contato",
      heroName: "Pedro Henrique Birais",
      heroTitle: "Construindo o futuro com tecnologia e propósito.",
      heroSubtitle: "Especialista em transformar desafios complexos em soluções tecnológicas de alto impacto, com foco em Inteligência Artificial, IoT e Indústria 4.0.",
      heroBtnProjects: "Meus Projetos",
      heroBtnLinkedin: "LinkedIn",
      aboutTitle: "Sobre Mim",
      aboutSubtitle: "Apaixonado por resolver problemas complexos com tecnologia e inovação.",
      aboutParagraph: "Com mais de uma década de experiência em desenvolvimento de produtos e projetos, minha jornada é movida pela paixão de resolver problemas complexos com tecnologia. No Distrito Tecnológico do SENAI-SP, lidero projetos de inovação, focando na digitalização industrial através de IA, IoT e sistemas conectados.",
      aboutPhilosophyTitle: "Minha Filosofia de Trabalho",
      aboutPhilosophyText: "\"Acredito que a melhor inovação nasce da colaboração entre a expertise técnica e uma visão clara de futuro. Meu foco é traduzir a complexidade tecnológica em soluções de negócio com impacto mensurável, sempre colocando o usuário no centro da estratégia.\"",
      aboutRole1Title: "Arquiteto de Soluções",
      aboutRole1Desc: "Desenhando sistemas escaláveis e resilientes que integram IA e IoT para a Indústria 4.0.",
      aboutRole2Title: "Gestão Técnica",
      aboutRole2Desc: "Liderando equipes multidisciplinares para entregar projetos de alto impacto, do conceito à produção.",
      educationTitle: "Formação Acadêmica",
      projectsTitle: "Projetos em Destaque",
      projectsSubtitle: "Soluções que desenvolvi e liderei, aplicando tecnologia para resolver desafios reais da indústria e do mercado.",
      testimonialsTitle: "Depoimentos",
      articlesTitle: "Artigos & Conteúdo",
      articlesSubtitle: "Ideias que movem o futuro.",
      contactTitle: "Vamos Colaborar?",
      contactSubtitle: "Estou sempre aberto a novas oportunidades e parcerias inovadoras. Vamos conversar sobre como podemos criar o futuro juntos.",
      footerSignature: "Transformando ideias em soluções — com código, dados e visão.",
      footerCopyright: "© 2024 Pedro Henrique Birais. Todos os direitos reservados.",
      projectBtnDetails: "Ver Detalhes",
      modalChallenge: "O Desafio",
      modalRole: "Minha Atuação",
      modalSolution: "A Solução",
      modalImpact: "Resultados e Impacto",
    },
    en: {
      pageTitle: "Pedro Henrique Birais - Portfolio",
      navLogo: "Portfolio",
      navHome: "Home",
      navAbout: "About",
      navEducation: "Education",
      navProjects: "Projects",
      navTestimonials: "Testimonials",
      navArticles: "Articles",
      navContact: "Contact",
      navHomeMobile: "Home",
      navAboutMobile: "About",
      navEducationMobile: "Education",
      navProjectsMobile: "Projects",
      navTestimonialsMobile: "Testimonials",
      navArticlesMobile: "Articles",
      navContactMobile: "Contact",
      heroName: "Pedro Henrique Birais",
      heroTitle: "Building the future with technology and purpose.",
      heroSubtitle: "Specialist in transforming complex challenges into high-impact technological solutions, focusing on Artificial Intelligence, IoT, and Industry 4.0.",
      heroBtnProjects: "My Projects",
      heroBtnLinkedin: "LinkedIn",
      aboutTitle: "About Me",
      aboutSubtitle: "Passionate about solving complex problems with technology and innovation.",
      aboutParagraph: "With over a decade of experience in product and project development, my journey is driven by a passion for solving complex problems with technology. At the SENAI-SP Technology District, I lead innovation projects, focusing on industrial digitalization through AI, IoT, and connected systems.",
      aboutPhilosophyTitle: "My Work Philosophy",
      aboutPhilosophyText: "\"I believe the best innovation stems from the collaboration between technical expertise and a clear vision for the future. My focus is to translate technological complexity into business solutions with measurable impact, always placing the user at the center of the strategy.\"",
      aboutRole1Title: "Solutions Architect",
      aboutRole1Desc: "Designing scalable and resilient systems that integrate AI and IoT for Industry 4.0.",
      aboutRole2Title: "Technical Management",
      aboutRole2Desc: "Leading multidisciplinary teams to deliver high-impact projects, from concept to production.",
      educationTitle: "Academic Background",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "Solutions I have developed and led, applying technology to solve real challenges in industry and the market.",
      testimonialsTitle: "Testimonials",
      articlesTitle: "Articles & Content",
      articlesSubtitle: "Ideas that move the future.",
      contactTitle: "Let's Collaborate?",
      contactSubtitle: "I am always open to new opportunities and innovative partnerships. Let's talk about how we can create the future together.",
      footerSignature: "Transforming ideas into solutions — with code, data, and vision.",
      footerCopyright: "© 2024 Pedro Henrique Birais. All rights reserved.",
      projectBtnDetails: "View Details",
      modalChallenge: "The Challenge",
      modalRole: "My Role",
      modalSolution: "The Solution",
      modalImpact: "Results and Impact",
    }
  };

  const educationData = [
     {
        period: { pt: "2024 - presente", en: "2024 - present" },
        title: { pt: "Doutorando em Sistemas Inteligentes", en: "PhD in Intelligent Systems" },
        institution: "Universidade Federal do ABC (UFABC)"
     },
     {
        period: { pt: "2024 - 2026", en: "2024 - 2026" },
        title: { pt: "MBA em Gestão de Projetos", en: "MBA in Project Management" },
        institution: "Fundação Getúlio Vargas (FGV)"
     },
     {
        period: { pt: "2020 - 2023", en: "2020 - 2023" },
        title: { pt: "Mestrado em Engenharia Robótica", en: "Master's in Robotic Engineering" },
        institution: "Universidade Federal do ABC (UFABC)"
     },
     {
        period: { pt: "2013 - 2018", en: "2013 - 2018" },
        title: { pt: "Bacharel em Engenharia Robótica", en: "Bachelor's in Robotic Engineering" },
        institution: "Universidade Federal do ABC (UFABC)"
     }
  ];

  const projectsData = [
    {
        id: 'hustly',
        title: "Hustly Education",
        description: { 
            pt: "Plataforma de educação generativa que utiliza IA como copiloto de ensino para estudantes, otimizando o aprendizado.",
            en: "Generative education platform that uses AI as a teaching co-pilot for students, optimizing learning."
        },
        tags: ["React", "Supabase", "IA"],
        link: "https://hustly.tech/",
        challenge: {
            pt: "Criar uma experiência de aprendizado personalizada e escalável que pudesse se adaptar ao ritmo de cada estudante, superando as limitações do modelo educacional tradicional.",
            en: "To create a personalized and scalable learning experience that could adapt to each student's pace, overcoming the limitations of the traditional educational model."
        },
        myRole: {
            pt: "Como cofundador e CTO, liderei o desenvolvimento do produto desde a concepção, definindo a arquitetura tecnológica baseada em IA generativa e gerenciando o ciclo de vida do software.",
            en: "As co-founder and CTO, I led the product development from conception, defining the technological architecture based on generative AI and managing the software lifecycle."
        },
        solution: {
            pt: "Desenvolvemos uma plataforma SaaS com uma interface intuitiva onde a IA atua como um tutor, gerando conteúdo, respondendo perguntas e criando trilhas de conhecimento customizadas.",
            en: "We developed a SaaS platform with an intuitive interface where AI acts as a tutor, generating content, answering questions, and creating customized knowledge paths."
        },
        impact: {
            pt: "A plataforma demonstrou um aumento de 40% no engajamento dos alunos em projetos piloto e uma redução no tempo necessário para assimilar conceitos complexos.",
            en: "The platform demonstrated a 40% increase in student engagement in pilot projects and a reduction in the time needed to assimilate complex concepts."
        }
    },
    {
        id: 'express-ai',
        title: "Express AI",
        description: { 
            pt: "Um microSaaS que utiliza IA para ensinar e avaliar os usuários a dominar a arte da comunicação.",
            en: "A microSaaS that uses AI to teach and evaluate users to master the art of communication."
        },
        tags: ["Google Cloud", "React", "FastAPI", "Gemini"],
        link: "https://expressai-v1-649614933205.us-west1.run.app/",
        challenge: {
            pt: "Oferecer feedback instantâneo e objetivo sobre habilidades de comunicação, uma área tradicionalmente subjetiva e difícil de escalar para treinamento.",
            en: "To provide instant and objective feedback on communication skills, an area that is traditionally subjective and difficult to scale for training."
        },
        myRole: {
            pt: "Arquitetei e desenvolvi a solução de ponta a ponta, integrando a API do Gemini para análise de vídeo e áudio, e construindo a infraestrutura na Google Cloud.",
            en: "I architected and developed the end-to-end solution, integrating the Gemini API for video and audio analysis, and building the infrastructure on Google Cloud."
        },
        solution: {
            pt: "A plataforma permite que os usuários gravem vídeos de si mesmos, recebendo em segundos uma análise detalhada sobre clareza, tom de voz, linguagem corporal e uso de palavras.",
            en: "The platform allows users to record videos of themselves, receiving a detailed analysis of clarity, tone of voice, body language, and word usage within seconds."
        },
        impact: {
            pt: "Utilizado por profissionais para se prepararem para apresentações e entrevistas, com usuários relatando um aumento de 75% na confiança após o uso da ferramenta.",
            en: "Used by professionals to prepare for presentations and interviews, with users reporting a 75% increase in confidence after using the tool."
        }
    },
    {
        id: 'smart-factory',
        title: "Smart Factory SENAI-SP",
        description: { 
            pt: "Liderança técnica de mais de 15 projetos de tecnologia aplicada à indústria somando + de 5 Milhões em recursos.",
            en: "Technical leadership of over 15 industry-applied technology projects totaling over 5 Million in resources."
        },
        tags: ["IA", "Eletrônica", "Software", "Automação"],
        link: "https://www.portaldaindustria.com.br/canais/plataforma-inovacao-para-industria/categoria/smart-factory/",
        challenge: {
            pt: "Acelerar a adoção de tecnologias da Indústria 4.0 em pequenas e médias empresas, superando barreiras de custo, conhecimento técnico e integração de sistemas legados.",
            en: "To accelerate the adoption of Industry 4.0 technologies in small and medium-sized enterprises, overcoming barriers of cost, technical knowledge, and legacy system integration."
        },
        myRole: {
            pt: "Como Líder Técnico, fui responsável por desenhar as arquiteturas das soluções, coordenar equipes multidisciplinares e garantir a entrega de projetos de alto impacto, desde a prova de conceito até a implementação no chão de fábrica.",
            en: "As Technical Lead, I was responsible for designing solution architectures, coordinating multidisciplinary teams, and ensuring the delivery of high-impact projects, from proof of concept to factory floor implementation."
        },
        solution: {
            pt: "Desenvolvemos soluções modulares e customizáveis de IoT, visão computacional e automação que se integravam aos processos existentes dos clientes, provando o ROI rapidamente.",
            en: "We developed modular and customizable solutions for IoT, computer vision, and automation that integrated with clients' existing processes, proving ROI quickly."
        },
        impact: {
            pt: "Os projetos resultaram em ganhos médios de 20% em produtividade e redução de 15% em custos de manutenção para as empresas parceiras, fomentando a inovação no setor.",
            en: "The projects resulted in average productivity gains of 20% and a 15% reduction in maintenance costs for partner companies, fostering innovation in the sector."
        }
    },
    {
        id: 'craftbox',
        title: "Craftbox Code",
        description: { 
            pt: "Um kit para ensinar lógica e programação para crianças utilizando realidade aumentada.",
            en: "A kit to teach logic and programming to children using augmented reality."
        },
        tags: ["Unity", "C#", "ARKit", "ARCore"],
        link: "https://craftbox.digital/",
         challenge: {
            pt: "Tornar o aprendizado de programação uma atividade divertida e tangível para crianças, removendo a barreira de abstração do código puro.",
            en: "To make learning programming a fun and tangible activity for children, removing the abstraction barrier of pure code."
        },
        myRole: {
            pt: "Fui o desenvolvedor principal do aplicativo de Realidade Aumentada, criando a lógica para reconhecer os blocos físicos e traduzi-los em comandos de programação na tela.",
            en: "I was the lead developer of the Augmented Reality application, creating the logic to recognize physical blocks and translate them into on-screen programming commands."
        },
        solution: {
            pt: "Criamos um kit com blocos físicos que, quando vistos através do app, ganham vida em 3D. As crianças montam sequências de blocos para resolver quebra-cabeças, aprendendo conceitos de lógica.",
            en: "We created a kit with physical blocks that come to life in 3D when viewed through the app. Children assemble sequences of blocks to solve puzzles, learning logic concepts."
        },
        impact: {
            pt: "O projeto foi adotado em escolas de tecnologia e recebeu feedback positivo de pais e educadores pela sua abordagem inovadora e alto engajamento.",
            en: "The project was adopted in technology schools and received positive feedback from parents and educators for its innovative approach and high engagement."
        }
    },
    {
        id: 'ufabc-next',
        title: "UFABC Next",
        description: { 
            pt: "Plataforma que apoia os alunos durante a graduação com avaliações de professores, estatísticas pessoais, histórico e planejamento da matrícula para alunos da UFABC.",
            en: "A platform that supports students during their undergraduate studies with professor reviews, personal statistics, academic history, and course registration planning for UFABC students."
        },
        tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
        link: "https://ufabcnext.com/",
        challenge: {
            pt: "Centralizar informações cruciais e dispersas da universidade, oferecendo aos alunos uma ferramenta para tomar decisões mais estratégicas sobre sua trajetória acadêmica.",
            en: "To centralize crucial and dispersed university information, offering students a tool to make more strategic decisions about their academic path."
        },
        myRole: {
            pt: "Liderei o desenvolvimento do front-end com Next.js e contribuí significativamente para o back-end, ajudando a modelar o banco de dados e a criar as APIs.",
            en: "I led the front-end development with Next.js and contributed significantly to the back-end, helping to model the database and create the APIs."
        },
        solution: {
            pt: "Construímos um portal completo onde os alunos podem ver avaliações anônimas de matérias, calcular seu CR, simular matrículas e planejar os próximos quadrimestres.",
            en: "We built a complete portal where students can see anonymous course reviews, calculate their GPA, simulate registrations, and plan for upcoming terms."
        },
        impact: {
            pt: "A plataforma se tornou uma ferramenta essencial para milhares de alunos da UFABC, com mais de 80% dos estudantes utilizando-a ativamente durante o período de matrícula.",
            en: "The platform has become an essential tool for thousands of UFABC students, with over 80% of students actively using it during the registration period."
        }
    },
    {
        id: 'tamandutech',
        title: "Tamandutech",
        description: { 
            pt: "Criação e liderança por mais de 5 anos da equipe de robótica de competição da UFABC com mais de 60 integrantes.",
            en: "Creation and leadership for over 5 years of the UFABC competitive robotics team with more than 60 members."
        },
        tags: ["Robótica", "C++", "Python", "Hardware"],
        link: "https://www.instagram.com/tamandutech/",
         challenge: {
            pt: "Estruturar e escalar uma equipe de robótica de competição do zero, garantindo a transferência de conhecimento, captação de recursos e o desenvolvimento de robôs competitivos em nível nacional.",
            en: "To structure and scale a competitive robotics team from scratch, ensuring knowledge transfer, fundraising, and the development of nationally competitive robots."
        },
        myRole: {
            pt: "Como capitão e diretor, fui responsável pela gestão geral da equipe, liderança técnica dos projetos de robôs, mentoria de novos membros e representação da equipe em competições.",
            en: "As captain and director, I was responsible for the overall management of the team, technical leadership of the robot projects, mentoring new members, and representing the team in competitions."
        },
        solution: {
            pt: "Estabelecemos processos de gestão, uma cultura de colaboração e excelência técnica, e desenvolvemos múltiplos robôs que competiram em categorias como Sumô, Combate e Trekking.",
            en: "We established management processes, a culture of collaboration and technical excellence, and developed multiple robots that competed in categories such as Sumo, Combat, and Trekking."
        },
        impact: {
            pt: "A equipe conquistou múltiplos pódios em competições nacionais, tornou-se uma das maiores equipes de extensão da universidade e formou dezenas de engenheiros altamente qualificados.",
            en: "The team won multiple podiums in national competitions, became one of the largest extension teams at the university, and trained dozens of highly qualified engineers."
        }
    }
  ];
  
  const testimonialsData = [
     {
        quote: { 
            pt: "É um excelente profissional. Criativo, centrado, inteligente e tranquilo. Tem um cuidado especial com a qualidade de suas entregas!",
            en: "He is an excellent professional. Creative, focused, intelligent, and calm. He has a special care for the quality of his deliveries!"
        },
        author: "SUELI TRAJANO - BIG BRAIN"
     },
     {
        quote: { 
            pt: "Se você procura resultado, profissionalismo e eficiência em modelagem e impressão de peças mecânicas em 3D, encontrou. Pedro domina as técnicas, processos e melhores materiais. Acelerou nossa prototipagem e nosso processo de industrialização. Recomendo!",
            en: "If you are looking for results, professionalism, and efficiency in 3D modeling and printing of mechanical parts, you've found it. Pedro masters the techniques, processes, and best materials. He accelerated our prototyping and our industrialization process. I recommend him!"
        },
        author: "VICTOR DIAGO - ALFA SENSE"
     },
     {
        quote: { 
            pt: "Muito bom o curso! Didática 100% Parabéns e obrigado!",
            en: "Very good course! 100% great teaching method. Congratulations and thank you!"
        },
        author: "ALUNO UDEMY"
     }
  ];

  const articlesData = [
     {
        title: {
            pt: "INVENTORY AUTOMATION DEVELOPMENT OF COMPUTER VISION IN DRONES",
            en: "INVENTORY AUTOMATION DEVELOPMENT OF COMPUTER VISION IN DRONES"
        },
        link: "https://www.proceedings.blucher.com.br/article-details/inventory-automation-development-of-computer-vision-in-drones-39878",
        cta: { pt: "Ler Publicação", en: "Read Publication" }
     },
     {
        title: {
            pt: "O que significa 'saber IA' no currículo profissional do futuro?",
            en: "What does 'knowing AI' mean on the professional resume of the future?"
        },
        link: "https://phbirais.medium.com/o-que-significa-saber-ia-no-curr%C3%ADculo-profissional-do-futuro-abcafe422a2f",
        cta: { pt: "Ler no Medium", en: "Read on Medium" }
     },
     {
        title: {
            pt: "7 benefícios da realidade aumentada na educação",
            en: "7 benefits of augmented reality in education"
        },
        link: "https://phbirais.medium.com/7-benef%C3%ADcios-da-realidade-aumentada-na-educa%C3%A7%C3%A3o-4ded4383cca5",
        cta: { pt: "Ler no Medium", en: "Read on Medium" }
     }
  ];


  // Language Switcher Logic
  let currentLang = localStorage.getItem('language') || 'pt';

  const langButtons = document.querySelectorAll('.lang-btn');

  function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('language', lang);

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update all static text
    document.querySelectorAll('[data-translate-key]').forEach(el => {
      const key = el.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update active button
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Rerender dynamic content
    renderTimeline();
    renderProjects();
    renderTestimonials();
    renderArticles();
  }

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  // Mobile Menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
      });
  });

  // Dynamic Content Rendering
  const projectsContainer = document.getElementById('projects-container');
  const modalContainer = document.getElementById('modal-container');
  const timelineContainer = document.getElementById('timeline-container');
  const testimonialsContainer = document.getElementById('testimonials-container');
  const articlesContainer = document.getElementById('articles-container');

  function renderProjects() {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description[currentLang]}</p>
                <div class="project-card-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                 <div class="project-card-footer">
                    <button class="btn btn-primary w-full" data-project-id="${project.id}">${translations[currentLang].projectBtnDetails}</button>
                </div>
            </div>
        `;
        projectsContainer.appendChild(card);
    });
  }

  function renderTimeline() {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = '';
    educationData.forEach((item, index) => {
        const sideClass = index % 2 === 0 ? '' : 'timeline-item:nth-child(odd)';
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        if (index % 2 !== 0) {
           timelineItem.style.alignSelf = 'flex-end';
           timelineItem.style.justifyContent = 'flex-start';
           timelineItem.style.paddingLeft = '2.5rem';
           timelineItem.style.paddingRight = '0';
        }

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <p class="font-semibold text-sm text-emerald-600">${item.period[currentLang]}</p>
                <h3 class="font-bold text-lg my-1">${item.title[currentLang]}</h3>
                <p class="text-gray-600 text-sm">${item.institution}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
  }

  function renderTestimonials(){
    if (!testimonialsContainer) return;
    testimonialsContainer.innerHTML = '';
    testimonialsData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
             <div class="icon">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15h14a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM5 8a5 5 0 0110 0v3.586l1.293 1.293A1 1 0 0115 13H5a1 1 0 01-.293-.707L6 11.586V8z" clip-rule="evenodd" fill-rule="evenodd" transform="rotate(180 10 10)"></path><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15h14a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM5 8a5 5 0 0110 0v3.586l1.293 1.293A1 1 0 0115 13H5a1 1 0 01-.293-.707L6 11.586V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
             </div>
             <p>"${item.quote[currentLang]}"</p>
             <p class="author">${item.author}</p>
        `;
        testimonialsContainer.appendChild(card);
    });
  }
  
  function renderArticles() {
    if (!articlesContainer) return;
    articlesContainer.innerHTML = '';
    articlesData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
             <h3>${item.title[currentLang]}</h3>
             <a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.cta[currentLang]} &rarr;</a>
        `;
        articlesContainer.appendChild(card);
    });
  }

  // Modal Logic
  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    modalContainer.innerHTML = `
        <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div class="modal-header">
                <h3 id="modal-title" class="modal-title">${project.title}</h3>
                <button class="modal-close-btn" aria-label="Close modal">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="modal-body">
                <h4>${translations[currentLang].modalChallenge}</h4>
                <p>${project.challenge[currentLang]}</p>
                <h4>${translations[currentLang].modalRole}</h4>
                <p>${project.myRole[currentLang]}</p>
                <h4>${translations[currentLang].modalSolution}</h4>
                <p>${project.solution[currentLang]}</p>
                <h4>${translations[currentLang].modalImpact}</h4>
                <p>${project.impact[currentLang]}</p>
            </div>
        </div>
    `;
    modalContainer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalContainer.classList.add('hidden');
    modalContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  projectsContainer.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-project-id]');
    if (button) {
      openModal(button.dataset.projectId);
    }
  });

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer || e.target.closest('.modal-close-btn')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Initial Render
  changeLanguage(currentLang);
});
