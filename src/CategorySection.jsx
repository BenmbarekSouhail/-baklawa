import React from 'react';
import ProductCard from './ProductCard';
import FadeInSection from './FadeInSection';

export default function CategorySection({ id, eyebrow, title, products, tint = false }) {
  return (
    <section
      id={id}
      className={`px-6 py-20 scroll-mt-28 ${tint ? 'bg-white' : ''}`}
    >
      <FadeInSection className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#6E1F2A] mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-4xl text-[#0F2A1E]">{title}</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}