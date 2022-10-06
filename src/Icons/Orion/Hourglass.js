import React from 'react';

export default function Hourglass(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M48 57v-8.487a14 14 0 00-5.953-11.457l-5.527-3.881a1 1 0 010-1.637l5.526-3.881A14 14 0 0048 16.2V7M16 7v9.2a14 14 0 005.954 11.457l5.526 3.881a1 1 0 010 1.637l-5.526 3.881A14 14 0 0016 48.513V57" data-name="layer2" strokeLinejoin="round" />
      <path strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" d="M16 55c4 0 9.959-5.608 12.984-8a5.114 5.114 0 016.024-.016C38.057 49.355 44 55 48 55M20.084 26c8-3.205 14.6 3.65 24.121-.216M27.816 32.77C30.687 33.5 31.833 37 32 37c.132 0 .867-3.384 4.1-4.705" data-name="layer2" strokeLinejoin="round" />
      <rect strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" ry={1} rx={1} height={5} width={38} y={57} x={13} data-name="layer1" strokeLinejoin="round" />
      <rect strokeWidth={4} strokeMiterlimit={10} strokeLinecap="round" stroke="currentColor" fill="none" ry={1} rx={1} height={5} width={38} y={2} x={13} data-name="layer1" strokeLinejoin="round" />
    </svg>
  );
}
