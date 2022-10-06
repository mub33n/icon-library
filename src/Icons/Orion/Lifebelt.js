import React from 'react';

export default function Lifebelt(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M4 20.859V13.5a9.519 9.519 0 019.518-9.519H21m39 16.753V13.5a9.519 9.519 0 00-9.517-9.519h-7.248M4 43.141v7.34A9.518 9.518 0 0013.518 60h7.388M60 43.112v7.369A9.518 9.518 0 0150.483 60h-7.307" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={30} cy={32} cx="32.002" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={18} cy={32} cx="32.002" data-name="layer1" />
      <path d="M26.05 14.941L24 3.079m13.951 11.873L40 3.216M26.061 49.052l-2.005 11.845m13.886-11.845L40 60.841m9.095-34.766l11.766-1.99m-11.746 13.9l11.699 2.043M14.825 26.061l-11.764-1.99m11.827 13.914L3.19 40.028" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
