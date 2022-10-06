import React from 'react';

export default function WaterDroplet(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 51a10.4 10.4 0 00-.5-2.5C21.4 41.4 14 32 14 32s-7.4 9.4-9.5 16.6A10.4 10.4 0 004 51v.8A10.1 10.1 0 0014 62a10.1 10.1 0 0010-10.2V51zm36 0a10.4 10.4 0 00-.5-2.5C57.4 41.4 50 32 50 32s-7.4 9.4-9.5 16.6A10.4 10.4 0 0040 51v.8a10 10 0 1020 0V51z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M42 21a10.4 10.4 0 00-.5-2.5C39.4 11.4 32 2 32 2s-7.4 9.4-9.5 16.6A10.3 10.3 0 0022 21v.8a10 10 0 1020 0V21z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
