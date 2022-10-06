import React from 'react';

export default function HideLayer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <g data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round">
        <path d="M62 56v6h-6" />
        <path strokeDasharray="11.33 11.33" d="M44.7 62h-17" />
        <path d="M22 62h-6v-6" />
        <path strokeDasharray="11.33 11.33" d="M16 44.7v-17" />
        <path d="M16 22v-6h6" />
        <path strokeDasharray="11.33 11.33" d="M33.3 16h17" />
        <path d="M56 16h6v6" />
        <path strokeDasharray="11.33 11.33" d="M62 33.3v17" />
      </g>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 48H2V2h46v14" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
