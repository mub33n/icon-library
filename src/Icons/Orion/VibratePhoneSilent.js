import React from 'react';

export default function VibratePhoneSilent(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer1" x={18} y={6} width={28} height={52} rx={4} ry={4} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 14h28M18 46h28" />
      <path data-name="layer2" d="M52.5 22a22.1 22.1 0 010 16m-41 0a22.1 22.1 0 010-16m48-4a30.1 30.1 0 010 24m-55 0a30.1 30.1 0 010-24" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={32} cy={52} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
