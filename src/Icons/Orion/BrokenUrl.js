import React from 'react';

export default function BrokenUrl(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32.5 42a8.9 8.9 0 01-2.3 8.6l-8.7 8.7a8.9 8.9 0 01-12.6 0l-4.3-4.2a8.9 8.9 0 010-12.6l8.7-8.7a8.9 8.9 0 018.8-2.3m10-8a8.9 8.9 0 011.8-10.1l8.7-8.7a8.9 8.9 0 0112.6 0L59.5 9a8.9 8.9 0 010 12.6l-8.7 8.7a8.9 8.9 0 01-10 1.8" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M15.1 26h-13m22-11V2m-8 16L6.9 8.8M49.1 38H62M40.1 49v13m8-16l9.1 9.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
