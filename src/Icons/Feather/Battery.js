import React from 'react';

export default function Battery(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-battery" {...props}>
      <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
      <path d="M23 13v-2" />
    </svg>
  );
}
