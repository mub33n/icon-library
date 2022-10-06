import React from 'react';

export default function Music(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M2 54a8 8 0 0016 0v-8h-8a8 8 0 00-8 8zm30-8a8 8 0 0016 0v-8h-8a8 8 0 00-8 8zM18 20v26m30-34v26" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 10v10.1l30-8V2l-30 8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
