import React from 'react';

export default function Rocket(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M23.743 24.667c-6.24-.762-10.203-1.926-15.021 4.909C3.903 36.418 3 42 3 42l10.423-2.046m10.664 10.664L22 60.999s5.622-.86 12.462-5.678c6.84-4.819 5.674-8.783 4.91-15.024" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy="14.999" cx={49} data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={4} cy={25} cx={39} data-name="layer2" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M61.929 2.113S47.505-.188 31.337 15.978c-9.781 9.78-17.914 23.976-17.914 23.976l10.664 10.664s14.195-8.134 23.976-17.915C64.228 16.537 61.93 2.113 61.93 2.113z" data-name="layer1" />
    </svg>
  );
}
