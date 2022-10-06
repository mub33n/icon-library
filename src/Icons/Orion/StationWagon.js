import React from 'react';

export default function StationWagon(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M9.011 41H3s.023-4.814.368-8.32a37.433 37.433 0 014.369-12.12A3.908 3.908 0 0110.444 19H36.27l8.856 8s10.722 1.5 13.688 1.728c3.454.271 3.176 2.894 3.176 2.894s-.364 3.917-.624 5.841S60.047 41 58.357 41H55m-12 0H21.011m24.131-14.006H4.867" data-name="layer2" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={6} cy={41} cx="15.011" data-name="layer1" />
      <circle strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" r={6} cy="40.999" cx="49.002" data-name="layer1" />
    </svg>
  );
}
