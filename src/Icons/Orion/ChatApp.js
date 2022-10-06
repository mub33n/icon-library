import React from 'react';

export default function ChatApp(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M33.8 27.6a13 13 0 003.2.4h5v7l7.6-7A13 13 0 0049 2H37a13 13 0 00-12 18" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={43} cy={15} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={35} cy={15} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <circle data-name="layer2" cx={51} cy={15} r={1} fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M37.4 54.3c-8.2-1.4-7.4-3.5-7.4-4.9v-2.5a13.9 13.9 0 004-10.1v-6.7C34 22.8 28.7 20 24 20s-10 2.8-10 10.1v6.7a13.8 13.8 0 004.1 10.1v2.5c0 1.4.7 3.5-7.4 4.9S2 60 2 62h44c0-2-1.3-6.4-8.6-7.7z" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
