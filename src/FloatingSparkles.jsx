import React from 'react';

// Fixed set of sparkle positions/sizes/timings for a natural, non-repetitive look.
const SPARKLES = [
  { top: '18%', left: '12%', size: 6, duration: '4.5s', delay: '0s', dx: '14px', dy: '-22px', color: '#C6952C' },
  { top: '65%', left: '8%', size: 4, duration: '6s', delay: '0.75s', dx: '-10px', dy: '-18px', color: '#F6EFDF' },
  { top: '30%', left: '85%', size: 5, duration: '5.5s', delay: '0.4s', dx: '-16px', dy: '20px', color: '#C6952C' },
  { top: '75%', left: '78%', size: 7, duration: '6.5s', delay: '1.1s', dx: '12px', dy: '-16px', color: '#F6EFDF' },
  { top: '45%', left: '50%', size: 4, duration: '5s', delay: '1.5s', dx: '-14px', dy: '24px', color: '#C6952C' },
  { top: '20%', left: '60%', size: 5, duration: '7s', delay: '0.5s', dx: '18px', dy: '14px', color: '#F6EFDF' },
];

export default function FloatingSparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full blur-[1px] animate-float-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            '--duration': s.duration,
            '--drift-x': s.dx,
            '--drift-y': s.dy,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}