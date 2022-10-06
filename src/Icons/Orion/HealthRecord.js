import React from 'react';

export default function HealthRecord(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M52 8h4a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-4m-16 6h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M18 47h25m-25 7h25M9 2h37a6 6 0 016 6v48a6 6 0 01-6 6H9a1 1 0 01-1-1V3a1 1 0 011-1z" strokeLinejoin="round" />
      <circle data-name="layer2" cx={30} cy={26} r={13} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M52 23h3a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-3m3 0a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-3m3 0a2.006 2.006 0 012 2v6a2.006 2.006 0 01-2 2h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
