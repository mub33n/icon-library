import React from 'react';

export default function DragVertical(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M29 35v13.6l-2.8-3.1-4.4 4L32 61l10.2-11.5-4.4-4-2.8 3.1V35m0-6V15.4l2.8 3.1 4.4-4L32 3 21.8 14.5l4.4 4 2.8-3.1V29" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" strokeLinejoin="round" />
      <path d="M6 29h52v6H6z" strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
