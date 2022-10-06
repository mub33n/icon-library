import React from 'react';

export default function SecurePayment(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M38 42H4.4A2.4 2.4 0 012 39.6V12.4A2.4 2.4 0 014.4 10h43.2a2.4 2.4 0 012.4 2.4V22M2 18h48m-39.9 8H26m-16 8h7" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38 38h24v16H38zm6 0V28a6 6 0 016-6 6 6 0 016 6v10m-6 6v4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
