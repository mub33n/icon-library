import React from 'react';

export default function Snowflake(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M23.4 3.4L32 12l8.6-8.6M23.4 60.6L32 52l8.6 8.6m-37.2-20L12 32l-8.6-8.6m57.2 17.2L52 32l8.6-8.6M5.8 18H18V5.8m28 52.4V46h12.2M18 58.2V46H5.8m52.4-28H46V5.8" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M2 32h60M32 2v60M10.8 10.8l42.4 42.4m0-42.4L10.8 53.2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
