export interface Tutorial {
  id: number;
  created_at: string;
  tutorial_id: string;
  name: Content;
  description: Content;
  slides: Content;
  quizzes: Content;
  difficulty: number;
  points: number;
  tags: string[];
  icon: string;
  code: string;
}

export interface Content {
  en: string;
  es: string;
}
