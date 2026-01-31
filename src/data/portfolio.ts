import { Certificate, PersonalInfo, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Vasconcelos Dev",
  title: "Creative Developer",
  shortBio: "Transformando ideias em experiências digitais de alto impacto. Especialista em construir aplicações web modernas, rápidas e escaláveis com foco em performance e usabilidade.",
  email: "contato@alexdev.com",
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  ]
};

export const skills: string[] = [
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Figma"
];

export const saasProjects: Project[] = [
  {
    id: 2,
    title: "Painele",
    description: "Dashboard administrativo intuitivo para visualização de métricas e análise de dados em tempo real.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    link: "https://www.painele.shop",
    imageUrl: "/painele.jpeg"
  }
];

export const landingProjects: Project[] = [
  {
    id: 1,
    title: "Vitrine - Loja de roupa",
    description: "E-commerce minimalista e moderno com estética cyberpunk/dark. Foco em drops exclusivos e experiência visual imersiva.",
    stack: ["TypeScript", "React", "Tailwind CSS", "JavaScript"],
    link: "https://roupas-one.vercel.app/",
    imageUrl: "/voidwear.png" // Local screenshot
  },
  {
    id: 2,
    title: "Vitrine - Corretora",
    description: "Plataforma para imóveis de alto padrão, transmitindo exclusividade e sofisticação através de um design limpo e tipografia elegante.",
    stack: ["TypeScript", "React", "Tailwind CSS", "JavaScript"],
    link: "https://imoveis-phi.vercel.app/",
    imageUrl: "/imoveis.jpeg" // Local screenshot
  },
  {
    id: 3,
    title: "Vitrine - Estudio de tatuagem",
    description: "Site autoral para estúdio de tatuagem com portfólio de artistas, agendamento simplificado e visual underground profissional.",
    stack: ["TypeScript", "React", "Tailwind CSS", "JavaScript"],
    link: "https://studio-ebon-iota.vercel.app/",
    imageUrl: "/tattoo.jpeg" // Local screenshot
  },
  {
    id: 4,
    title: "Vitrine - Advogados",
    description: "Landing page institucional para escritório de advocacia, focada em autoridade, clareza e conversão de leads qualificados.",
    stack: ["TypeScript", "React", "Tailwind CSS", "JavaScript"],
    link: "https://advogados-five.vercel.app/",
    imageUrl: "/advocacia.jpeg" // Local screenshot
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Desenvolvimento Fullstack",
    issuer: "Descomplica",
    date: "2023",
    link: "/fullstack%20pdf.pdf",
    skills: ["Node.js", "React", "TypeScript", "SQL"],
    gifUrl: "/fullstack.jpeg"
  }
];
