import React from 'react';

export default function Control(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 6v47m24-18v23m0-52v23m24-12v41m0-52v4.999" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M26 29h12v6H26zM2 53h12v6H2zm48-42h12v6H50z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
