import React from 'react';

export default function AlarmSound(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <circle data-name="layer2" cx={32} cy={32} r={14} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M32 24v8l4 4" strokeLinejoin="round" />
      <path data-name="layer1" d="M45.282 14.46A21.966 21.966 0 0154 32m-44 0a21.965 21.965 0 018.714-17.536m32.273-5.692A29.941 29.941 0 0162 32M2 32A29.939 29.939 0 0112.917 8.851" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
