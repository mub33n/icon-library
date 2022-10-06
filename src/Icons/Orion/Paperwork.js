import React from 'react';

export default function Paperwork(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 14V2h48v60H42" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4 14h38v48H4zm10 10h18M14 34h18m-18 8h10" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
