import React from 'react';
import { LinkedinIcon, GithubIcon, MailIcon, MediumIcon, TelephoneIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="py-12 text-center border-t border-gray-200">
      <h2 className="text-4xl font-bold mb-4">Vamos Colaborar?</h2>
      <p className="text-lg text-medium-text max-w-2xl mx-auto mb-8">
        Estou sempre aberto a novas conexões, projetos desafiadores e oportunidades para compartilhar conhecimento. Se você tem uma ideia ou um desafio, vamos conversar.
      </p>
      <div className="flex justify-center items-center gap-6 mb-12">
        <a href="https://linkedin.com/in/phbirais" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors duration-300" aria-label="Meu perfil no LinkedIn">
          <LinkedinIcon className="w-8 h-8" />
        </a>
        <a href="https://github.com/phbirais" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors duration-300" aria-label="Meu perfil no GitHub">
          <GithubIcon className="w-8 h-8" />
        </a>
        <a href="mailto:phbirais@gmail.com" className="text-gray-500 hover:text-brand-green transition-colors duration-300" aria-label="Enviar um e-mail">
          <MailIcon className="w-8 h-8" />
        </a>
        <a href="tel:+5511976756446" className="text-gray-500 hover:text-brand-green transition-colors duration-300" aria-label="Ligar para o meu telefone">
          <TelephoneIcon className="w-8 h-8" />
        </a>
        <a href="https://medium.com/@phbirais" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors duration-300" aria-label="Meu perfil no Medium">
          <MediumIcon className="w-8 h-8" />
        </a>
      </div>
      <p className="font-mono text-brand-green-dark tracking-wider">
        Transformando ideias em soluções — com código, dados e visão.
      </p>
      <p className="text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Pedro Henrique Birais. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default ContactSection;