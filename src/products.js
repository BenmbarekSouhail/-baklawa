// Placeholder images cycle from a small set of stock photos.
// Swap `image` on each product for real photography when it's ready.
const IMG = {
  a: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop',
  b: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
  c: 'https://images.unsplash.com/photo-1612203985729-70726954388c?q=80&w=800&auto=format&fit=crop',
  d: 'https://images.unsplash.com/photo-1608198399988-341f732a9a1a?q=80&w=800&auto=format&fit=crop',
  e: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
  f: 'https://images.unsplash.com/photo-1583527976170-b0cee59615c1?q=80&w=800&auto=format&fit=crop',
  g: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?q=80&w=800&auto=format&fit=crop',
  h: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1200&auto=format&fit=crop',
};

// Real product photos, uploaded and matched one at a time.
import fiveMix from './assets/five-mix.png';
import bowlIceCream from './assets/bowl-ice-cream.png';
import iceCreamPhoto from './assets/ice-cream.png';
import traditionalPlain from './assets/six-mix.png';
import mint from './assets/eight-mix.png';
import rose from './assets/nine-mix.png';

// Assorted Baklawa — Pistachio / Walnut / Hazelnut, rebuilt product by product
import pistachioType1A from './assets/pistachio-type1-a.jpg';
import pistachioType1B from './assets/pistachio-type1-b.jpg';
import pistachioType2A from './assets/pistachio-type2-a.jpg';
import pistachioType2B from './assets/pistachio-type2-b.jpg';
import pistachioType2C from './assets/pistachio-type2-c.jpg';
import pistachioType2D from './assets/pistachio-type2-d.jpg';
import pistachioType3A from './assets/pistachio-type3-a.jpg';
import pistachioType3B from './assets/pistachio-type3-b.jpg';
import pistachioType3C from './assets/pistachio-type3-c.jpg';
import pistachioType3D from './assets/pistachio-type3-d.jpg';
import pistachioType4A from './assets/pistachio-type4-a.jpg';
import pistachioType4B from './assets/pistachio-type4-b.jpg';
import pistachioType5A from './assets/pistachio-type5-a.jpg';
import pistachioType5B from './assets/pistachio-type5-b.jpg';
import pistachioType6A from './assets/pistachio-type6-a.jpg';
import pistachioType6B from './assets/pistachio-type6-b.jpg';
import pistachioType6C from './assets/pistachio-type6-c.jpg';
import pistachioType6D from './assets/pistachio-type6-d.jpg';
import pistachioType7A from './assets/pistachio-type7-a.jpg';
import pistachioType8A from './assets/pistachio-type8-a.jpg';
import pistachioType8B from './assets/pistachio-type8-b.jpg';
import pistachioType8C from './assets/pistachio-type8-c.jpg';
import pistachioType9A from './assets/pistachio-type9-a.jpg';
import pistachioType9B from './assets/pistachio-type9-b.jpg';
import pistachioType9C from './assets/pistachio-type9-c.jpg';
import pistachioType9D from './assets/pistachio-type9-d.jpg';
import pistachioType10A from './assets/pistachio-type10-a.jpg';
import pistachioType10B from './assets/pistachio-type10-b.jpg';

// NOTE: assorted1.png–assorted10.png are still saved in /assets from an
// earlier round, but are NOT used below — they were matched to the old
// placeholder titles, which no longer line up with the real catalog codes.
// Tell Claude which catalog code each one shows (e.g. "assorted1.png = B03
// Walnut Wrap") and they'll be wired back in correctly.

export const products = [
  // ================= ASSORTED BAKLAWA =================
  // Rebuilt product by product. Each item: category 'assorted',
  // subcategory 'pistachio' | 'walnut' | 'hazelnut', two photos (image + image2),
  // sizes (array of size/price pairs), and ingredients.
  {
    id: 'pistachio-type-1',
    title: 'Type 1',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType1A, pistachioType1B],
    sizes: [
      { label: '2 KG', price: 'AED 500' },
      { label: '500 G', price: 'AED 125' },
    ],
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-2',
    title: 'Square Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType2A, pistachioType2B, pistachioType2C, pistachioType2D],
    price: 'AED 250',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-3',
    title: 'Midya Pistachio',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType3A, pistachioType3B, pistachioType3C, pistachioType3D],
    price: 'AED 280',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-4',
    title: 'Antep Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType4A, pistachioType4B],
    sizes: [
      { label: '1 KG', price: 'AED 280' },
    ],
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-5',
    title: 'Open Sobiyet',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType5A, pistachioType5B],
    price: 'AED 280',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-6',
    title: 'Kiss Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType6A, pistachioType6B, pistachioType6C, pistachioType6D],
    price: 'AED 280',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-7',
    title: 'Papillon Pistachio',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType7A],
    price: 'AED 280',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-8',
    title: 'Burma',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType8A, pistachioType8B, pistachioType8C],
    sizes: [
      { label: '1 KG', price: 'AED 250' },
    ],
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-9',
    title: 'Mekik Pistachio',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType9A, pistachioType9B, pistachioType9C, pistachioType9D],
    sizes: [
      { label: '1 KG', price: 'AED 250' },
    ],
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },
  {
    id: 'pistachio-type-10',
    title: 'Diamond Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType10A, pistachioType10B],
    price: 'Price on request',
    ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil',
  },

  // ================= MIXED BAKLAWA (unchanged from before) =================
  { id: 'mixed-pistachio-choco-mix', title: 'Pistachio and Choco Mix', price: '310.00 – 520.00 د.إ', image: IMG.a, category: 'mixed', consumption: 'To be consumed within 7 days after delivery and kept at room temperature. Best served warmed-up in the oven for a few seconds.', ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Chocolate, Pure Ghee', sizeInfo: '1 KG Box — 22-24 Pieces' },
  { id: 'mixed-pistachio-green-wrap', title: 'Pistachio Green Wrap', price: 'Price on request', image: fiveMix, category: 'mixed', ingredients: 'Flour, Eggs, Starch, Sugar, Pistachio, Pure Ghee Oil, and cream', sizeInfo: '2 KG Tray — 32 Pieces' },

  // ================= CAKES & ICE CREAM =================
  { id: 'cakes-bowl-ice-cream', title: 'Bowl Ice Cream', price: '20.00 د.إ', image: bowlIceCream, category: 'cakes' },
  { id: 'cakes-ice-cream', title: 'Ice Cream', price: '90.00 د.إ', image: iceCreamPhoto, category: 'cakes' },

  // ================= TEA & COFFEE (empty) =================

  // ================= GIFTING (empty) =================
  // ================= TURKISH DELIGHT (catalog D030–D047) =================
  { id: 'turkish-delight-d030-traditional-plain', title: 'Traditional Plain', price: 'Price on request', image: traditionalPlain, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d031-orange', title: 'Orange', price: 'Price on request', image: IMG.a, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d032-mint', title: 'Mint', price: 'Price on request', image: mint, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d033-rose', title: 'Rose', price: 'Price on request', image: rose, category: 'turkish-delight', sizeInfo: '5 KG Box' },
];

export const CATEGORY_META = {
  assorted: { title: 'Assorted Baklawa', subtitle: 'Pistachio, walnut & hazelnut' },
  mixed: { title: 'Mixed Baklawa', subtitle: 'Build your own combination' },
  kunafa: { title: 'Kunafa', subtitle: 'Warm, crisp & syrup-soaked' },
  cakes: { title: 'Delights, Cake & Ice Cream', subtitle: 'Pastry, cakes & more' },
  tea: { title: 'Tea & Coffee', subtitle: 'The perfect pairing' },
  gifting: { title: 'Gifting Collection', subtitle: 'Special gift' },
  'turkish-delight': { title: 'Turkish Delight', subtitle: 'Soft, sweet, and traditional' },
};