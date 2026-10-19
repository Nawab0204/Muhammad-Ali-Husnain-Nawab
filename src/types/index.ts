/**
 * Canonical domain models and TypeScript contracts.
 * Single source of truth for the entire application.
 */

import { RouteDefinition } from '../config/routes';

export type { RouteDefinition };

// Service Divisions
export type DivisionId =
  | 'web-development'
  | 'it-support'
  | 'digital-presence'
  | 'ai-automation'
  | 'security-surveillance';

export interface DivisionSubcategorySummary {
  name: string;
  path: string;
  shortDesc: string;
  image: string;
}

export interface DivisionDefinition {
  id: DivisionId;
  number: string;
  title: string;
  tagline: string;
  path: string;
  heroHeadline: string;
  heroDescription: string;
  heroImage: string;
  shortDescription: string;
  overviewSummary: string;
  subcategories: DivisionSubcategorySummary[];
  benefits: { title: string; description: string }[];
  deliverablesSummary: string[];
  recommendedAddons: string[];
  processSummary: { step: string; detail: string }[];
}

export interface SubcategoryPageData {
  slug: string;
  path: string;
  divisionId: DivisionId;
  divisionTitle: string;
  divisionPath: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  ctaText: string;
  heroImage: string;
  problemTitle: string;
  problemDescription: string;
  painPoints: string[];
  whatWeProvideTitle: string;
  whatWeProvideDescription: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  features: string[];
  visualType: string;
  businessOutcomes: {
    metric: string;
    label: string;
    description: string;
  }[];
  process: {
    number: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

// Portfolio & Case Studies
export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  division: string;
  divisionPath: string;
  categoryTag: string;
  liveUrl?: string;
  summary: string;
  description: string;
  keyDeliverables: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  image: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface CaseStudyItem extends PortfolioProject {
  beforeState: string;
  architectureOverview: string;
  implementationTimeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

// Blog
export type BlogCategory =
  | 'Web Development'
  | 'SEO'
  | 'AI Automation'
  | 'IT & Technology'
  | 'Cybersecurity'
  | 'Digital Marketing'
  | 'Business Technology';

export interface BlogArticleSection {
  title: string;
  anchorId: string;
  content: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  readTimeMinutes: number;
  publishDate: string;
  isoDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featuredImage: string;
  sections: BlogArticleSection[];
  keyTakeaways: string[];
  relatedArticles?: string[];
  faqs?: { question: string; answer: string }[];
}

// FAQ
export type FaqCategoryName =
  | 'General & Engagement'
  | 'Web Development'
  | 'IT Support & Hardware'
  | 'Digital Presence & Branding'
  | 'AI Automation'
  | 'Security & Surveillance';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategorizedFaqGroup {
  category: FaqCategoryName;
  iconName: string;
  faqs: FaqItem[];
}

// Verified Reviews & Testimonials
export type ReviewPlatform = 'Google' | 'Trustpilot' | 'Direct';

export interface VerifiedReview {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  platform: ReviewPlatform;
  rating: number;
  date: string;
  verified: boolean;
  service: string;
  headline: string;
  content: string;
}

// Contact & Inquiry Form
export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  location?: string;
  selectedServices: string[];
  timeline: string;
  budgetTier: string;
  preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';
  message: string;
}

export interface FormValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  selectedServices?: string;
  message?: string;
}

export type SubmissionStatus = 'idle' | 'validating' | 'submitting' | 'success' | 'error';

// API Contracts
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: string;
  errors?: Record<string, string>;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  fieldErrors?: Record<string, string>;
}

// Toast Feedback Notification
export interface ToastNotification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message?: string;
  duration?: number;
}
