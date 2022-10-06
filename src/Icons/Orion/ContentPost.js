import React from 'react';

export default function ContentPost(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 2h60v60H2z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M34 12h12m-12 8h20m-20 8h20m-20 8h12m-12 8h20M10 12h16v16H10zm0 24h16v16H10z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
