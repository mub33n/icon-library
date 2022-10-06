import React from 'react';

export default function Croissant(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28.3 39.6l7.8 22m3.5-33.3l22 7.8m-45 3.2l-4.4 15.3m27.3-38.2l14.9-4.3" />
      <path data-name="layer1" d="M53.1 10.7a29.8 29.8 0 00-17.3-8.5c-4.7-.5-7.3 2.9-6.7 4.3s22.6 11.3 5.7 28.3-25.9-5.7-28.4-5.7-4.5 3.8-4.3 6.6a30 30 0 1050.9-25z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
