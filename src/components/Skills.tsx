import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Section } from './Section';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" className="py-6 md:py-10">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 flex items-center gap-3">
          <span className="text-accent">03.</span> Skills
        </h2>
        
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-surface border border-white/5 rounded-full text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
