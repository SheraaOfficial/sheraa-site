
import { CSSProperties } from "react";

export interface SpeakerData {
  name: string;
  image: string;
  role?: string;
}

export interface YearData {
  year: string;
  theme: string;
  description: string;
  speakers: SpeakerData[];
  backgroundClass: string;
  mediaSrc?: string;
}

export interface InspirationalQuote {
  text: string;
  translation: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}
