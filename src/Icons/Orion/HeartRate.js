import React from 'react';

export default function HeartRate(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M7 34h10.76a.5.5 0 00.39-.188l3.437-4.3a.5.5 0 01.8.022l4.166 5.833a.5.5 0 00.839-.039l6.1-10.459a.5.5 0 01.894.062l6.2 15.049a.5.5 0 00.91.033l3.371-6.741a.5.5 0 01.442-.272H57" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <rect data-name="layer2" x={2} y={7} width={60} height={50} rx={3} ry={3} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M7 12h50v35H7zm50 40H42" strokeLinejoin="round" />
      <path data-name="layer1" d="M19.5 17a2.716 2.716 0 00-2.5 1.481A2.716 2.716 0 0014.5 17a2.373 2.373 0 00-2.5 2.222c0 1.926 1.833 3.852 5 5.778 3.167-1.926 5-3.852 5-5.778A2.373 2.373 0 0019.5 17zM47 17s-3 0-3 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={46} cy={22} r={2} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M52 17v7" strokeLinejoin="round" />
    </svg>
  );
}
