import React from 'react';

export default function CampFire(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 62l46-14m-9.8 9.2L58 62M12 48l9.9 3" />
      <path data-name="layer1" d="M28 46c-7-1.3-14-4.5-14-12s7.4-9.1 4-14c3.6 2.2 5.7 4.9 6 8 0-6.2 1.3-8.3 4-12s2.9-11.1 2-14c6.4 3.2 13.5 10.7 12 24a18.1 18.1 0 004-12s16.3 25.2-8 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
