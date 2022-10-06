import React from 'react';

export default function CameraTripod(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M28 24v16l4 4 4-4V24m-4 38V44L14 62m18-18l18 18" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M44.5 6H43l-3.3-4h-7.9l-3.2 4H17.5A1.5 1.5 0 0016 7.5v15a1.5 1.5 0 001.5 1.5h27a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0044.5 6z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={36} cy={14} r={4} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
