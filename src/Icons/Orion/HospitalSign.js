import React from 'react';

export default function HospitalSign(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M37 17v10H27V17h-9v30h9V36h10v11h9V17h-9z" strokeLinejoin="round" />
      <circle data-name="layer1" cx={32} cy={32} r={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
