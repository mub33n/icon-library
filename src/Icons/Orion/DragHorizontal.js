import React from 'react';

export default function DragHorizontal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M29 29H15.4l3.1-2.8-4-4.4L3 32l11.5 10.2 4-4.4-3.1-2.8H29m6 0h13.6l-3.1 2.8 4 4.4L61 32 49.5 21.8l-4 4.4 3.1 2.8H35" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M29 6h6v52h-6z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
