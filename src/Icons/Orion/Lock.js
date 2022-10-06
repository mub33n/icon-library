import React from 'react';

export default function Lock(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M19 30V15A13 13 0 0132 2a13 13 0 0113 13v15" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M10 30h44v32H10zm22 11v10" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
