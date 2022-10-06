import React from 'react';

export default function Cutter(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M20 41.4L3.4 58h20l7.8-7.8-2.4-2.4m-3.9-1.4l-5.3 5.4" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M17.6 39l9.9 10.1 6.2-6.2-10-10-6.1 6.1z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M33.7 42.9l24.8-24.8a7.1 7.1 0 00-10-10L23.7 32.9" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
