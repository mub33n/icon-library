import React from 'react';

export default function PlayMovie(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M62 19v-8a4 4 0 00-4-4H6a4 4 0 00-4 4v8M22 7L10 19M38 7L26 19M54 7L42 19" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M24 27v20l20-10-20-10z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M2 19v34a4 4 0 004 4h52a4 4 0 004-4V19z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
