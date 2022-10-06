import React from 'react';

export default function SunnyWindGust(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 42a13 13 0 1111.7-18.6M32 2v6M12 30H4m8-22l6 6m33.9-5.9L46 14" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M56 34a4 4 0 014 4 4 4 0 01-4 4h-6m8 16a4 4 0 004-4 4 4 0 00-4-4H46M2 50h32a6 6 0 016 6 6 6 0 01-6 6M2 42h36a6 6 0 006-6 6 6 0 00-6-6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
