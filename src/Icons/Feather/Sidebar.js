import React from 'react';

export default function Sidebar(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sidebar" {...props}>
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M9 3v18" />
    </svg>
  );
}
