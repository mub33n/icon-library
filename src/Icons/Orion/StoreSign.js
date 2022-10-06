import React from 'react';

export default function StoreSign(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M8 24.9L32 3l24 22" strokeLinejoin="round" strokeLinecap="round" />
      <rect data-name="layer2" x={2} y={25} width={60} height={36} rx={3} ry={3} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 33h44v20H10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
