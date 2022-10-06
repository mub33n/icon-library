import React from 'react';

export default function Diary(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M19 6v56" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M47 6h8v56H12a3 3 0 01-3-3V9a3 3 0 013-3h21" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M47 26l-6.9-4-7.1 4V2h14v24z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
