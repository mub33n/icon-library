import React from 'react';

export default function MoveTool(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M53.4 24.2l-2.8 2.9 2.9 2.9H34V10.5l2.9 2.9 2.9-2.8L32 2.8l-7.8 7.8 2.9 2.8 2.9-2.9V30H10.5l2.9-2.9-2.8-2.9L2.8 32l7.8 7.8 2.8-2.9-2.9-2.9H30v19.5l-2.9-2.9-2.9 2.8 7.8 7.8 7.8-7.8-2.9-2.8-2.9 2.9V34h19.5l-2.9 2.9 2.8 2.9 7.8-7.8-7.8-7.8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
