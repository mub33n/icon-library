import React from 'react';

export default function Comments(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M28 34v14h16.9L56 59.1V48h6V26H52" />
      <path data-name="layer1" fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M52 4H2v30h8v11l11.1-11H52V4z" />
    </svg>
  );
}
