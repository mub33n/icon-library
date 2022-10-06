import React from 'react';

export default function MedicalChart(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M20 12h-6v44h36V12h-6" strokeLinejoin="round" />
      <path data-name="layer1" d="M42.156 7H54a2 2 0 012 2v51a2 2 0 01-2 2H10a2 2 0 01-2-2V9a2 2 0 012-2h11.807" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M39 6h-2.1a5 5 0 00-9.8 0H25a4.724 4.724 0 00-5 5v3h24v-3a4.774 4.774 0 00-5-5zm1 19h-5v-5h-6v5h-5v6h5v5h6v-5h5v-6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M22 42h21m-21 7h21" strokeLinejoin="round" />
    </svg>
  );
}
