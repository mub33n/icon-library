import React from 'react';

export default function Barbecue(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 22H2m60 0h-5.9M32 14V2M18 14V8m28 6V6" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 62l9.3-12.9M48 62l-9-13m17-23a24 24 0 01-48 0v-6h48z" />
    </svg>
  );
}
