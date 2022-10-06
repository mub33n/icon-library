import React from 'react';

export default function Giftbox(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M56 34v28H8V34M4 22h56v12H4z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 22v40m16-40v40M26.2 5A7.4 7.4 0 0020 2a8 8 0 00-5.3 14c4.2 3.7 17.3 6 17.3 6 0-6-3.4-14.3-5.8-17zm11.6 0A7.4 7.4 0 0144 2a8 8 0 015.3 14C45.1 19.7 32 22 32 22c0-6 3.4-14.3 5.8-17z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
