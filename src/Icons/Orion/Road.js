import React from 'react';

export default function Road(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M52.1 2C32.1 2 24 14.2 24 20s4 6.1 4 12c0 8.2-24 20-24 20M58 8c-7.5 0-14 4.2-14 10s14 10.2 14 26c0 14.1-10 18-10 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M42 10l-1.3.7m-4.4 41.4l-1.8 1.6m7.1-9.8a14 14 0 01-1.5 3.6m.9-11.8a16 16 0 01.7 2.7m-5.5-11l1.8 2.7m-4.3-10.7a10.5 10.5 0 00.3 3m4.1-10.2a13.2 13.2 0 00-2.4 2.1m-6.4 42.9L28 58" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
