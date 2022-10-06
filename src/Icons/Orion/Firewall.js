import React from 'react';

export default function Firewall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 32h44v30H2z" />
      <path data-name="layer2" d="M46 52a16 16 0 0016-16c0-11.4-4-18-4-18a28.1 28.1 0 01.8 8.4 24.8 24.8 0 01-4.4 13.1c1.6-3 1.1-13.6-2.4-21.5S42.1 6.3 36 2c5.6 4.3 7.5 12.2 6.4 18.4A27.5 27.5 0 0137.8 32s2.4-3.9.4-10a15.4 15.4 0 00-6.2-8c8 8.1.3 9.1-1.6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 42h44M2 52h44M24 42v10M14 32v10m20-10v10M14 52v10m20-10v10" />
    </svg>
  );
}
