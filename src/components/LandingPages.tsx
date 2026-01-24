import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, LayoutTemplate } from 'lucide-react';
import { landingProjects } from '../data/portfolio';
import { Section } from './Section';

export const LandingPages: React.FC = () => {
  return (
    <Section id="landings">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <LayoutTemplate className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold">Landing Pages</h2>
        </div>
        <p className="text-secondary text-sm md:text-base mb-8 max-w-2xl">
          Páginas focadas em conversão, copy clara e acima de tudo performance.
        </p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {landingProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
              className="group relative overflow-hidden rounded-2xl bg-surface/80 border border-white/5 flex flex-col"
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                   <img 
                     src={project.imageUrl} 
                     alt={project.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
              )}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.35),transparent_60%)] z-20" />
              
              <div className="relative p-5 md:p-6 space-y-4 flex-1 flex flex-col z-30">
                <h3 className="text-lg md:text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] md:text-xs font-mono text-secondary/80 bg-white/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3 text-secondary">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent transition-colors text-xs md:text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-accent transition-colors text-xs md:text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
