export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Helper for icon mapping
}

export interface NavItem {
  label: string;
  href: string;
}