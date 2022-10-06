import React from 'react';

export default function CabinBaggage(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M25 40h12v10H25zm-2 18v4m16-4v4" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 24h28v34H17zm8 0V5a3 3 0 013-3h6a3 3 0 013 3v19" />
    </svg>
  );
}
