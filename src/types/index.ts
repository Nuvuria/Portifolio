export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link: string;
  github?: string;
  imageUrl?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  gifUrl?: string; // Optional URL for preview GIF
  skills?: string[]; // Related skills
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  email: string;
  socials: SocialLink[];
}
