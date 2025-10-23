
document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Logic ---
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  const toggleMenu = () => {
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
  };

  hamburgerButton.addEventListener('click', toggleMenu);
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburgerButton.getAttribute('aria-expanded') === 'true') {
        toggleMenu();
      }
    });
  });

  // --- Project Modal Logic ---
  const projectData = [
    // ... (Cole aqui o array 'projects' do seu arquivo ProjectsSection.tsx)
    // Exemplo:
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
    // ... Adicione todos os outros projetos aqui
  ];

  const modalContainer = document.getElementById('project-modal-container');
  const projectDetailButtons = document.querySelectorAll('.project-details-button');

  const createModal = (project) => {
    const techBadges = project.tech.map(tech => 
      `<span class="bg-brand-green/10 text-brand-green-dark text-xs font-mono font-bold px-2 py-1 rounded">${tech}</span>`
    ).join('');

    const modalHTML = `
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content" id="modal-content">
          <button id="modal-close-button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800" aria-label="Fechar modal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <h2 class="text-4xl font-extrabold text-dark-text mb-2">${project.name}</h2>
          <div class="flex flex-wrap gap-2 mb-6">${techBadges}</div>
          <img src="${project.imageUrl}" alt="Imagem do projeto ${project.name}" class="w-full h-64 object-cover rounded-lg mb-6" />
          <div class="space-y-6">
            ${project.challenge ? `<div class="detail-section"><h4>O Desafio</h4><p>${project.challenge}</p></div>` : ''}
            ${project.myRole ? `<div class="detail-section"><h4>Minha Atuação</h4><p>${project.myRole}</p></div>` : ''}
            ${project.solution ? `<div class="detail-section"><h4>A Solução</h4><p>${project.solution}</p></div>` : ''}
            ${project.impact ? `<div class="detail-section"><h4>Resultados e Impacto</h4><p>${project.impact}</p></div>` : ''}
          </div>
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-block w-full text-center mt-8 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-all duration-300">Visitar Projeto &rarr;</a>` : ''}
        </div>
      </div>
    `;
    modalContainer.innerHTML = modalHTML;
    
    // Activate modal
    setTimeout(() => {
        const overlay = document.getElementById('modal-overlay');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }, 10);


    // Add event listeners for closing
    const overlay = document.getElementById('modal-overlay');
    const closeButton = document.getElementById('modal-close-button');
    const modalContent = document.getElementById('modal-content');

    const closeModal = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modalContainer.innerHTML = '';
        }, 300); // Wait for transition to finish
    };
    
    overlay.addEventListener('click', closeModal);
    closeButton.addEventListener('click', closeModal);
    modalContent.addEventListener('click', (e) => e.stopPropagation()); // Prevent closing when clicking inside
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') closeModal();
    }, { once: true });
  };

  projectDetailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      createModal(projectData[index]);
    });
  });
});
