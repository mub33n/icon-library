import React from 'react';

export default function TeaCup(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 3v16m6 16V25a6 6 0 00-6-6 6 6 0 00-6 6v10z" />
      <path data-name="layer1" d="M48 3v54a4 4 0 01-4 4H6a4 4 0 01-4-4V3zm0 10a14 14 0 0114 14v4a14 14 0 01-14 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M48 41a10 10 0 0010-10v-4a10 10 0 00-10-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
