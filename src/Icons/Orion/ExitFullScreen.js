import React from 'react';

export default function ExitFullScreen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M20 24h24v16H20z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M14 6v12H2m11.997 0L2 6m48 0v12h12m-11.997 0L62 6M14 58V46H2m11.997 0L2 58m48 0V46h12m-11.997 0L62 58" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
