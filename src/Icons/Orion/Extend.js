import React from 'react';

export default function Extend(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M30 14.892V28h5.995l.001-13.113 2.765 3.11a3 3 0 104.484-3.988L33.003 2.003 22.76 14.01a3 3 0 104.485 3.984z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M43.24 49.982a3 3 0 00-4.486-3.984l-2.762 3.108L35.994 36H30v13.113L27.24 46a3 3 0 10-4.487 3.98l10.25 12.023z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
