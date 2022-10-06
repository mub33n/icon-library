import React from 'react';

export default function EscalatorUp(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy="13.999" cx={26} data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M30 27.991V24a4 4 0 00-8 0v11.92m32 18.076V40m5.996 6.205L54 40l-5.996 6.205" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M55 27.984a7.003 7.003 0 000-14.006l-.01.003H44.002l-28 28.02h-6.99L9.002 42a7 7 0 000 14c.012 0 .025-.004.039-.004h10.961L48 27.984z" data-name="layer1" />
    </svg>
  );
}
