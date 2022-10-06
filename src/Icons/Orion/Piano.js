import React from 'react';

export default function Piano(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M16 32v24m16-24v24m16-24v24" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M20 8v24h-8V8m24 0v24h-8V8m24 0v24h-8V8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 8h60v48H2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
