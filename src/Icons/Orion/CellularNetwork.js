import React from 'react';

export default function CellularNetwork(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={23} r={4} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M33.5 26.7L48 62m-32 0l14.5-35.3M12 62h40M24.2 42.1L48 62m-32 0l23.8-19.9" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M21 30a13 13 0 1122 0m-28.9 4a21 21 0 1135.8 0" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
