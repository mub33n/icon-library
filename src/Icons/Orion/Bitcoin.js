import React from 'react';

export default function Bitcoin(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 8V2m8 6V2m-8 60v-6m8 6v-6" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M16 30h17a11 11 0 000-22H16v48h19a13 13 0 100-26" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
