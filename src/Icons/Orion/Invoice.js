import React from 'react';

export default function Invoice(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M19 20h16M19 36h16m-16-8h12M19 44h12m12-24h2m-2 16h2m-2-8h2m-2 16h2" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M23 2zm12 0zm11.9 0zM53 8l-6.1-6L41 6l-6-4-6 4-6-4-6 4-6-4v54l6.1 6 5.9-4 6 4 6-4 6 4 6-4 6 4V8zM41 62zm-12 0zm-11.9 0z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
