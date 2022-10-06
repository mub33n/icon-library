import React from 'react';

export default function CloudySnowflake(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M46.8 38A10.1 10.1 0 0057 28.1a10.1 10.1 0 00-10.2-9.9h-1A13.6 13.6 0 0033.1 10a13.5 13.5 0 00-13.5 11.5h-.1a8.2 8.2 0 100 16.5zM16.7 22A10 10 0 1127 11.4" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M19 46v4m2-2h-4m18 0h-4m2 2v-4m-5 12h-4m2 2v-4m14 0v4m2-2h-4m9-12v4m2-2h-4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
