import React from 'react';

// A single testimonial card component, now without an image and with an icon
const TestimonialCard: React.FC<{ quote: string; name: string; role: string }> = ({ quote, name, role }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-lg flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
    <div className="text-brand-green mb-4">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2L3 6v8h6V8l3-4H6zm8 0l-3 4v8h6V8l3-4h-6z"></path>
      </svg>
    </div>
    <blockquote className="text-medium-text italic mb-6 flex-grow">
      <p>"{quote}"</p>
    </blockquote>
    <div>
      <div className="font-bold text-dark-text">{name}</div>
      {role && <div className="text-sm text-brand-green-dark">{role}</div>}
    </div>
  </div>
);

// Updated data with the user's provided testimonials
const testimonials = [
  {
    name: 'SUELI TRAJANO',
    role: 'BIG BRAIN',
    quote: 'É um excelente profissional. Criativo, centrado, inteligente e tranquilo. Tem um cuidado especial com a qualidade de suas entregas!',
  },
  {
    name: 'VICTOR DIAGO',
    role: 'ALFA SENSE',
    quote: 'Se você procura resultado, profissionalismo e eficiência em modelagem e impressão de peças mecânicas em 3D, encontrou. Pedro domina as técnicas, processos e melhores materiais. Acelerou nossa prototipagem e nosso processo de industrialização. Recomendo!',
  },
  {
    name: 'ALUNO UDEMY',
    role: '',
    quote: 'Muito bom o curso! Didática 100% Parabéns e obrigado!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            O que dizem sobre o <span className="text-brand-green-dark">meu trabalho</span>
          </h2>
          <p className="text-lg text-medium-text max-w-3xl mx-auto">
            Feedbacks de colegas e parceiros com quem tive o prazer de colaborar em diversos projetos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;