import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud } from 'lucide-react';
import { saasProjects } from '../data/portfolio';
import { Section } from './Section';

export const SaaSPage: React.FC = () => {
  return (
    <Section id="saas">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Cloud className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold">SaaS que já desenvolvi</h2>
        </div>
        <p className="text-secondary text-sm md:text-base mb-8 max-w-2xl">
          Produtos digitais completos, com foco em performance, escalabilidade e experiência do usuário.
        </p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {saasProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface/80 to-surface/40 border border-white/5"
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-300 z-10" />
                   <img 
                     src={project.imageUrl} 
                     alt={project.title} 
                     className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                   />
                </div>
              )}
              
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_0_0,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.25),transparent_55%)]" />
              <div className="relative p-5 md:p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-secondary">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>

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
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

