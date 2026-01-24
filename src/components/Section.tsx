import React, { ReactNode } from 'react';
import { cn } from '../utils/cn'; // Need to create this utility or just use clsx directly

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={cn("py-10 px-4 md:py-20 md:px-12 max-w-5xl mx-auto", className)}>
      {children}
    </section>
  );
};
