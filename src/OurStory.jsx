import React from 'react';
import { Sparkles, Leaf, Award } from 'lucide-react';
import FadeInSection from './FadeInSection';
import GlowBackground from './GlowBackground';
import FloatingSparkles from './FloatingSparkles';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.14c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Fresh',
    body: "We take pride in producing premium Turkish sweets daily at our state-of-the-art facilities in Dubai, which are designed to create traditional Turkish sweets in compliance with Dubai Municipality and HACCP guidelines. Our fresh, handcrafted sweets are delivered to your doorstep daily across the UAE.",
  },
  {
    icon: Leaf,
    title: 'Natural',
    body: 'At Baklawa Factory we are producing our products using only natural and premium quality ingredients. We carefully select the finest pistachios, walnuts, and other ingredients to ensure the highest standards of taste and quality without any additives. This commitment to purity and authenticity allows us to deliver a truly exceptional baklawa experience.',
  },
  {
    icon: Award,
    title: 'Authentic',
    body: 'The Middle East is renowned for its diverse and picturesque sweets with spectacular tastes. Baklawa (Baklava), Kanafa, and Kadayif are just a few examples. Our products are handcrafted with meticulous attention to detail, following authentic recipes and methods for the preparation of our Baklawa products.',
  },
];

export default function OurStory() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="relative bg-[#1C1712] text-[#F6EFDF] py-24 px-6 text-center overflow-hidden">
        <GlowBackground />
        <FloatingSparkles />
        <p className="relative uppercase tracking-[0.25em] text-xs font-semibold text-[#C6952C] mb-5">
          Our story
        </p>
        <h1 className="relative font-serif text-5xl md:text-6xl leading-tight max-w-3xl mx-auto">
          Three decades of hand-folded filo, roasted pistachio, and syrup poured at exactly the right moment.
        </h1>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6 text-[#1C1712]/80 leading-relaxed text-lg">
        <FadeInSection>
        <p>
          Since 2015, Baklawa Factory has been producing Authentic Turkish Baklawa daily at our
          state-of-the-art production facilities in Dubai. Spanning over 2300 sq ft, our facility
          is designed to create traditional Turkish sweets in compliance with Dubai Municipality
          and HACCP guidelines.
        </p>
        <p>
          We use only natural ingredients to craft premium-quality Baklawa, fully handcrafted and
          following authentic Turkish recipes. Our delicious Baklawa assortments are delivered
          fresh to your doorstep daily, allowing your loved ones to share special moments with
          their families and friends. We also offer services for events and gatherings. Our
          specialized team is ready to serve your guests in the traditional way, making their
          experience unforgettable.
        </p>
        <p>Be our guest and visit our outlets to experience the spectacular taste of the Middle East.</p>

        <a
          href="https://www.instagram.com/thebaklawafactory/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#6E1F2A] font-semibold hover:underline"
        >
          <InstagramIcon className="w-5 h-5" />
          @thebaklawafactory
        </a>
        </FadeInSection>
      </section>

      {/* Fresh / Natural / Authentic */}
      <section className="bg-white py-20">
        <FadeInSection>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-[#F6EFDF] rounded-3xl p-8 border border-[#0F2A1E]/5 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#0F2A1E] flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-[#C6952C]" />
              </div>
              <h3 className="font-serif text-2xl text-[#0F2A1E] mb-3 tracking-wide uppercase">
                {title}
              </h3>
              <p className="text-sm text-[#1C1712]/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        </FadeInSection>
      </section>
    </div>
  );
}