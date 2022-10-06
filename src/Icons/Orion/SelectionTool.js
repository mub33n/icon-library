import React from 'react';

export default function SelectionTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M4.8 4.8L27 59.2l7.5-24.6 24.7-7.7L4.8 4.8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
