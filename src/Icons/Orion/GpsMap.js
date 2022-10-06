import React from 'react';

export default function GpsMap(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M14.5 43.7L2 40.6V2l20 7.4L42 2l20 7.4V44l-18.8-6.7M42 30.8V2M22 40.2V9.4" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M28.7 47.3L32 59l16-31-33.5 15.7 14.2 3.6z" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
