import { Project, Article, SocialLink, NavItem } from './types';

export const PROFILE = {
  name: "Alex Chen",
  role: "Senior Product Designer & Developer",
  tagline: "Crafting digital experiences where aesthetics meet function.",
  about: "I am a multidisciplinary creator based in San Francisco. With over 8 years of experience in the intersection of design and technology, I help brands tell their stories through immersive web experiences and intuitive interfaces. I believe in the power of minimalism—removing the unnecessary so the significant may speak.",
  email: "hello@example.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Lumina Interface",
    category: "UI/UX Design",
    description: "A comprehensive design system for a fintech dashboard, focusing on data clarity and dark mode aesthetics.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: "p2",
    title: "Apex Architecture",
    category: "Web Development",
    description: "Minimalist portfolio website built for an award-winning architectural firm in Tokyo.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: "p3",
    title: "Mono Focus",
    category: "Mobile App",
    description: "A productivity application designed to reduce cognitive load through typographic hierarchy.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#"
  },
  {
    id: "p4",
    title: "Ethereal Sound",
    category: "Brand Identity",
    description: "Rebranding campaign for a high-end audio equipment manufacturer.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "a1",
    title: "The Return of Skeuomorphism in Modern UI",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    excerpt: "Exploring how depth and texture are making a subtle comeback in digital interfaces."
  },
  {
    id: "a2",
    title: "Designing for Accessibility First",
    date: "Sep 12, 2023",
    readTime: "7 min read",
    excerpt: "Why inclusive design leads to better products for everyone, not just those with disabilities."
  },
  {
    id: "a3",
    title: "The Psychology of Dark Mode",
    date: "Aug 05, 2023",
    readTime: "4 min read",
    excerpt: "Understanding user preference and the visual ergonomics of low-light interfaces."
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "Twitter / X", url: "#", icon: "twitter" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Instagram", url: "#", icon: "instagram" },
];