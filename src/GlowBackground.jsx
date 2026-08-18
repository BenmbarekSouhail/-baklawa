import React from 'react';

/**
 * Drop this as the first child inside any section with `relative overflow-hidden`
 * and a dark base background (e.g. bg-[#1C1712]). Renders three large, heavily
 * blurred color blooms behind the content for a layered, premium dark look.
 */
export default function GlowBackground() {
  return (
    <>
      <div className="absolute -top-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#6E1F2A] opacity-40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-[#C6952C] opacity-25 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-[24rem] h-[24rem] rounded-full bg-[#0F2A1E] opacity-50 blur-[100px] pointer-events-none" />
    </>
  );
}