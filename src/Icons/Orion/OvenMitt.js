import React from 'react';

export default function OvenMitt(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M52 52l2 8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8M32.2 4L56 27.8M24.1 16.3l31.5 31.5M10 24.7L38 52" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M51.4 6.8l-35 35M56 24.7L28 52m-4-22.3V18a16 16 0 0132 0v30a4 4 0 01-4 4H28a4 4 0 01-2.5-.9L10.7 36A8 8 0 0116 22a6.5 6.5 0 014 2l4 3.7" />
    </svg>
  );
}
