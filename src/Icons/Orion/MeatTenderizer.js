import React from 'react';

export default function MeatTenderizer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M37.2 33.1L9 61.4a2 2 0 01-2.8 0l-2.9-2.8a2 2 0 010-2.8l28.3-28.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M37.2 2v8.5l-7.7-.7.7 7.8h-8.5l24 24 15.6-15.5L37.2 2z" />
    </svg>
  );
}
