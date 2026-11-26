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
import traditionalPlain from './assets/six-mix.png';
import mint from './assets/eight-mix.png';
import rose from './assets/nine-mix.png';
import iceCreamBowl from './assets/ice-cream-bowl.jpg';
import iceCream1kg from './assets/ice-cream-1kg.jpg';

// Assorted Baklawa — Pistachio
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
import pistachioType11A from './assets/pistachio-type11-a.jpg';
import pistachioType11B from './assets/pistachio-type11-b.jpg';
import pistachioType12A from './assets/pistachio-type12-a.jpg';
import pistachioType12B from './assets/pistachio-type12-b.jpg';
import pistachioType13A from './assets/pistachio-type13-a.jpg';
import pistachioType13B from './assets/pistachio-type13-b.jpg';
import pistachioType14A from './assets/pistachio-type14-a.jpg';
import pistachioType14B from './assets/pistachio-type14-b.jpg';
import pistachioType15A from './assets/pistachio-type15-a.jpg';
import pistachioType15B from './assets/pistachio-type15-b.jpg';
import pistachioType16A from './assets/pistachio-type16-a.jpg';
import pistachioType16B from './assets/pistachio-type16-b.jpg';
import pistachioType17A from './assets/pistachio-type17-a.jpg';
import pistachioType17B from './assets/pistachio-type17-b.jpg';
import pistachioType18A from './assets/pistachio-type18-a.jpg';
import pistachioType19A from './assets/pistachio-type19-a.jpg';

// Assorted Baklawa — Walnut
import walnutType1A from './assets/walnut-type1-a.jpg';
import walnutType2A from './assets/walnut-type2-a.jpg';
import walnutType2B from './assets/walnut-type2-b.jpg';
import walnutType3A from './assets/walnut-type3-a.jpg';
import walnutType3B from './assets/walnut-type3-b.jpg';
import walnutType4A from './assets/walnut-type4-a.jpg';
import walnutType5A from './assets/walnut-type5-a.jpg';
import walnutType6A from './assets/walnut-type6-a.jpg';
import walnutType7A from './assets/walnut-type7-a.jpg';
import walnutType8A from './assets/walnut-type8-a.jpg';
import walnutType9A from './assets/walnut-type9-a.jpg';
import walnutType9B from './assets/walnut-type9-b.jpg';

// Assorted Baklawa — Hazelnut
import hazelnutType1A from './assets/hazelnut-type1-a.png';
import hazelnutType2A from './assets/hazelnut-type2-a.png';
import hazelnutType3A from './assets/hazelnut-type3-a.jpg';
import hazelnutType4B from './assets/hazelnut-type4-b.jpg';
import hazelnutType5A from './assets/hazelnut-type5-a.jpg';
import hazelnutType6A from './assets/hazelnut-type6-a.png';
import hazelnutType7A from './assets/hazelnut-type7-a.jpg';

// NOTE: assorted1.png–assorted10.png are still in /assets from an earlier
// round but are not used. Tell Claude which product each one shows and
// they can be wired back in.

const DEFAULT_INGREDIENTS = 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Pure Ghee Oil';
const WALNUT_INGREDIENTS = 'Flour, Eggs, Cream, Starch, Sugar, Walnut, Pure Ghee Oil';
const HAZELNUT_INGREDIENTS = 'Flour, Eggs, Cream, Starch, Sugar, Hazelnut, Pure Ghee Oil';

export const products = [
  // ================= ASSORTED BAKLAWA =================
  // category 'assorted', subcategory 'pistachio' | 'walnut' | 'hazelnut',
  // images (1-4 photos), then either price or sizes, plus ingredients.
  { id: 'pistachio-type-1', title: 'Type 1', category: 'assorted', subcategory: 'pistachio', images: [pistachioType1A, pistachioType1B], sizes: [{ label: '2 KG', price: 'AED 500' }, { label: '500 G', price: 'AED 125' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-2', title: 'Square Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType2A, pistachioType2B, pistachioType2C, pistachioType2D], price: 'AED 250', ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-3', title: 'Midya Pistachio', category: 'assorted', subcategory: 'pistachio', images: [pistachioType3A, pistachioType3B, pistachioType3C, pistachioType3D], price: 'AED 280', ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-4', title: 'Antep Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType4A, pistachioType4B], sizes: [{ label: '1 KG', price: 'AED 280' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-5', title: 'Open Sobiyet', category: 'assorted', subcategory: 'pistachio', images: [pistachioType5A, pistachioType5B], price: 'AED 280', ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-6', title: 'Kiss Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType6A, pistachioType6B, pistachioType6C, pistachioType6D], price: 'AED 280', ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-7', title: 'Papillon Pistachio', category: 'assorted', subcategory: 'pistachio', images: [pistachioType7A], price: 'AED 280', ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-8', title: 'Burma', category: 'assorted', subcategory: 'pistachio', images: [pistachioType8A, pistachioType8B, pistachioType8C], sizes: [{ label: '1 KG', price: 'AED 250' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-9', title: 'Mekik Pistachio', category: 'assorted', subcategory: 'pistachio', images: [pistachioType9A, pistachioType9B, pistachioType9C, pistachioType9D], sizes: [{ label: '1 KG', price: 'AED 250' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-10', title: 'Diamond Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType10A, pistachioType10B], price: 'Price on request', ingredients: DEFAULT_INGREDIENTS },
  {
    id: 'pistachio-type-11',
    title: 'Burger Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType11A, pistachioType11B],
    sizes: [
      { label: 'Ice cream only', price: 'AED 40' },
      { label: 'Piece with ice cream', price: 'AED 50' },
      { label: '2 KG plate (8 pieces)', price: 'AED 300' },
    ],
    ingredients: `${DEFAULT_INGREDIENTS}, Ice Cream`,
  },
  {
    id: 'pistachio-type-12',
    title: 'Square Chocolate Pistachio',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType12A, pistachioType12B],
    sizes: [
      { label: '2 KG', price: 'AED 500' },
      { label: '1 KG (24 pieces)', price: 'AED 250' },
      { label: '500 G', price: 'AED 125' },
    ],
    ingredients: DEFAULT_INGREDIENTS,
  },
  {
    id: 'pistachio-type-13',
    title: 'Gofret Pistachio Baklawa',
    category: 'assorted',
    subcategory: 'pistachio',
    images: [pistachioType13A, pistachioType13B],
    sizes: [
      { label: '2 KG', price: 'AED 500' },
      { label: '1 KG', price: 'AED 250' },
      { label: '500 G', price: 'AED 125' },
    ],
    ingredients: DEFAULT_INGREDIENTS,
  },
  { id: 'pistachio-type-14', title: 'Pistachio Roll', category: 'assorted', subcategory: 'pistachio', images: [pistachioType14A, pistachioType14B], sizes: [{ label: '2 KG (56 pieces)', price: 'AED 600' }, { label: '1 KG', price: 'AED 300' }, { label: '500 G', price: 'AED 150' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-15', title: 'Sarma', category: 'assorted', subcategory: 'pistachio', images: [pistachioType15A, pistachioType15B], sizes: [{ label: '2 KG (56 pieces)', price: 'AED 600' }, { label: '1 KG', price: 'AED 300' }, { label: '500 G', price: 'AED 150' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-16', title: 'Pistachio Bulbul', category: 'assorted', subcategory: 'pistachio', images: [pistachioType16A, pistachioType16B], sizes: [{ label: '2 KG (42 pieces)', price: 'AED 600' }, { label: '1 KG', price: 'AED 300' }, { label: '500 G', price: 'AED 150' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-17', title: 'Special Sobiyet', category: 'assorted', subcategory: 'pistachio', images: [pistachioType17A, pistachioType17B], sizes: [{ label: '2 KG', price: 'AED 600' }], ingredients: DEFAULT_INGREDIENTS },
  { id: 'pistachio-type-18', title: 'Pistachio Milk Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType18A], sizes: [{ label: '2 KG', price: 'AED 500' }], ingredients: `${DEFAULT_INGREDIENTS}, Milk` },
  { id: 'pistachio-type-19', title: 'Pistachio Chocolate Milk Baklawa', category: 'assorted', subcategory: 'pistachio', images: [pistachioType19A], sizes: [{ label: '2 KG (48 pieces)', price: 'AED 500' }], ingredients: `${DEFAULT_INGREDIENTS}, Milk, Chocolate` },

  // ---- Walnut ----
  { id: 'walnut-type-1', title: 'Square Walnut', category: 'assorted', subcategory: 'walnut', images: [walnutType1A], sizes: [{ label: '2 KG (48 pieces)', price: 'AED 440' }, { label: '1 KG', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-2', title: 'Walnut Mekik', category: 'assorted', subcategory: 'walnut', images: [walnutType2A, walnutType2B], sizes: [{ label: '1 KG', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-3', title: 'Walnut Roll', category: 'assorted', subcategory: 'walnut', images: [walnutType3A, walnutType3B], sizes: [{ label: '1 KG', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-4', title: 'Chocolate Walnut', category: 'assorted', subcategory: 'walnut', images: [walnutType4A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 250' }], ingredients: `${WALNUT_INGREDIENTS}, Chocolate` },
  { id: 'walnut-type-5', title: 'Walnut Burma', category: 'assorted', subcategory: 'walnut', images: [walnutType5A], sizes: [{ label: '1 KG (28 pieces)', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-6', title: 'Walnut Midya', category: 'assorted', subcategory: 'walnut', images: [walnutType6A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 250' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-7', title: 'Walnut Wrap', category: 'assorted', subcategory: 'walnut', images: [walnutType7A], sizes: [{ label: '1 KG (18 pieces)', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-8', title: 'Walnut Kiss', category: 'assorted', subcategory: 'walnut', images: [walnutType8A], sizes: [{ label: '1 KG (22 pieces)', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },
  { id: 'walnut-type-9', title: 'Walnut Twist', category: 'assorted', subcategory: 'walnut', images: [walnutType9A, walnutType9B], sizes: [{ label: '1 KG (19 pieces)', price: 'AED 220' }], ingredients: WALNUT_INGREDIENTS },

  // ---- Hazelnut ----
  { id: 'hazelnut-type-1', title: 'Hazelnut Antep', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType1A], sizes: [{ label: '1 KG (54 pieces)', price: 'AED 250' }], ingredients: HAZELNUT_INGREDIENTS },
  { id: 'hazelnut-type-2', title: 'Hazelnut Baklawa', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType2A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 220' }], ingredients: HAZELNUT_INGREDIENTS },
  { id: 'hazelnut-type-3', title: 'Sobiyet Hazelnut', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType3A], sizes: [{ label: '20 pieces', price: 'AED 250' }], ingredients: HAZELNUT_INGREDIENTS },
  { id: 'hazelnut-type-4', title: 'Square Chocolate Hazelnut', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType4B], sizes: [{ label: '24 pieces', price: 'AED 250' }], ingredients: `${HAZELNUT_INGREDIENTS}, Chocolate` },
  { id: 'hazelnut-type-5', title: 'Hazelnut Mekik', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType5A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 220' }], ingredients: HAZELNUT_INGREDIENTS },
  { id: 'hazelnut-type-6', title: 'Milky Hazelnut', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType6A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 220' }], ingredients: `${HAZELNUT_INGREDIENTS}, Milk` },
  { id: 'hazelnut-type-7', title: 'Square Chocolate Nut Free', category: 'assorted', subcategory: 'hazelnut', images: [hazelnutType7A], sizes: [{ label: '1 KG (24 pieces)', price: 'AED 200' }], ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Chocolate, Pure Ghee Oil' },

  // ================= MIXED BAKLAWA =================
  { id: 'mixed-pistachio-choco-mix', title: 'Pistachio and Choco Mix', price: '310.00 – 520.00 د.إ', image: IMG.a, category: 'mixed', consumption: 'To be consumed within 7 days after delivery and kept at room temperature. Best served warmed-up in the oven for a few seconds.', ingredients: 'Flour, Eggs, Cream, Starch, Sugar, Pistachio, Chocolate, Pure Ghee', sizeInfo: '1 KG Box — 22-24 Pieces' },
  { id: 'mixed-pistachio-green-wrap', title: 'Pistachio Green Wrap', price: 'Price on request', image: fiveMix, category: 'mixed', ingredients: 'Flour, Eggs, Starch, Sugar, Pistachio, Pure Ghee Oil, and cream', sizeInfo: '2 KG Tray — 32 Pieces' },

  // ================= CAKES & ICE CREAM =================

  { id: 'cakes-bowl-ice-cream', title: 'Bowl Ice Cream', price: '20.00 د.إ', image: iceCreamBowl, category: 'cakes', sizeInfo: 'Bowl' },
  { id: 'cakes-ice-cream-1kg', title: 'Ice Cream', price: '90.00 د.إ', image: iceCream1kg, category: 'cakes', sizeInfo: '1 KG' },

  // ================= TEA & COFFEE =================

  // ================= SPECIAL GIFTING =================

  // ================= TURKISH DELIGHT =================
  { id: 'turkish-delight-d030-traditional-plain', title: 'Traditional Plain', price: 'Price on request', image: traditionalPlain, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d031-orange', title: 'Orange', price: 'Price on request', image: IMG.a, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d032-mint', title: 'Mint', price: 'Price on request', image: mint, category: 'turkish-delight', sizeInfo: '5 KG Box' },
  { id: 'turkish-delight-d033-rose', title: 'Rose', price: 'Price on request', image: rose, category: 'turkish-delight', sizeInfo: '5 KG Box' },
];

export const CATEGORY_META = {
  assorted: { title: 'Assorted Baklawa', subtitle: 'Pistachio, walnut & hazelnut' },
  mixed: { title: 'Mixed Baklawa', subtitle: 'Build your own combination' },
  kunafa: { title: 'Kunafa', subtitle: 'Warm, crisp & syrup-soaked' },
  cakes: { title: 'Delights, Cake & Ice Cream', subtitle: 'Kunefe, pastry, cakes & more' },
  tea: { title: 'Tea & Coffee', subtitle: 'The perfect pairing' },
  gifting: { title: 'Gifting Collection', subtitle: 'Special gift' },
  'turkish-delight': { title: 'Turkish Delight', subtitle: 'Soft, sweet, and traditional' },
};