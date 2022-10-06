import React from 'react';

export default function ChefHat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M18 52v10h28V52" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M26 52V38m30-20a9.9 9.9 0 00-13.3-9.4 12 12 0 00-21.4 0A9.9 9.9 0 0018 8a10 10 0 000 20v24h28V28a10 10 0 0010-10zM36 52V34" />
    </svg>
  );
}
