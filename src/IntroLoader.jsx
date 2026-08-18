import React, { useState, useEffect } from 'react';
import logo from './assets/baklawa.png';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const removeTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#1C1712] flex flex-col items-center justify-center transition-opacity duration-1000 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src={logo}
        alt="Baklawa Factory"
        className={`h-16 w-16 object-contain mb-4 transition-all duration-1000 ease-out ${
          fading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      />
      <p
        className={`font-serif text-3xl text-[#F6EFDF] tracking-wide transition-all duration-1000 ease-out delay-100 ${
          fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        Baklawa Factory<span className="text-[#C6952C]">.</span>
      </p>
      <p
        className={`mt-2 text-[10px] uppercase tracking-[0.3em] text-[#C6952C] transition-opacity duration-1000 ease-out delay-200 ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Fresh &middot; Authentic &middot; Natural
      </p>
    </div>
  );
}