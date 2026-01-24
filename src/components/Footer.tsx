import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-secondary text-sm font-mono">
      <p>
        Design & Code by <span className="text-accent">Vasconcelos Dev</span>
      </p>
      <p className="mt-1 opacity-50">
        Built with React, TypeScript & Tailwind
      </p>
    </footer>
  );
};
