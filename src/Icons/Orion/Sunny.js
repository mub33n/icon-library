import React from 'react';

export default function Sunny(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 2v16m0 28v16m30-30H46m-28 0H2m8.8-21.2l11.3 11.3m19.8 19.8l11.3 11.3m0-42.4L41.9 22.1M22.1 41.9L10.8 53.2" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={32} cy={32} r={14} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
