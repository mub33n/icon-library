import React from 'react';

export default function FavoriteWindow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={12} cx={8} data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={12} cx={15} data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={1} cy={12} cx={22} data-name="layer2" />
      <path d="M54 40V18M2 18v32h36.77M2 6h52v12H2z" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <path d="M46 50.887L36.113 58l3.809-11.469L30 40h12.242L46 28l3.758 12H62l-9.918 6.531L55.891 58 46 50.887z" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" />
    </svg>
  );
}
