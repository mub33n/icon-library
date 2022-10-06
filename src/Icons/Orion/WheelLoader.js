import React from 'react';

export default function WheelLoader(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M4 40.538V24.001l4-4.002h15.049l4.951 14h6v8h-.535" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path d="M10 19.999v6l18 8" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M38 48h24s-18 .011-24-26m-4 22a3.999 3.999 0 01-4 4H6a4.002 4.002 0 01-4-4 4.001 4.001 0 014-4h24a3.999 3.999 0 014 4z" data-name="layer1" />
      <path d="M38 34.999V22" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" />
    </svg>
  );
}
