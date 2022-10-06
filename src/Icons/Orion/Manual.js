import React from 'react';

export default function Manual(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M14.8 3.2c2.2-2.1 6.4-.9 8.7.2L50 14.5v40.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M14 4.9v41.5c0 4 2.9 4.9 2.9 4.9L42 62V18.9L17.3 8.3c-2.2-1-4.6-3.1-2.5-5.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
