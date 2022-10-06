import React from 'react';

export default function Ruler(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2.8 47l14.1 14.1 44.3-44.4L47.4 2.9 2.8 47z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M11.8 38.2l7 7m3.8-17.8l7 7m3.7-17.5l6.9 6.9m-23.1 9.1l5 5.1m5.6-15.6l5 5m5.7-15.6l4.9 5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
