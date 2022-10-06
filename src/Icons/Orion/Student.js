import React from 'react';

export default function Student(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M24 41.1V44c0 2 .6 4.9-10.4 7S2 62 2 62h60s0-8.6-12.4-11C38.9 48.9 39 46 39 44v-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 50.5L32 62l16-11.3m-10.4-8.4A17.2 17.2 0 0044.8 32c3 0 3.7-4.3 3.7-5.3S49 22.1 46 22v-6m-28 0v6c-3 0-3 4.1-3 5s.4 5 3.4 5a15.9 15.9 0 007.2 10.3" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 12L4 6l28-4 28 4-28 6z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 9v7l14 2 14-2V9M6 6.4V30" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
