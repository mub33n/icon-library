import React from 'react';

export default function ChocolateBar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M46 10L30 26m24-8L38 34m-8-24l24 24m-8 8l16-16L38 2 22 18" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M1.964 37.963l20.01-20.011 24 24-20.011 20.01z" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M39.3 35.4l-16-5.4V19.4" />
    </svg>
  );
}
