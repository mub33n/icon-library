import React from 'react';

export default function MoveHorizontal(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M35 35h13.6l-3.1 2.8a3 3 0 004 4.5L61 32 49.5 21.8a3 3 0 00-4 4.5l3.1 2.7H35m-6 0H15.4l3.1-2.8a3 3 0 10-4-4.5L3 32l11.5 10.2a3 3 0 004-4.5L15.4 35H29" data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M35 6v52a3 3 0 11-6 0V6a3 3 0 116 0z" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
