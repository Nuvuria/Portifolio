import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificates } from '../data/portfolio';
import { Section } from './Section';

export const Certificates: React.FC = () => {
  return (
    <Section id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-accent" />
          <h2 className="text-2xl md:text-3xl font-bold">Certificados</h2>
        </div>
        <p className="text-secondary text-sm md:text-base mb-8 max-w-2xl">
          Formação contínua para manter a qualidade técnica e a visão de produto atualizadas.
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-xl border border-white/5 bg-surface/80 px-4 py-3 md:px-5 md:py-4 flex flex-col gap-1"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm md:text-base font-semibold text-primary">
                  {certificate.title}
                </h3>
                <span className="text-[10px] md:text-xs text-secondary/70">
                  {certificate.date}
                </span>
              </div>
              <p className="text-xs md:text-sm text-secondary">
                {certificate.issuer}
              </p>
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-[11px] md:text-xs text-accent hover:underline self-start"
                >
                  Ver credencial
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

