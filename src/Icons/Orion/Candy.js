import React from 'react';

export default function Candy(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M7.9 56.1zm10-9.9c-7.2-1.4-13.8-.4-15.6 1.4s1.7 1.3 2.8 2.8 1.5 4.3 2.8 5.7 4.2 1.7 5.7 2.8 1.6 4 2.8 2.8 2.9-8.4 1.5-15.5zM56.1 7.9zm-10 10c-1.4-7.2-.4-13.8 1.4-15.6s1.4 1.7 2.9 2.8 4.3 1.5 5.7 2.8 1.7 4.2 2.8 5.7 4 1.6 2.8 2.8-8.4 2.9-15.6 1.5z" />
      <ellipse data-name="layer1" cx={32} cy={32} rx={20} ry={14} transform="rotate(-45 31.977 32.055)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
