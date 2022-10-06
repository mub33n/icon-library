import React from 'react';

export default function Airplane(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 11v12" />
      <path data-name="layer1" d="M12.4 37.3c-4.8-1.3-8.9-3-10.3-4.7 0 0-.6-1.6.9-1.6h20.2m1.6 8l-4.8-.3m31.6-1.4c4.8-1.2 8.9-2.9 10.3-4.6 0 0 .6-1.6-.9-1.6H40.9M39.2 39l4.8-.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={16} cy={39} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={48} cy={39} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <ellipse data-name="layer1" cx={32} cy={33} rx={9} ry={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M24 28.4s4 4.6 8 4.6 8-4.6 8-4.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
