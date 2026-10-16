import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGalleryModal({ item, onClose }) {
  const images = item.images || [item.image, item.image2].filter(Boolean);
  const [index, setIndex] = useState(0);
  const many = images.length > 1;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && many) prev();
      if (e.key === 'ArrowRight' && many) next();
    };
    document.addEventListener('keydown', onKey);
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = old;
    };
  }, [images.length]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1712]/85 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative flex max-h-full w-full max-w-5xl flex-col overflow-hidden bg-[#F6EFDF] md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-full bg-[#0F2A1E] p-2 text-[#F6EFDF] hover:bg-[#6E1F2A]"
        >
          <X size={18} />
        </button>

        <div className="relative flex min-h-[260px] flex-1 items-center justify-center bg-[#1C1712]">
          <img
            src={images[index]}
            alt={`${item.title} photo ${index + 1}`}
            className="max-h-[60vh] w-full object-contain md:max-h-[85vh]"
          />
          {many && (
            <>
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#F6EFDF]/90 p-2 text-[#0F2A1E] hover:bg-[#C6952C]"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#F6EFDF]/90 p-2 text-[#0F2A1E] hover:bg-[#C6952C]"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <div className="flex w-full flex-col gap-4 overflow-y-auto p-5 md:w-80">
          <h3 className="font-serif text-3xl leading-tight text-[#0F2A1E]">{item.title}</h3>

          {many && (
            <div className="flex flex-wrap gap-2">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`h-16 w-16 overflow-hidden border-2 ${
                    i === index ? 'border-[#C6952C]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {item.ingredients && (
            <p className="text-sm leading-relaxed text-[#1C1712]/80">
              <span className="font-semibold text-[#0F2A1E]">Ingredients: </span>
              {item.ingredients}
            </p>
          )}

          {item.sizes ? (
            <ul className="divide-y divide-[#0F2A1E]/15 border-y border-[#0F2A1E]/15 text-sm">
              {item.sizes.map((s) => (
                <li key={s.label} className="flex justify-between py-2">
                  <span>{s.label}</span>
                  <span className="font-semibold text-[#6E1F2A]">{s.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-semibold text-[#6E1F2A]">{item.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}