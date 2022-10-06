import React from 'react';

export default function Potato(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M8.2 4.6c-8.3 5.6-10.8 30.7 8.9 47.7s35 8.1 41.2.9 5.4-22.6-9.1-31.8-17.7-11.8-22.5-16S13.9.9 8.2 4.6z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 20l-2 2m16 2l-2 2m-4 6l-2 2m2 6l-2 2m16-4l-2 2m2 10l-2 2m14-10l-2 2m6 6l-2 2" />
    </svg>
  );
}
