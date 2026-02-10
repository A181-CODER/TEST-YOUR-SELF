export type Language = 'en' | 'ar';
export type Dimension = 'thinking' | 'drive' | 'social' | 'problem' | 'adaptability';

export interface Option {
  trait: string;
  en: string;
  ar: string;
}

export interface Question {
  id: number;
  dimension: Dimension;
  en: string;
  ar: string;
  options: Option[];
}

export interface DimensionResult {
  dimension: Dimension;
  dominant: string;
  scores: Record<string, number>;
  percentage: number;
}

export interface ProfileSection {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: string;
}

export interface FieldRec {
  name: { en: string; ar: string };
  reason: { en: string; ar: string };
  match: number;
}

export interface AnalysisResult {
  dimensions: DimensionResult[];
  thinkingProfile: ProfileSection;
  strengths: Array<{ en: string; ar: string; detail: { en: string; ar: string } }>;
  fields: FieldRec[];
  mindsetType: { en: string; ar: string };
  mindsetDesc: { en: string; ar: string };
}
