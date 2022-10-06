import React from 'react';

export default function DataApp(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M2 23v22l30.082 14L62 45V23L32 37.048 2 23zm30 14.048V59m25.332-38.178L62 23M37.459 11.548l9.148 4.269m-29.232.009l9.147-4.27M2 23l4.742-2.213" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={4} rx={7} cy={19} cx={13} data-name="layer1" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={4} rx={7} cy={25} cx={32} data-name="layer1" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={4} rx={7} cy={9} cx={32} data-name="layer1" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={4} rx={7} cy={19} cx={51} data-name="layer1" />
    </svg>
  );
}
