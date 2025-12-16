/**
 * Experience Model Interface
 * Defines the structure for professional experience timeline
 */
export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current?: boolean;
  description: string;
  responsibilities?: string[];
  achievements?: string[];
  techStack?: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  honors?: string[];
  logo?: string;
}

/**
 * Skill Categories for Tech Stack Section
 */
export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: SkillLevel;
  yearsOfExperience?: number;
}

export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert'
}
