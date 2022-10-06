import React from 'react';

export default function Drink(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M13 52v8a2 2 0 002 2h26a2 2 0 002-2v-8m8-50H39a4 4 0 00-4 4v38" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 16h30v36H13z" />
    </svg>
  );
}
