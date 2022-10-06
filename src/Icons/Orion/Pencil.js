import React from 'react';

export default function Pencil(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M55.737 16.309l3.674-3.67a5.675 5.675 0 10-8.025-8.025l-3.674 3.669" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M17.337 54.667l38.4-38.358-8.025-8.026L9.307 46.642 2.926 61.049l14.411-6.382zm-8.03-8.025l8.03 8.025" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
