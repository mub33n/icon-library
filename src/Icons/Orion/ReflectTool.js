import React from 'react';

export default function ReflectTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 23.9v35l18.8-17.5L2 23.9zm60 0v35L43.2 41.4 62 23.9zM32 22v40" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M16 17.2C16 8.8 23.2 2 32 2s16 6.8 16 15.2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M54 8.3l-5.3 9.5-9.4-5.3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
