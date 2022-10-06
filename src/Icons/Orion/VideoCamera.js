import React from 'react';

export default function VideoCamera(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M40 41.5a1.5 1.5 0 01-1.5 1.5h-23a1.5 1.5 0 01-1.5-1.5v-19a1.5 1.5 0 011.5-1.5h23a1.5 1.5 0 011.5 1.5zM52 23v18l-12-5v-8l12-5z" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer1" x={2} y={2} width={60} height={60} rx={10} ry={10} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
