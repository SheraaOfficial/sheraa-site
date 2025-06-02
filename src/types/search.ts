
export interface SearchResult {
  id: string;
  type: 'startup' | 'program' | 'event' | 'insight' | 'page';
  title: string;
  description: string;
  path: string;
  relevanceScore: number;
  tags?: string[];
}

export interface SearchIndex {
  [key: string]: SearchResult[];
}
