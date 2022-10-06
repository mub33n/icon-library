import React from 'react';

export default function Heartbeat(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M54.132 37.978c-7.756 12.073-22.055 20.058-22.055 20.058S18.218 50.34 10.33 39M7.9 35A23.91 23.91 0 015 24C5 5.04 28 5 32 19c4-14 27-14 27 4a25.548 25.548 0 01-2.644 11" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M2 35h14.76a.5.5 0 00.39-.188l3.437-4.3a.5.5 0 01.8.022l4.166 5.833a.5.5 0 00.839-.039l6.1-10.459a.5.5 0 01.894.062l6.2 15.049a.5.5 0 00.91.033l3.371-6.741a.5.5 0 01.442-.272H62" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
