import React from 'react';

export default function CharacterTracking(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 36L43 8l11 28M27.8 8L16.9 36 6 8m29.5 19h15" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 50h60M8 56l-6-6 6-6m48 12l6-6-6-6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
