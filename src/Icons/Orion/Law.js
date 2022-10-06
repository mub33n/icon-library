import React from 'react';

export default function Law(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 16v40m-10 0h20M28 12H12L2 32" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer2" cx={32} cy={12} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 12l10 20m14-20h16l10 20M52 12L42 32" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M12 42a10 10 0 0010-10H2a10 10 0 0010 10zm40 0a10 10 0 01-10-10h20a10 10 0 01-10 10z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
