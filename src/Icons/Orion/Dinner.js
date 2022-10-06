import React from 'react';

export default function Dinner(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx="33.002" cy="34.991" r={19} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer2" cx="33.002" cy="34.991" r={11} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M2 14v7.428c0 1.482 1.865 4.57 5.906 4.57 4.042 0 6.094-2.1 6.094-4.941V14m-5.999 0v38.001m47.999 0V14s5.999 8.367 5.999 22.001H56" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
