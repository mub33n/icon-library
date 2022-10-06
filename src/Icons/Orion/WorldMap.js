import React from 'react';

export default function WorldMap(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M53.9 28.4A26 26 0 1141 13m-2.1-1c-5.8 2.8-9.9 3.1-9.9 6.7s5.2 1.5 5.2 5.2-4 6.3-6.9 4.4-6.9-3-10.4 1.8-1.2 10.4 1.3 10.3 4.8-2.4 5.9.6 1.3 3 2.4 3.6 1.2 1.9.8 3.6 1.8 6.9 3.5 6.9 3.3-.7 3.5-3.5 2.3-2.9 3.3-3.7-.7-3.7 1.1-5.6 5.7-5.4 2.5-6.3-3-1.5-3.5-2.9-1.8-2.8.9-2.9a10.3 10.3 0 007.4-3.1l.7-.7" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M51 2a10 10 0 00-10 10c0 9 10 20 10 20s10-11 10-20A10 10 0 0051 2z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={2} cy={12} cx={51} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
