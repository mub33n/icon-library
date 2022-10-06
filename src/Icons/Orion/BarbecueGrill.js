import React from 'react';

export default function BarbecueGrill(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M50 24H30m18 38l-3.9-17.8m-9.9 0l-2.5 10.2" />
      <circle data-name="layer2" cx={30} cy={58} r={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M45.8 52H32.3" />
      <path data-name="layer1" d="M24 30a15 15 0 0030 0zm0-28a14 14 0 000 28z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
