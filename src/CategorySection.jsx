import React from 'react';
import ProductCard from './ProductCard';
import AssortedProductCard from './AssortedProductCard';
import FadeInSection from './FadeInSection';

export default function CategorySection({ id, eyebrow, title, products, groups, tint = false }) {
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

        {/* Grouped mode: side-by-side columns, each with its own heading
            (used for Assorted Baklawa: Pistachio | Walnut | Hazelnut) */}
        {groups ? (
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {groups.map((group) => (
              <div key={group.key} className="md:border-r md:last:border-r-0 md:border-[#0F2A1E]/10 md:pr-8 md:last:pr-0">
                <h3 className="font-serif text-2xl text-[#0F2A1E] mb-6 pb-3 border-b border-[#0F2A1E]/10">
                  {group.label}
                </h3>
                {group.products.length === 0 ? (
                  <p className="text-sm text-[#1C1712]/50 italic">
                    Coming soon.
                  </p>
                ) : (
                  <div className="space-y-6">
                    {group.products.map((item) => (
                      <AssortedProductCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          products.length === 0 ? (
            <p className="text-sm text-[#1C1712]/50 italic">Coming soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          )
        )}
      </FadeInSection>
    </section>
  );
}