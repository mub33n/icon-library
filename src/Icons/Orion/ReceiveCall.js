import React from 'react';

export default function ReceiveCall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M63 32H27.8M41 20L27.8 32 41 44" />
      <path data-name="layer1" d="M35 48v10a4 4 0 01-4 4H7a4 4 0 01-4-4V6a4 4 0 014-4h24a4 4 0 014 4v10M3 10h32M3 48h32" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer1" cx={19} cy={55} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
