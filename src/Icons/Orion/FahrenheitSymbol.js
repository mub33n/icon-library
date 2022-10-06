import React from 'react';

export default function FahrenheitSymbol(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M53 17v-6H24v51h6V39h15v-6H30V17h23z" strokeLinejoin="round" strokeLinecap="round" />
      <circle data-name="layer1" cx={13} cy={8} r={6} fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
