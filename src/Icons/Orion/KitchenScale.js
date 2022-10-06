import React from 'react';

export default function KitchenScale(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M6 3l4 5.999h44L58 3M31.998 9.059v15.692" strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M12 25.001h40l8 36H4l8-36z" strokeLinejoin="round" />
      <circle data-name="layer1" cx="32.001" cy="43.002" r="10.001" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32.002 43.003l7.072-7.07" strokeLinejoin="round" />
    </svg>
  );
}
