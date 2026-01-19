
export type ContentBlockType = 'paragraph' | 'heading' | 'image' | 'video' | 'accordion' | 'quiz' | 'slideshow' | 'list' | 'note' | 'table';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  level?: 2 | 3 | 4;
  src?: string;
  alt?: string;
  caption?: string;
  items?: any[];
  headers?: string[];
  rows?: string[][];
  question?: string;
  options?: QuizOption[];
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  bannerImage: string;
  blocks: ContentBlock[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Resource {
  title: string;
  type: string;
  meta: string;
  link: string;
  icon: string;
}
