import React from 'react';

export default function CocktailGlass(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 30v32m-10 0h20m7.3-54a54.4 54.4 0 00.7-6H14a54.2 54.2 0 00.7 6" />
      <path data-name="layer1" d="M32 30c11.7 0 15.8-13.8 17.3-22H14.7c1.5 8.2 5.6 22 17.3 22z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
