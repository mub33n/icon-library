import React from 'react';

export default function Stars(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M15 51.1L7 57l3.1-9.5L2 42h9.9l3.1-9.7 3.1 9.7H28l-8.1 5.5L23 57l-8-5.9zm34 0L41 57l3.1-9.5L36 42h9.9l3.1-9.7 3.1 9.7H62l-8.1 5.5L57 57l-8-5.9z" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 25.9l-8 5.8 3.1-9.4L19 16h9.9L32 7l3.1 9H45l-8.1 6.3 3.1 9.4-8-5.8z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
