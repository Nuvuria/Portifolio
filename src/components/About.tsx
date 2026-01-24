import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3">
          <span className="text-accent">01.</span> Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-secondary text-sm md:text-lg leading-relaxed space-y-3 md:space-y-4">
            <p>
              Sou um desenvolvedor apaixonado por criar interfaces limpas e eficientes. 
              Meu foco está em entregar produtos que não apenas funcionam bem, mas também proporcionam uma experiência excepcional ao usuário.
            </p>
            <p>
              Com experiência em todo o ciclo de desenvolvimento web, desde a concepção até o deploy, 
              busco sempre utilizar as melhores práticas e tecnologias modernas para resolver problemas reais.
            </p>
          </div>
          {/* Optional Image or Graphic here */}
          <div className="relative group max-w-xs mx-auto md:max-w-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square bg-surface rounded-lg border border-white/10 overflow-hidden">
               <img 
                 src="/foto.jpeg" 
                 alt="Foto de Perfil" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
               />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
