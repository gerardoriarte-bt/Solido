/**
 * Tipos TypeScript para Sólido Business Law
 * Define interfaces y tipos para componentes y datos
 */

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export type ThemeMode = 'light' | 'dark';

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}
