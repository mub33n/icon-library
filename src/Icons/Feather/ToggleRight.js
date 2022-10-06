import React from 'react';

export default function ToggleRight(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-toggle-right" {...props}>
      <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <circle cx={16} cy={12} r={3} />
    </svg>
  );
}
