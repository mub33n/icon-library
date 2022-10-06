import React from 'react';

export default function PartlyCloudyHail(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M17.7 31a10 10 0 1113.4-13M22 2v4M6 22H2M8.4 8.5l2.3 2.2m24.9-2.2l-2.3 2.2M10.7 33.3l-2.3 2.3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M50 24a13 13 0 00-25 4.1h-1a8 8 0 100 16h26a10 10 0 000-20z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M50 50v12m-8-12v2m-8-2v6m-8-6v12m-10-5.9A10 10 0 0126 62m34-5.9A10 10 0 0050 62" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={10} cy={56} r={1} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
