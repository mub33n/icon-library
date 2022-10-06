import React from 'react';

export default function PlaneLeaving(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={128} height={128} {...props}>
      <defs>
        <clipPath id="clip-Plane_Leaving">
          <path d="M0 0h128v128H0z" />
        </clipPath>
        <style dangerouslySetInnerHTML={{__html: "\n      .cls-2{fill:none;stroke:currentColor;stroke-width:5px;stroke-linecap:round;stroke-linejoin:round}\n    " }} />
      </defs>
      <g id="Plane_Leaving" clipPath="url(#clip-Plane_Leaving)">
        <path id="Path_18" d="M478.176 74.566l23.974-5.326s8.832-2.875 4.867-4.858-6.669-4.236-13.249-4.326-61.2 10.274-61.917 10a60.176 60.176 0 01-5.588-3.245c-5.554-3.9-15.7-11.841-17.394-12.618-2.163-.991-5.317 1.442-5.317 1.442l6.922 13.619" className="cls-2" data-name="Path 18" transform="rotate(-20 252.456 1181.892)" />
        <path id="Line_2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={5} d="M19.005 93.482l12.17-12.255" data-name="Line 2" />
        <path id="Path_19" d="M447.744 77.484l23.166-4.34.2-.038 1.057 4.384 1.132 4.692s-8.175 3.334-13.582.637-2-6.688-2-6.688" className="cls-2" data-name="Path 19" transform="rotate(-20 249.857 1192.787)" />
        <path id="Path_20" fill="none" stroke="currentColor" strokeWidth={5} d="M67.66 77.514L54.54 84.8l-1.647.695-1.126.475s-15.887 4.549-26.485 1.968" data-name="Path 20" />
      </g>
    </svg>
  );
}
