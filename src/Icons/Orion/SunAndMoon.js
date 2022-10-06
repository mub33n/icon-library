import React from 'react';

export default function SunAndMoon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M47.5 32.4a14 14 0 01-16.8 17.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M24.1 45.9a14 14 0 0119.8-19.8M34 6v8M12 36H4m8-22l7 7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M55 15L13 57" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
