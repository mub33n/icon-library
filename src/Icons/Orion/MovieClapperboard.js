import React from 'react';

export default function MovieClapperboard(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 51h40" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 23l-8 8m.6-18l9.5 6.2m6.2-9.5l9.5 6.1m5.6-9.3l9.6 6.1M36 23l-8 8m26-8l-8 8m16 0v-8H2v8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 31h60v28H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M59.1 2.7L8 13.6C.7 15.1 2.1 23 2.1 23l58.7-12.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
