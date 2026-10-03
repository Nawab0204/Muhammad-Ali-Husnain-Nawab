export type ServiceId =
  | 'web'
  | 'design'
  | 'seo'
  | 'hosting'
  | 'maps'
  | 'it'
  | 'ai'
  | 'presence';

export interface AgencyService {
  id: ServiceId;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  deliverables: string[];
  iconName: 'Code2' | 'Layout' | 'Search' | 'Server' | 'MapPin' | 'ShieldCheck' | 'Bot';
  badge?: string;
}

export interface ServicePillar {
  id: ServiceId;
  number: string;
  pillar: string;
  verb: 'BUILD' | 'SUPPORT' | 'GET FOUND' | 'AUTOMATE';
  title: string;
  tagline: string;
  description: string;
  services: {
    title: string;
    description: string;
    capabilities: string[];
  }[];
  image: string;
  imageAlt: string;
  accent: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  category: string;
  filterKey: 'web' | 'seo' | 'hosting' | 'all';
  summary: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  name: string;
  description: string;
  detail: string;
  duration: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  company: string;
  location: string;
  service: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'web' | 'seo' | 'hosting' | 'it' | 'ai';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
}

export interface AuditResult {
  url: string;
  overallScore: number;
  seoScore: number;
  aeoScore: number;
  perfScore: number;
  mobileScore: number;
  techScore: number;
  findings: {
    category: 'SEO' | 'AEO' | 'Performance' | 'Mobile' | 'Technical';
    status: 'good' | 'warning' | 'critical';
    title: string;
    details: string;
  }[];
}
