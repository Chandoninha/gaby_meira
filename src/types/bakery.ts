export type CakeCategory = 'Todos' | 'Infantil & Temáticos' | 'Clássicos & Laços' | 'Sobremesas';

export interface CakeItem {
  id: string;
  title: string;
  category: Exclude<CakeCategory, 'Todos'>;
  description: string;
  servings: string;
  imageUrl: string;
  badge?: string;
}

export interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  accentColor: string;
}

export interface BakeryInfo {
  name: string;
  tagline: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string;
  city: string;
  address: string;
  hours: {
    days: string;
    time: string;
  }[];
  googleMapsEmbedUrl: string;
  googleMapsDirectUrl: string;
}
