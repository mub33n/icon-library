import React from 'react';

export default function MoveObject(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M3 3.4l22.5 10-8.6 3.5-3.4 8.5L3 3.4z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M21.9 44.5l-6.1-6.1 6.1-6.1M44 54.4l-6.1 6.1-6.1-6.1m22.1-22.2l6.1 6.1-6.1 6.1m-22.2-22l6.1-6.1 6.2 6m-6.1-6.1v44.4M60 38.4H15.7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
