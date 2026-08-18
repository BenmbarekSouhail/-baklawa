import React from 'react';
import { X, Heart, Plus } from 'lucide-react';
import { useCart } from './CartContext';

export default function QuickView() {
  const { quickViewProduct, setQuickViewProduct, addItem, toggleWishlist, wishlist } = useCart();

  if (!quickViewProduct) return null;
  const p = quickViewProduct;
  const isWished = wishlist.includes(p.id);

  const close = () => setQuickViewProduct(null);

  return (
    <div
      className="fixed inset-0 z-[70] bg-[#1C1712]/70 flex items-center justify-center px-4 py-8"
      onClick={close}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden grid md:grid-cols-2 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#F6EFDF] aspect-square md:aspect-auto md:h-full">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
          {p.badge && (
            <span
              className={`absolute top-4 left-4 text-[11px] font-bold px-3 py-1 rounded-full ${
                p.badge === 'New' ? 'bg-[#6E1F2A] text-[#F6EFDF]' : 'bg-[#C6952C] text-[#0F2A1E]'
              }`}
            >
              {p.badge}
            </span>
          )}
        </div>

        <div className="p-7 overflow-y-auto">
          <button
            onClick={close}
            aria-label="Close quick view"
            className="float-right text-[#1C1712]/50 hover:text-[#1C1712] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <p className="uppercase tracking-[0.2em] text-[11px] font-semibold text-[#6E1F2A] mb-2">
            {p.category}
          </p>
          <h2 className="font-serif text-3xl text-[#0F2A1E] leading-tight pr-6">{p.title}</h2>
          <p className="text-[#C6952C] font-semibold mt-2">{p.price}</p>

          <div className="mt-6 space-y-5 text-sm">
            {p.consumption && (
              <div>
                <p className="font-semibold text-[#0F2A1E] mb-1">Consumption</p>
                <p className="text-[#1C1712]/70 leading-relaxed">{p.consumption}</p>
              </div>
            )}
            {p.ingredients && (
              <div>
                <p className="font-semibold text-[#0F2A1E] mb-1">Ingredients</p>
                <p className="text-[#1C1712]/70 leading-relaxed">{p.ingredients}</p>
              </div>
            )}
            {p.sizeInfo && (
              <div>
                <p className="font-semibold text-[#0F2A1E] mb-1">Box size</p>
                <p className="text-[#1C1712]/70 leading-relaxed">{p.sizeInfo}</p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => addItem(p)}
              className="flex-1 flex items-center justify-center gap-2 bg-[#0F2A1E] text-[#F6EFDF] py-3 rounded-full text-sm font-semibold hover:bg-[#0A1D15] transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add to cart
            </button>
            <button
              onClick={() => toggleWishlist(p.id)}
              aria-label="Toggle wishlist"
              className="w-11 h-11 rounded-full border border-[#0F2A1E]/20 flex items-center justify-center hover:border-[#6E1F2A] transition-colors cursor-pointer shrink-0"
            >
              <Heart
                className="w-4 h-4"
                fill={isWished ? '#6E1F2A' : 'none'}
                stroke={isWished ? '#6E1F2A' : '#1C1712'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}