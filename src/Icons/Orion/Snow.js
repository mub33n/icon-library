import React from 'react';

export default function Snow(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M47.9 13.5h-.5a15.8 15.8 0 00-30.1 4.2 10.1 10.1 0 00-3-.5 10.4 10.4 0 000 20.8h33.6a12.3 12.3 0 000-24.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M18 46v4m2-2h-4m18 0h-4m2 2v-4m-5 12h-4m2 2v-4m15 0v4m2-2h-4m8-12v4m2-2h-4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
