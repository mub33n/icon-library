import React from 'react';

export default function Pills(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M42 20v5m-8.748-14.922L12.779 30.651M29.628 8.864L9.315 29.278m30.832-4.226A8.2 8.2 0 0042 20c0-6.627-8.954-12-20-12S2 13.373 2 20s8.954 12 20 12q.938 0 1.854-.051" strokeLinejoin="round" />
      <path data-name="layer2" d="M22 40C10.954 40 2 34.627 2 28v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M30.748 27.078l20.473 20.573M34.372 25.864l20.313 20.414" strokeLinejoin="round" />
      <ellipse data-name="layer1" cx={42} cy={37} rx={20} ry={12} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M22 37v8c0 6.627 8.954 12 20 12s20-5.373 20-12v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
