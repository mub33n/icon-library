import React from 'react';

export default function CodeBug(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path d="M18 2l8.078 13.324M46.039 2l-8.078 13.324M10 62c.75-2.076 3.586-7.583 8.143-8.661M54 62c-.748-2.076-3.582-7.583-8.141-8.661M13.986 40H2m60 0H49.986" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" data-name="layer2" />
      <ellipse strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" ry={24} rx={18} cy={38} cx="31.986" data-name="layer1" />
      <path strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" d="M54 16a23.843 23.843 0 01-22 14c-10.342 0-18.625-5.994-22-14m22 14v32" data-name="layer1" />
    </svg>
  );
}
