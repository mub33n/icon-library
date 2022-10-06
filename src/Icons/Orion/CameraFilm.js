import React from 'react';

export default function CameraFilm(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M28 17h34v17h-6q-6 0-6 6v7H28" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 10h28M2 54h28M4 10v44m24-44v44" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M35 23v2m8-2v2m-8 14v2m8-2v2m8-18v2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
