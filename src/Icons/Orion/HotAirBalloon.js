import React from 'react';

export default function HotAirBalloon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M34 49.9c2.5-2 11-9.4 15.4-18.2A20 20 0 1012 21.9a19.8 19.8 0 002.6 9.8c4.4 8.9 13 16.2 15.4 18.2M32 2c-7.4 0-15.4 18.1-1.6 48M32 2c7.4 0 15.4 18.1 1.6 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M26 50v8.8a3.2 3.2 0 003.2 3.2h5.6a3.2 3.2 0 003.2-3.2V50z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
