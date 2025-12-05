import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
  level: number; // 0-100
}

export interface NavItem {
  label: string;
  href: string;
}
