import React from 'react';

export default function PartlyCloudy(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M27.1 39.5a10 10 0 116.9-10M24 8v6M8 30H2m6.4-15.5l4.3 4.2m26.9-4.2l-4.3 4.2M12.7 41.3l-4.3 4.3" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M52 36a13 13 0 00-25 4.1h-1a8 8 0 100 16h26a10 10 0 000-20z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
