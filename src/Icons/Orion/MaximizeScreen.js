import React from 'react';

export default function MaximizeScreen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 22h32v20H16z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 16V2h20m40 14V2H42M2 49v13h20m40-14v14H42" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
