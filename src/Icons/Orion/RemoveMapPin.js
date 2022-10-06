import React from 'react';

export default function RemoveMapPin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M54 24a22 22 0 10-28 21.1L32 59l6-13.8A22 22 0 0054 24z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M40 24H24" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
