document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Handler ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            // Change hamburger icon to X and back
            const iconPath = hamburgerButton.querySelector('path');
            if (!isExpanded) {
                iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            }
        });

        // Close menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                 const iconPath = hamburgerButton.querySelector('path');
                 iconPath.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            });
        });
    }

    // --- Project Data ---
    const projects = [
      { name: "Hustly Education", description: "Plataforma de educação generativa que utiliza IA como copiloto de ensino para estudantes, otimizando o aprendizado.", tech: ["React", "Supabase", "IA"], link: "https://hustly.tech/", imageUrl: "https://via.placeholder.com/500x300.png/047857/FFFFFF?text=Hustly", challenge: "A educação tradicional luta para oferecer caminhos de aprendizado personalizados em escala. Estudantes se sentem perdidos e desengajados.", myRole: "Como co-fundador e arquiteto de soluções, fui responsável por desenhar a arquitetura da plataforma, desenvolver o MVP e integrar os modelos de IA generativa.", solution: "Desenvolvemos uma plataforma SaaS onde a IA atua como um tutor pessoal, criando trilhas de conteúdo dinâmicas, gerando quizzes e respondendo dúvidas em tempo real.", impact: "Aumento de 40% no engajamento dos alunos em projetos piloto. Redução do tempo necessário para domínio de um tópico em 25%." },
      { name: "Express AI", description: "Um microSaaS que utiliza IA para ensinar e avaliar os usuários a dominar a arte da comunicação.", tech: ["Google Cloud", "React", "FastAPI", "Gemini"], link: "https://expressai-v1-649614933205.us-west1.run.app/", imageUrl: "./images/expressai.png", challenge: "Muitos profissionais têm dificuldade em comunicar suas ideias de forma clara e impactante, perdendo oportunidades de carreira.", myRole: "Desenvolvi o produto de ponta a ponta, desde a ideação e arquitetura na GCP até a implementação do frontend e backend, integrando o Gemini para análise de fala.", solution: "Criei uma aplicação que grava a fala do usuário, transcreve e utiliza IA para fornecer feedback instantâneo sobre clareza, ritmo, uso de vícios de linguagem e poder de persuasão.", impact: "Usuários reportaram um aumento de 30% na confiança em apresentações após duas semanas de uso." },
      { name: "Smart Factory SENAI-SP", description: "Liderança técnica de mais de 15 projetos de tecnologia aplicada a industria somando + de 5 Milhões em recursos", tech: ["IA", "Eletrônica", "Software", "Automação"], link: "https://www.portaldaindustria.com.br/canais/plataforma-inovacao-para-industria/categoria/smart-factory/", imageUrl: "https://via.placeholder.com/500x300.png/047857/FFFFFF?text=Smart+Factory", challenge: "A indústria brasileira enfrenta o desafio de se modernizar para competir globalmente, mas carece de soluções acessíveis e integradas de Indústria 4.0.", myRole: "Como líder técnico e arquiteto de soluções, coordenei equipes multidisciplinares para desenvolver e implantar soluções de IA, IoT e robótica em ambientes de manufatura.", solution: "Entregamos mais de 15 projetos, incluindo sistemas de visão computacional para controle de qualidade, plataformas de IoT para monitoramento de chão de fábrica e robôs autônomos.", impact: "Portfólio de projetos de R$ 5 milhões, resultando em melhorias de eficiência de até 40% para as empresas parceiras." },
      { name: "Craftbox Code", description: "Um kit para ensinar lógica e programação para crianças utilizando realidade aumentada.", tech: ["Unity", "C#", "ARKit", "ARCore"], link: "https://craftbox.digital/", imageUrl: "https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Craftbox", challenge: "Despertar o interesse de crianças pela programação de forma lúdica e tangível, superando a barreira de abstração dos conceitos de lógica.", myRole: "Atuei como desenvolvedor principal, responsável pela criação da experiência em Realidade Aumentada com Unity e C#, integrando os marcadores físicos com os blocos de lógica virtuais.", solution: "Desenvolvemos um kit físico com blocos que, ao serem visualizados pela câmera do celular ou tablet, se transformam em comandos de programação em um ambiente 3D interativo.", impact: "O projeto foi validado em workshops com crianças, apresentando um aumento de 80% no engajamento em atividades de lógica em comparação com métodos tradicionais." },
      { name: "UFABC Next", description: "Plataforma que apoia os alunos da UFABC com avaliações de professores, estatísticas e planejamento de matrícula.", tech: ["React", "Next.js", "Node.js", "PostgreSQL"], link: "https://ufabcnext.com/", imageUrl: "./images/ufabcnext.png", challenge: "Os alunos da UFABC enfrentavam grande dificuldade em planejar suas matrículas e acompanhar o progresso acadêmico devido à complexidade da estrutura curricular da universidade.", myRole: "Como um dos criadores e mantenedores do projeto, fui responsável pelo desenvolvimento do frontend com React e Next.js, e pela modelagem do banco de dados PostgreSQL.", solution: "Criamos uma plataforma open-source que centraliza o histórico do aluno, permite simular matrículas, fornece estatísticas de desempenho e avaliações de disciplinas pela comunidade.", impact: "Tornou-se a principal ferramenta de planejamento para mais de 10.000 alunos, reduzindo significativamente o estresse e o tempo gasto no processo de matrícula." },
      { name: "Tamandutech", description: "Criação e liderança da equipe de robótica de competição da UFABC com mais de 60 integrantes.", tech: ["Robótica", "C++", "Python", "Hardware"], link: "https://www.instagram.com/tamandutech/", imageUrl: "https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Tamandutech", challenge: "A UFABC carecia de uma equipe de robótica de competição consolidada que pudesse representar a universidade em torneios e servir como um polo de desenvolvimento prático.", myRole: "Fui um dos fundadores e líder da equipe por mais de 5 anos, sendo responsável pela gestão de projetos, captação de recursos, e mentoria técnica das áreas de software e eletrônica.", solution: "Estruturamos a equipe do zero, definindo processos de gestão, criando sub-equipes (mecânica, eletrônica, software) e desenvolvendo robôs para diversas competições, como a RoboCup.", impact: "Consolidamos uma equipe com mais de 60 membros, conquistamos múltiplos prêmios em competições nacionais e estabelecemos parcerias que garantiram a sustentabilidade do projeto." }
    ];

    // --- Project Cards & Modal Handler ---
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalCloseButton = document.getElementById('modal-close-button');

    if (projectsGrid && modal && modalBody && modalCloseButton) {
        // 1. Populate Project Grid
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg flex flex-col justify-between border border-gray-200/80 hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group';
            
            const techBadges = project.tech.map(t => `<span class="bg-brand-green/10 text-brand-green-dark text-xs font-mono font-bold px-2 py-1 rounded">${t}</span>`).join('');

            card.innerHTML = `
                <div>
                    <div class="relative h-48 w-full overflow-hidden">
                        <img src="${project.imageUrl || 'https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Project'}" alt="Imagem do projeto ${project.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-dark-text mb-3">${project.name}</h3>
                        <p class="text-medium-text mb-4 h-24 overflow-hidden">${project.description}</p>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
                    <button data-project-index="${index}" class="details-button w-full text-center bg-brand-green/90 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-green-dark transition-all duration-300">Ver Detalhes</button>
                </div>
            `;
            projectsGrid.appendChild(card);
        });

        // 2. Modal Logic
        const openModal = (project) => {
            let detailsHtml = `
                <h2 class="text-4xl font-extrabold text-dark-text mb-2">${project.name}</h2>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${project.tech.map(t => `<span class="bg-brand-green/10 text-brand-green-dark text-xs font-mono font-bold px-2 py-1 rounded">${t}</span>`).join('')}
                </div>
                <img src="${project.imageUrl}" alt="Imagem do projeto ${project.name}" class="w-full h-64 object-cover rounded-lg mb-6" />
                <div class="space-y-6">
                    ${project.challenge ? `<div class="modal-detail"><h4 class="modal-detail-title">O Desafio</h4><p class="text-medium-text leading-relaxed">${project.challenge}</p></div>` : ''}
                    ${project.myRole ? `<div class="modal-detail"><h4 class="modal-detail-title">Minha Atuação</h4><p class="text-medium-text leading-relaxed">${project.myRole}</p></div>` : ''}
                    ${project.solution ? `<div class="modal-detail"><h4 class="modal-detail-title">A Solução</h4><p class="text-medium-text leading-relaxed">${project.solution}</p></div>` : ''}
                    ${project.impact ? `<div class="modal-detail"><h4 class="modal-detail-title">Resultados e Impacto</h4><p class="text-medium-text leading-relaxed">${project.impact}</p></div>` : ''}
                </div>
                ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-visit-button">Visitar Projeto &rarr;</a>` : ''}
            `;
            modalBody.innerHTML = detailsHtml;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            modal.querySelector('#modal-content').classList.add('animate-fade-in-up');
        };

        const closeModal = () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            modal.querySelector('#modal-content').classList.remove('animate-fade-in-up');
        };

        projectsGrid.addEventListener('click', (e) => {
            if (e.target && e.target.matches('button.details-button')) {
                const projectIndex = e.target.dataset.projectIndex;
                openModal(projects[projectIndex]);
            }
        });

        modalCloseButton.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // --- Set current year in footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});