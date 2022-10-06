import React from 'react';

export default function BarChart(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart" {...props}>
      <path d="M12 20V10M18 20V4M6 20v-4" />
    </svg>
  );
}
