import React from 'react';

export default function Bar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M17.8 54c.3 2.2.7 4.2.8 5.2A3.8 3.8 0 0022 62h20a3.8 3.8 0 003.4-2.8c.2-1 .5-3 .8-5.2m1.5-10l.3-2c.2-1.7-1.5-3.6-4.6-6.6S36 27.6 36 24V12m-8 0v12c0 3.6-4.3 8.5-7.4 11.4S15.8 40.3 16 42l.3 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M36 2h-8v10h8V2zM16.3 44c.4 2.5.9 6.6 1.5 10h28.4c.5-3.4 1.1-7.5 1.5-10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
