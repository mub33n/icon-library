import React from 'react';

export default function Cursor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M61 53.5L38.6 31.1l11.9-11.9L3 3l16.2 47.4 11.9-11.8L53.5 61l7.5-7.5z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
