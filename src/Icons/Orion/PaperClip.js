import React from 'react';

export default function PaperClip(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M48 18a16 16 0 00-32 0v24a2 2 0 104 0V18a12 12 0 0124 0v32a8 8 0 11-16 0V22a4 4 0 118 0v20a2 2 0 104 0V22a8 8 0 10-16 0v28a12 12 0 1024 0z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
