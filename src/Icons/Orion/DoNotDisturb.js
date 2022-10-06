import React from 'react';

export default function DoNotDisturb(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46 32V17a15 15 0 00-30 0 4 4 0 008 .1 7 7 0 1112.2 4.7C30.7 27.1 16 26.2 16 36v24a2 2 0 002 2h26a2 2 0 002-2V32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 36h14v18H24z" />
    </svg>
  );
}
