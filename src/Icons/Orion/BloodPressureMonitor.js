import React from 'react';

export default function BloodPressureMonitor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <rect data-name="layer2" x={46} y={2} width={16} height={42} rx={4} ry={4} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M10 39V20a8 8 0 018-8h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M18 50a9.24 9.24 0 00-4-7.786V40a1 1 0 00-1-1H7a1 1 0 00-1 1v2.214A9.24 9.24 0 002 50a9.049 9.049 0 004.986 8.328A1.709 1.709 0 018 59.878 2.272 2.272 0 0010 62a2 2 0 002-2v-.122a1.709 1.709 0 011.014-1.551A9.049 9.049 0 0018 50z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" d="M24 34.859V6a2.006 2.006 0 012-2h20.544m0 38H41" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx={31} cy={42} r={10} fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer1" d="M34.314 38.412l-4.271 2.563a.2.2 0 00-.069.069l-2.563 4.271a.2.2 0 00.274.274l4.271-2.563a.2.2 0 00.069-.069l2.563-4.271a.2.2 0 00-.274-.274z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
