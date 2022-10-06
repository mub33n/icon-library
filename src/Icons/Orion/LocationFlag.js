import React from 'react';

export default function LocationFlag(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M23 45l9.7 17" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M56.5 25.5l-14.8-5.3L43.9 5c-9.3 8.2-26.5 8.7-33.2 18.7L23 45c6.7-10.1 25.7-7.7 33.5-19.5z" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
