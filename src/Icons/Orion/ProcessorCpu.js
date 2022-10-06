import React from 'react';

export default function ProcessorCpu(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={12} y={12} width={40} height={40} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 12V2M22 12V2m20 10V2M22 62V52m20 10V52M32 62V52m20-20h10M52 22h10M52 42h10M2 22h10M2 42h10M2 32h10" />
      <rect data-name="layer1" x={20} y={20} width={24} height={24} rx={2} ry={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
