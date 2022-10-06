import React from 'react';

export default function HospitalStretcher(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M40 8a4 4 0 014-4h8a4 4 0 014 4v19" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer1" x={37} y={8} width={6} height={8} rx={1} ry={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer2" x={2} y={33} width={60} height={6} rx={1} ry={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M60 33v-1a5 5 0 00-5-5h-5a5 5 0 00-5 5v1m-25 0v-2a3 3 0 013-3h15a3 3 0 013 3v2m4 6L16 55m3-16l29 16m-31 3h30" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={51} cy={58} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={13} cy={58} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
