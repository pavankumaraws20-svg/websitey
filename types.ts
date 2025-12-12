export enum ProductCategory {
  NECKLACE = 'Necklaces',
  RING = 'Rings',
  EARRING = 'Earrings',
  BANGLE = 'Bangles',
  BRIDAL = 'Bridal Sets',
  COIN = 'Gold Coins'
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  weight: string;
  purity: '22K' | '24K' | '18K';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface DesignSpec {
  conceptName: string;
  description: string;
  suggestedMaterials: string[];
  estimatedWeight: string;
  craftsmanshipNotes: string;
}