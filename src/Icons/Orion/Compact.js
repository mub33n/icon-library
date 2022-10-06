import React from 'react';

export default function Compact(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M10 43h6.3L3 57l4 4 14-14.5V54h6V37H10v6z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M53 42v-6H36v17h6v-6.8L56.8 61l4.2-4.2L46.2 42H53z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
      <path d="M53 21h-6.5L61 7l-4-4-15 14.2V10h-6v17h17v-6z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M22 17.8L7 3 3 7l14.8 15H11v6h17V11h-6v6.8z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
