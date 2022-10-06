import React from 'react';

export default function Video(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M60 18L42 28.1V20a4 4 0 00-4-4H6a4 4 0 00-4 4v24a4 4 0 004 4h32a4 4 0 004-4v-8.2l4 2.2 14 8h2V18z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
