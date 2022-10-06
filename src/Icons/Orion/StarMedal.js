import React from 'react';

export default function StarMedal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M34.9 37.4L48 24c1.9-1.9 4-4 4-8V2H12v14c0 4 2.1 6.1 4 8l13.2 13.2M12 14h40" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 56.8L22.1 62 24 51l-8-7.8 11.1-1.6 4.9-10 4.9 10L48 43.2 40 51l1.9 11-9.9-5.2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
