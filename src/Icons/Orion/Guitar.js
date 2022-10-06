import React from 'react';

export default function Guitar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M35 23.4A11.1 11.1 0 0022 25a10 10 0 00-1.8 2.5c-1 1.7-2.7 4.4-6.5 4.5h-.9a12.7 12.7 0 00-7.1 3.5C.3 41.1.9 50.6 7.1 56.9s15.7 6.9 21.2 1.4a12.6 12.6 0 003.5-7 1.9 1.9 0 00.1-.7 8.4 8.4 0 014.5-6.8A10 10 0 0039 42a11.1 11.1 0 001.7-13" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M20.2 38.1l34.1-34c1.6-1.6 2.7-3 4.2-1.4l2.8 2.8c1.6 1.6.1 2.7-1.4 4.2L25.8 43.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx="19.9" cy="44.1" r={6} transform="rotate(-45 19.892 44.16)" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M59.9 4.1l-47 47" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M9.4 47.6l7 7" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
