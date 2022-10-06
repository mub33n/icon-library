import React from 'react';

export default function Atm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 10h26v26H10z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M14 56H5a3 3 0 01-3-3V5a3 3 0 013-3h54a3 3 0 013 3v48a3 3 0 01-3 3H34M10 44h28" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 44h20v18H14z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42 16h14m-12 8h2m6 0h2m-10 8h2m6 0h2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
