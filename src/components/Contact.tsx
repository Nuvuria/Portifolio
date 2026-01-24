import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { Section } from './Section';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-accent font-mono mb-3 md:mb-4 text-sm md:text-base">04. O que vem agora?</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Entre em Contato</h2>
        <p className="text-secondary text-sm md:text-lg mb-8 md:mb-10">
          Estou sempre em busca de novos desafios e oportunidades. 
          Se você tem uma pergunta ou apenas quer dizer oi, minha caixa de entrada está sempre aberta!
        </p>
        
        <a 
          href="https://wa.me/5581981192030?text=Olá%20vi%20seu%20portofilio,%20gostaria%20de%20tirar%20uma%20duvida"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-transparent border border-accent text-accent px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-sm md:text-base hover:bg-accent/10 transition-all mb-8 md:mb-12"
        >
          <MessageCircle size={18} className="md:w-5 md:h-5" />
          Diga Olá
        </a>
      </motion.div>
    </Section>
  );
};
