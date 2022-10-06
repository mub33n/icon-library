import React from 'react';

export default function PartlyCloudyRain(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M18.7 31.1A10 10 0 1132.1 18M23 2v4M7 22H3M9 8l3 3m25-3l-3 3M12 33l-3 3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" d="M51 24a13 13 0 00-25 4.1h-1a8 8 0 100 16h26a10 10 0 000-20z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M51 50v12m-8-12v6m-8-6v12m-8-12v6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
