import React from 'react';

export default function Vector(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 2h10v10H2zm50 0h10v10H52zM2 52h10v10H2zm50 0h10v10H52z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M52 57H12m45-45v40M12 7h40M7 52V12" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
