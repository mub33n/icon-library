import React from 'react';

export default function CruiserBicycle(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={12} cy={42} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={52} cy={42} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M12 42h20s1.4-10.4 13.3-16c-9.5-2.6-28.6-.6-33.3 16zm18.1 0L18 18m-4 0h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M52 42a3.1 3.1 0 01-3.3-2.3c-.6-2.1-5.7-23.3-6.4-25.7S41.2 8 36 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
