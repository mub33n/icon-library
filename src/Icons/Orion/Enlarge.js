import React from 'react';

export default function Enlarge(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M15.9 34H28v-6H15.9l3.1-2.8a3 3 0 10-4-4.5L3 31l12 10.2a3 3 0 004-4.5z" data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M49 20.8a3 3 0 10-4 4.5l3.1 2.7H36v6h12.1L45 36.8a3 3 0 104 4.5L61 31z" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
