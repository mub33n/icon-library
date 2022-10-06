import React from 'react';

export default function Liquor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M27 10v13.2A16 16 0 0017 38v21c0 1.7 1.8 3 7 3h16c5 0 7-1.3 7-3V38a16 16 0 00-10-14.8V10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M25 2h14v8H25zm0 34h14v14H25z" />
    </svg>
  );
}
