import React from 'react';

export default function Alert(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M32 45.2V47a9 9 0 01-9 9 9 9 0 01-9-9v-7.2" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeMiterlimit={10} strokeWidth={4} d="M2 24v16M62 6v52M2 28l60-18M2 36l60 18" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
