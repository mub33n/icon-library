import React from 'react';

export default function ThunderstormRain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M42 38h7a13 13 0 100-26h-.5a17 17 0 00-32.3 4.4A11 11 0 1013 38h11.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M6 58.5L3.2 62M16 46l-5.9 7.4m31.9.1L35.2 62M48 46l-1.6 2m-9.7-23L22 41h7.5l-3.3 14L42 38h-7.4l2.1-13z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
