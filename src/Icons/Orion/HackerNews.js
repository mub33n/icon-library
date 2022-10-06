import React from 'react';

export default function HackerNews(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 2h60v60H2z" strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M34.625 36.594v14.719h-5.344V36.594L16.156 10.625h6.188L32 30.219l9.937-19.594h5.813L34.625 36.594z" strokeLinejoin="round" />
    </svg>
  );
}
