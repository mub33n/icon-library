import React from 'react';

export default function Timer(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M10.787 10.787A30 30 0 1032 2v14" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M29.187 34.61L16.464 19.296a2.011 2.011 0 012.832-2.832L34.61 29.187a3.852 3.852 0 01-4.923 5.924 4.022 4.022 0 01-.5-.5z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
