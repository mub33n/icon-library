import React from 'react';

export default function AntennaGps(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 27l11-11M38 3.3A14 14 0 0156.7 22M42 9.4a7 7 0 018.6 8.6" />
      <path data-name="layer1" d="M16.1 10A24 24 0 0050 43.9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18.5 44.3L6 62h32l-9-12.5" />
    </svg>
  );
}
