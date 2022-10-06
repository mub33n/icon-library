import React from 'react';

export default function SearchPlace(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M33.6 48.8a24 24 0 1115.2-15.2m-16.2 13A9 9 0 0126 50c-7.1 0-12.8-10.7-12.8-24S18.9 2 26 2s12.8 10.7 12.8 24a43.6 43.6 0 01-.6 7.1M2 26h48M26 2v48" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <circle strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" r={11} cy={43} cx={43} data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M50.8 50.8L62 62" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
