import React from 'react';

export default function EnlargeVertical(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M41 18l-8-9-8 9m16 28l-8 9-8-9m8-37v46" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M51 2H15m36 60H15" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
