import React from 'react';

export default function BallpointPen(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M26.328 18.566L40.516 4.378a5.4 5.4 0 017.637 0l1.837 1.839" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" d="M44.847 26.922L59.67 12.1l.014-.013A5.5 5.5 0 0051.9 4.3L37.067 19.141" data-name="layer2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M44.847 26.922l-7.78-7.781-29.6 29.599-4.764 12.567 12.545-4.785 29.599-29.6zM7.467 48.74l7.781 7.782" strokeWidth={4} strokeMiterlimit={10} stroke="currentColor" fill="none" data-name="layer1" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
