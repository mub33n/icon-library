import React from 'react';

export default function CloudySnowfall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 50v4m2-2h-4m18 0h-4m2 2v-4m-5 10h-4m2 2v-4m15 0v4m2-2h-4m8-10v4m2-2h-4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M17.7 31a10 10 0 1113.5-13M22 2v4M6 22H2M8 8l3 3m25-3l-3 3M11 33l-3 3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M50 24a13 13 0 00-25 4.1h-1a8 8 0 100 16h26a10 10 0 000-20z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
