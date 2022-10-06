import React from 'react';

export default function RollingPin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M15.5 54l-6.9 6.9a3.9 3.9 0 01-5.5 0 3.9 3.9 0 010-5.5l6.9-6.9m44-33l6.9-6.9a3.9 3.9 0 000-5.5 3.9 3.9 0 00-5.5 0L48.5 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5.863 44.374L44.329 5.908l13.746 13.746L19.61 58.12z" />
    </svg>
  );
}
