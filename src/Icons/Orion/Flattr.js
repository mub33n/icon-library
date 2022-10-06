import React from 'react';

export default function Flattr(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M23.562 1.994C9.313 1.994 2 10.244 2 25.526v32.156l13.969-13.969V27.4c0-6.375 1.687-10.406 7.313-11.344a63.938 63.938 0 018.718-.28v9.937a.9.9 0 00.844.656.708.708 0 00.656-.375l24.281-24H23.562z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M48.031 20.276v16.312c0 6.375-1.687 10.406-7.312 11.344a63.938 63.938 0 01-8.719.281V38.182a.9.9 0 00-.844-.656.708.708 0 00-.656.375L6.219 61.994h34.218C54.688 61.994 62 53.744 62 38.463V6.307z" fill="none" stroke="#202020" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
