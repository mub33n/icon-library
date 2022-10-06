import React from 'react';

export default function Monitor(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor" {...props}>
      <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
