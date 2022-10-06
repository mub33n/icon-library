import React from 'react';

export default function Airship(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M15.607 16.5S12.14 10 6 10v11.781M15.565 43.5S12.14 50 6 50V38.129m38.639 6.448l-3.524 7.749A3.706 3.706 0 0137.877 54H24.461a2.748 2.748 0 01-2.324-2.048l-2.417-7.231" data-name="layer2" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={16} rx={30} cy="29.965" cx={32} data-name="layer1" />
    </svg>
  );
}
