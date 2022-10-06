import React from 'react';

export default function Globe(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M54.8 43.8A28 28 0 0115.2 4.2M13 2l7.9 7.9M57 46l-7.9-7.9M23 62h24M35 52v10" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={20} cy={24} cx={35} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
