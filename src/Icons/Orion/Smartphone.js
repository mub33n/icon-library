import React from 'react';

export default function Smartphone(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M52 5a3 3 0 00-3-3H15a3 3 0 00-3 3v5h40zm0 45V10m-40 0v40m0 0v9a3 3 0 003 3h34a3 3 0 003-3v-9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M30 56h4" />
    </svg>
  );
}
