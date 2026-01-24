import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { Section } from './Section';

export const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex flex-col justify-center items-start pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-accent font-medium mb-2 md:mb-4 text-sm md:text-lg">Olá, eu sou</h2>
        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-primary tracking-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl md:text-5xl font-bold text-secondary mb-6 md:mb-8">
          {personalInfo.title}
        </h2>
        <p className="max-w-xl text-sm md:text-lg text-secondary mb-8 md:mb-10 leading-relaxed">
          {personalInfo.shortBio}
        </p>
        
        <div className="flex flex-wrap gap-3 md:gap-4">
          <a 
            href="#contact" 
            className="group flex items-center gap-2 bg-primary text-background px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-white/90 transition-all"
          >
            Entre em contato
            <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#saas" 
            className="flex items-center gap-2 border border-secondary/30 text-primary px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base hover:bg-secondary/10 transition-all"
          >
            Ver Projetos
            <FileText size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
};
