import React from 'react';

export default function SecuredAccount(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M38 51H2s0-7 9.4-8.8S20 38.6 20 37v-2a14.2 14.2 0 01-4-7c-2.5 0-4-3-4-6 0-.8 0-4 2-4-1.6-6.4-.4-13 4-13 10.4-7 25-1.5 20 13 2 0 2 3.2 2 4 0 3-1.5 6-4 6a14.1 14.1 0 01-4 7v2a3.7 3.7 0 002.5 3.4c2.2 1 7.9 1.8 9.5 2.6" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M38 46h24v16H38zm6 0V36a6 6 0 016-6 6 6 0 016 6v10m-6 6v4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
