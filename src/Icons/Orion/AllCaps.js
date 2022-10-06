import React from 'react';

export default function AllCaps(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M62 20v-4H38m10 0v36m4 0h-8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M30 20v-4H2v4m14-4v36m4 0h-8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
