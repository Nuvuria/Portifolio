import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, ExternalLink } from 'lucide-react';
import { certificates, skills } from '../data/portfolio';
import { Section } from './Section';

export const SkillsAndCertificates: React.FC = () => {
  return (
    <Section id="skills-certs">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Skills Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Code2 className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-surface/50 border border-white/5 rounded-lg text-sm md:text-base text-secondary hover:text-primary hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-surface to-surface/50 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-lg font-semibold mb-2 relative z-10">Aprendizado Contínuo</h3>
            <p className="text-secondary text-sm leading-relaxed relative z-10">
              Sempre explorando novas tecnologias. Atualmente focado em arquitetura de software escalável e inteligência artificial aplicada ao front-end.
            </p>
          </div>
        </motion.div>

        {/* Certificates Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold">Certificações</h2>
          </div>

          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-surface/40 hover:bg-surface/60 border border-white/5 hover:border-accent/20 rounded-xl overflow-hidden transition-all"
              >
                <div className="flex flex-col md:flex-row gap-4 p-5">
                  {/* GIF Preview Area */}
                  <div className="w-full md:w-32 h-24 bg-black/20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative">
                    {cert.gifUrl ? (
                      <>
                        <img 
                          src={cert.gifUrl} 
                          alt={`${cert.title} preview`} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    ) : (
                      <Award className="w-8 h-8 text-white/10 group-hover:text-accent/40 transition-colors" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-primary truncate pr-4 group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-mono text-secondary/60 bg-white/5 px-2 py-1 rounded">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-sm text-secondary mt-1 mb-3">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {cert.skills?.map(skill => (
                        <span key={skill} className="text-[10px] text-secondary/70 bg-white/5 px-1.5 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300"
                      >
                        Ver Credencial <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
