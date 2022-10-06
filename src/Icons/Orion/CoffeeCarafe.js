import React from 'react';

export default function CoffeeCarafe(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M56 15H14S2 26.83 2 35c0 8.06 5.84 8.169 8 8.17M14.002 9L20 14.998" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M11.266 35a26.046 26.046 0 018.127-12H62s-4 2-4 4c0 1.277 1.125 3.41 2 6 .274.654.516 1.322.737 2m-49.471 0a25.9 25.9 0 001.684 20h46.1a25.918 25.918 0 001.686-20z" data-name="layer1" />
    </svg>
  );
}
