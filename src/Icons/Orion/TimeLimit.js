import React from 'react';

export default function TimeLimit(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M54 6v10H44M32 59a27 27 0 1121.751-43m-8.766 39.678A26.819 26.819 0 0138 58.331M53.751 48a27.159 27.159 0 01-4.711 4.945m8.751-12.932a26.821 26.821 0 01-1.58 3.952" strokeLinejoin="round" />
      <circle data-name="layer1" cx={32} cy={32} r={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M33.961 34.261L44 42M32 12v17" strokeLinejoin="round" />
    </svg>
  );
}
