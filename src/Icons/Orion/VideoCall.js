import React from 'react';

export default function VideoCall(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={2} y={17} width={36} height={32} rx={4} ry={4} fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M60 19l-14 8v12l14 8h2V19h-2z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
