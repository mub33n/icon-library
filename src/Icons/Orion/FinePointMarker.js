import React from 'react';

export default function FinePointMarker(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M27.5 17.8L41.7 3.6a5.4 5.4 0 017.6 0l1.8 1.8M19.5 52.7l26.6-26.6-7.8-7.7L11.7 45" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M46.1 26.1l15.5-15.5-7.8-7.8-15.5 15.6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M5.674 53.074l7.07-7.07 5.658 5.656-7.071 7.071zM8.5 55.9L2.4 62" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
