import React from 'react';

export default function LiquorGlass(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M48 52V2H16v50" />
      <rect data-name="layer2" x="22.9" y="10.9" width={9} height={9} rx={2} ry={2} transform="rotate(-30 27.483 15.364)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M34.6 40.5a2 2 0 01-.7 2.7l-4.3 2.5a2 2 0 01-2.7-.7l-2.5-4.3a2 2 0 01.7-2.7l4.3-2.5a2 2 0 012.7.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <rect data-name="layer2" x="32.1" y="22.9" width={9} height={9} rx={2} ry={2} transform="matrix(.5 -.87 .87 .5 -5.44 45.4)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M16 52v7.4a2.6 2.6 0 002.6 2.6h26.8a2.6 2.6 0 002.6-2.6V52z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
