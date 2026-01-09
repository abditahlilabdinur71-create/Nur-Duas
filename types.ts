
export enum Category {
  DAILY = 'Daily',
  PRAYER = 'Prayer',
  PROTECTION = 'Protection',
  FORGIVENESS = 'Forgiveness',
  SICKNESS = 'Sickness & Trials',
  GRATITUDE = 'Gratitude',
  MORNING_EVENING = 'Morning & Evening'
}

export interface Dua {
  id: string;
  title: string;
  category: Category;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
}

export type View = 'all' | 'categories' | 'favorites' | 'search';
