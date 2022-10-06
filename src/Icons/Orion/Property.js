import React from 'react';

export default function Property(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M54 22.6V8h-9v7.445M40 62h14V29.769M10 30v32h14" strokeLinejoin="round" />
      <circle data-name="layer2" cx={32} cy={29} r={5} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M24 42h16v20H24zm8-37L2.436 28.651a.5.5 0 00-.036.749l3.287 3.287a.5.5 0 00.668.035L32 12l25.65 20.718a.5.5 0 00.668-.035l3.287-3.283a.5.5 0 00-.041-.744z" strokeLinejoin="round" />
    </svg>
  );
}
