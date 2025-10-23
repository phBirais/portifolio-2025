import React, { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div>
    <h4 className="text-xl font-bold text-brand-green-dark mb-2 border-b-2 border-brand-green/20 pb-1">{title}</h4>
    <p className="text-medium-text leading-relaxed">{children}</p>
  </div>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <h2 className="text-4xl font-extrabold text-dark-text mb-2">{project.name}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="bg-brand-green/10 text-brand-green-dark text-xs font-mono font-bold px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>

        <img src={project.imageUrl} alt={`Imagem do projeto ${project.name}`} className="w-full h-64 object-cover rounded-lg mb-6" />

        <div className="space-y-6">
          {project.challenge && <DetailSection title="O Desafio">{project.challenge}</DetailSection>}
          {project.myRole && <DetailSection title="Minha Atuação">{project.myRole}</DetailSection>}
          {project.solution && <DetailSection title="A Solução">{project.solution}</DetailSection>}
          {project.impact && <DetailSection title="Resultados e Impacto">{project.impact}</DetailSection>}
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full text-center mt-8 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-all duration-300"
          >
            Visitar Projeto &rarr;
          </a>
        )}

      </div>
    </div>
  );
};
