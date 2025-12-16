/**
 * Project Model Interface
 * Defines the structure for project data across the application
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  thumbnail: string;
  images?: string[];
  techStack: TechTag[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: ProjectCategory;
  completedDate: Date;
  challenges?: string;
  solutions?: string;
  metrics?: ProjectMetrics;
}

export interface TechTag {
  name: string;
  icon?: string;
  color?: string;
}

export interface ProjectMetrics {
  performance?: string;
  users?: number;
  impact?: string;
}

export enum ProjectCategory {
  WEB = 'Web Application',
  MOBILE = 'Mobile App',
  FULLSTACK = 'Full-Stack',
  BACKEND = 'Backend',
  FRONTEND = 'Frontend',
  DESIGN = 'UI/UX Design',
  OTHER = 'Other'
}

/**
 * API Response wrapper for projects
 */
export interface ProjectsResponse {
  data: Project[];
  total: number;
  page: number;
  pageSize: number;
}
