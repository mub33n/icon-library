import React from 'react';

export default function SushiRestaurant(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M38.6 20.2L50 14M2 40l14-7.6" />
      <ellipse data-name="layer2" cx={28} cy={24} rx={12} ry={8} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" d="M16 24v18c0 4.4 5.4 8 12 8s12-3.6 12-8V24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <ellipse data-name="layer1" cx={28} cy={24} rx={4} ry={1} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M62 28L2 48" />
    </svg>
  );
}
