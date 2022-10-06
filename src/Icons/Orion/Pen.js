import React from 'react';

export default function Pen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M9.7 54.3l-7.6 7.6m15.1-10.8a6.5 6.5 0 00-4.3-4.3 6 6 0 01-5.6.9l-.9.7-.5.7a6.4 6.4 0 00-1 1.9c-1.8 4.2-2.8 10.9-2.8 10.9s6.8-.9 11-2.7a6.5 6.5 0 001.7-1l.7-.6.7-.9a6 6 0 011-5.6z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M61.1 6.9l-36 40.4a6 6 0 11-9-8l.5-.5L57 2.8a2.8 2.8 0 014 4z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
