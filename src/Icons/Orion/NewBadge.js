import React from 'react';

export default function NewBadge(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 39V26l7.9 12h.1V25m14 1h-8v12h8m-2-6h-6m12-7l3.4 13h.4l3.6-10h1.1l3.3 10h.6L54 25" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M32 4.5L38 2l4.5 4.6H49l2.5 5.9 5.9 2.5v6.5L62 26l-2.5 6 2.5 6-4.6 4.5V49l-5.9 2.5-2.5 5.9h-6.5L38 62l-6-2.5-6 2.5-4.5-4.6H15l-2.5-5.9L6.6 49v-6.5L2 38l2.5-6L2 26l4.6-4.5V15l5.9-2.5L15 6.6h6.5L26 2l6 2.5z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
