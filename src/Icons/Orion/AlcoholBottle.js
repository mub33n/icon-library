import React from 'react';

export default function AlcoholBottle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M44 38v-4c0-6-8-10-8-14v-8m-8 0v8c0 4-8 8-8 14v4m0 14v7c0 1.7 1.2 3 7 3h10c5.5 0 7-1.3 7-3v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 38h24v14H20zm8-36h8v10h-8z" />
    </svg>
  );
}
