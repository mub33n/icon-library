import React from 'react';

export default function Mushroom(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M20 42a17.4 17.4 0 013.8 6h16.5a16.9 16.9 0 013.7-6m-20.2 6A38.7 38.7 0 0126 62h12a43.5 43.5 0 012.3-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M32 2C15.9 2 2 13.5 2 27.1S12 42 20 42h28c8 0 14-4.3 14-14.9S51.4 2 32 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
