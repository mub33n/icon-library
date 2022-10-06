import React from 'react';

export default function Pie(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M58 40S37.2 24.1 28 16C12 19 6 30 6 30l52 10zm0 8v-8M6 44v6l52 12V52M6 30v8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" d="M58 52a9.4 9.4 0 01-9.5 1.2c-4.1-1.9-3.7-2.9-10.5-3.2s-9.8.7-14-2a13.7 13.7 0 00-8-2c-5.2.6-9.7-1.5-10-2v-6l52 10zM34 2v26" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
    </svg>
  );
}
