import React from 'react';

export default function Fridge(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M12 26v32a4 4 0 004 4h32a4 4 0 004-4V26M48 2H16a4 4 0 00-4 4v20h40V6a4 4 0 00-4-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 10v8m0 16v10" />
    </svg>
  );
}
