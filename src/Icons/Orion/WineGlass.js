import React from 'react';

export default function WineGlass(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M47.8 18C47.3 11.3 46 2 46 2H18s-1.3 9.3-1.8 16M32 39.1V62m-10 0h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M16.2 18c-.1 1.5-.2 2.9-.2 4 0 6 5.5 16 16.2 16S48 28 48 22c0-1.1-.1-2.5-.2-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
