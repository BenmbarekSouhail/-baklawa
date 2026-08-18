import React from 'react';
import { Heart, Plus, ZoomIn } from 'lucide-react';
import { useCart } from './CartContext';

export default function ProductCard({ item }) {
  const { addItem, toggleWishlist, wishlist, setQuickViewProduct } = useCart();
  const isWished = wishlist.includes(item.id);

  return (
    <div className="group">
      <button
        onClick={() => setQuickViewProduct(item)}
        aria-label={`View ${item.title}`}
        className="relative w-full rounded-2xl overflow-hidden bg-[#F6EFDF] aspect-square cursor-zoom-in block"
      >
        <img
          src={item.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={item.title}
        />
        {item.badge && (
          <span
            className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full ${
              item.badge === 'New'
                ? 'bg-[#6E1F2A] text-[#F6EFDF]'
                : 'bg-[#C6952C] text-[#0F2A1E]'
            }`}
          >
            {item.badge}
          </span>
        )}
        <span className="absolute inset-0 bg-[#1C1712]/0 group-hover:bg-[#1C1712]/25 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2.5">
            <ZoomIn className="w-4 h-4 text-[#1C1712]" />
          </span>
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(item.id);
          }}
          role="button"
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#1C1712] hover:text-[#6E1F2A] transition-colors cursor-pointer"
        >
          <Heart
            className="w-4 h-4"
            fill={isWished ? '#6E1F2A' : 'none'}
            stroke={isWished ? '#6E1F2A' : 'currentColor'}
          />
        </span>
      </button>
      <div className="pt-4">
        <button
          onClick={() => setQuickViewProduct(item)}
          className="font-semibold text-[#1C1712] text-left hover:text-[#6E1F2A] transition-colors cursor-pointer"
        >
          {item.title}
        </button>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-[#1C1712]/60">{item.price}</p>
          <button
            onClick={() => addItem(item)}
            aria-label={`Add ${item.title} to cart`}
            className="w-9 h-9 rounded-full border border-[#0F2A1E] text-[#0F2A1E] flex items-center justify-center hover:bg-[#0F2A1E] hover:text-[#F6EFDF] transition-colors cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
