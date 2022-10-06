import React from 'react';

export default function Meh(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-meh" {...props}>
      <circle cx={12} cy={12} r={10} />
      <path d="M8 15h8M9 9h.01M15 9h.01" />
    </svg>
  );
}
