import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Heart, Plus } from 'lucide-react';
import { useCart } from './CartContext';
import ProductGalleryModal from './ProductGalleryModal';

export default function AssortedProductCard({ item }) {
  const { addItem, toggleWishlist, wishlist } = useCart();
  const [open, setOpen] = useState(false);
  const isWished = wishlist.includes(item.id);
  const [broken, setBroken] = useState({});
  const rawImages = item.images || [item.image, item.image2].filter(Boolean);
  const images = rawImages.filter((src) => !broken[src]);
  const cover = images[0];

  // The cart needs a single `price` and `image`, so we build a cart-safe item.
  const addToCart = (size) => {
    addItem({
      ...item,
      id: size ? `${item.id}-${size.label}` : item.id,
      title: size ? `${item.title} (${size.label})` : item.title,
      price: size ? size.price : item.price,
      image: cover,
    });
  };

  const plusBtn = (onClick, label) => (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-8 h-8 rounded-full border border-[#0F2A1E] text-[#0F2A1E] flex items-center justify-center hover:bg-[#0F2A1E] hover:text-[#F6EFDF] transition-colors cursor-pointer shrink-0"
    >
      <Plus className="w-4 h-4" />
    </button>
  );

  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-[#0F2A1E]/10 hover:shadow-lg transition-shadow">
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${item.title} photos`}
        onClick={() => images.length > 0 && setOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && images.length > 0 && setOpen(true)}
        className={`relative grid ${images.length <= 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-[2px] bg-[#0F2A1E]/10 ${images.length > 0 ? 'cursor-zoom-in' : ''}`}
      >
        {images.length === 0 && (
          <div className="aspect-square flex flex-col items-center justify-center gap-1 bg-[#F6EFDF] text-[#0F2A1E]/50">
            <span className="font-serif text-xl">Photo coming soon</span>
          </div>
        )}
        {images.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden bg-[#F6EFDF]">
            <img
              src={src}
              decoding="async"
              onError={() => setBroken((b) => ({ ...b, [src]: true }))}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={`${item.title} ${i + 1}`}
            />
          </div>
        ))}
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
      </div>

      <div className="p-4">
        <p className="font-semibold text-[#1C1712]">{item.title}</p>

        {item.ingredients && (
          <p className="text-xs text-[#1C1712]/60 mt-1.5 leading-relaxed">{item.ingredients}</p>
        )}

        <div className="mt-3">
          {item.sizes ? (
            <div className="space-y-2">
              {item.sizes.map((s) => (
                <div key={s.label} className="flex items-center justify-between gap-3">
                  <p className="text-sm text-[#1C1712]/70">
                    <span className="font-medium text-[#0F2A1E]">{s.price}</span>{' '}
                    <span className="text-xs">({s.label})</span>
                  </p>
                  {plusBtn(() => addToCart(s), `Add ${item.title} ${s.label} to cart`)}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-[#1C1712]/60">{item.price}</p>
              {plusBtn(() => addToCart(), `Add ${item.title} to cart`)}
            </div>
          )}
        </div>
      </div>

      {open &&
        createPortal(
          <ProductGalleryModal item={{ ...item, images }} onClose={() => setOpen(false)} />,
          document.body
        )}
    </div>
  );
}