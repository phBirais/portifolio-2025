import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onDetailsClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDetailsClick }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-between border border-gray-200/80 hover:border-brand-green transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group">
      <div>
        <div className="relative h-48 w-full overflow-hidden">
          <img src={project.imageUrl || 'https://via.placeholder.com/500x300.png/10B981/FFFFFF?text=Project'} alt={`Imagem do projeto ${project.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-dark-text mb-3">{project.name}</h3>
          <p className="text-medium-text mb-4 h-24 overflow-hidden">{project.description}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-brand-green/10 text-brand-green-dark text-xs font-mono font-bold px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        <button 
          onClick={onDetailsClick}
          className="w-full text-center bg-brand-green/90 text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-green-dark transition-all duration-300"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};
