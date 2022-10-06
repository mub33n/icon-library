import React from 'react';

export default function SushiRoll(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry="5.999" rx="11.999" cy="22.014" cx={14} data-name="layer1" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M2 22.014v12c0 3.315 5.371 6 12 6s12-2.685 12-6v-12" data-name="layer1" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry="5.999" rx="11.999" cy="11.988" cx="34.009" data-name="layer1" />
      <path d="M60.001 28.016l-40 21.996m41.998-5.998L16.001 58.012" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry=".857" rx="2.571" cy="21.988" cx={14} data-name="layer2" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry=".856" rx="2.571" cy="11.961" cx="34.009" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M26 28.451a20 20 0 008.012 1.533c6.627 0 12-2.686 12-6v-12m-24.001.004v5.522" data-name="layer1" />
    </svg>
  );
}
