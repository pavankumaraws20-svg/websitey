import { Product, ProductCategory, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Heritage Necklace',
    category: ProductCategory.NECKLACE,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800',
    description: 'A masterpiece of traditional craftsmanship featuring intricate filigree work.',
    weight: '45g',
    purity: '22K'
  },
  {
    id: '2',
    name: 'Diamond Solitaire Ring',
    category: ProductCategory.RING,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800',
    description: 'Elegant solitaire set in 18K yellow gold, perfect for engagements.',
    weight: '4g',
    purity: '18K'
  },
  {
    id: '3',
    name: 'Temple Jhumka Earrings',
    category: ProductCategory.EARRING,
    price: 2100,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800',
    description: 'Traditional temple jewelry design with ruby and emerald accents.',
    weight: '18g',
    purity: '22K'
  },
  {
    id: '4',
    name: 'Antique Gold Bangle',
    category: ProductCategory.BANGLE,
    price: 3200,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800',
    description: 'Solid gold bangle with antique finish and peacock motifs.',
    weight: '30g',
    purity: '22K'
  },
  {
    id: '5',
    name: 'Maharani Bridal Set',
    category: ProductCategory.BRIDAL,
    price: 15000,
    image: 'https://images.unsplash.com/photo-1602123512399-5231c5b8b939?q=80&w=800',
    description: 'Complete bridal set including choker, long necklace, earrings, and maang tikka.',
    weight: '150g',
    purity: '22K'
  },
  {
    id: '6',
    name: 'Lakshmi Gold Coin',
    category: ProductCategory.COIN,
    price: 850,
    image: 'https://plus.unsplash.com/premium_photo-1681276170683-7061125263cd?q=80&w=800',
    description: 'Pure 24K gold coin engraved with Goddess Lakshmi for prosperity.',
    weight: '10g',
    purity: '24K'
  },
   {
    id: '7',
    name: 'Emerald Drop Necklace',
    category: ProductCategory.NECKLACE,
    price: 3800,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800',
    description: 'Contemporary design featuring genuine emerald drops.',
    weight: '35g',
    purity: '22K'
  },
  {
    id: '8',
    name: 'Men\'s Signet Ring',
    category: ProductCategory.RING,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1617038224558-28771a858c43?q=80&w=800',
    description: 'Bold and classic signet ring for men.',
    weight: '12g',
    purity: '22K'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    comment: 'The bridal set I bought from Raj Jewelers was the highlight of my wedding. Exquisite craftsmanship!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Anita Desai',
    location: 'Delhi',
    comment: 'Trustworthy and transparent with their gold rates. I have been a customer for 10 years.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    comment: 'Excellent customer service and beautiful custom designs. Highly recommended.',
    rating: 4
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Collections', path: '/collections' },
  { label: 'Custom Design', path: '/custom-design' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];