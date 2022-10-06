import React from 'react';

export default function HeavyRain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M49 12.015c-.168 0-.33.02-.5.025a16.98 16.98 0 00-32.293 4.447A11 11 0 1013 38.011h36a13 13 0 100-26z" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11.998 46l-6.404 8.001M23.998 46L11.19 61.997M36 46l-6.404 8.001M48 46L35.191 61.997" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
