import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'SaaS', href: '#saas' },
    { name: 'Landings', href: '#landings' },
    { name: 'Skills & Certs', href: '#skills-certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-accent font-mono">
          &lt;V/&gt;
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-mono text-secondary hover:text-accent transition-colors"
              >
                <span className="text-accent mr-1">0{i + 1}.</span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary z-50 relative"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden h-screen",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-mono text-secondary hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
