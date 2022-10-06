import React from 'react';

export default function Bookshelf(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M42.142 10.764l9.848-1.737 9.03 51.21-9.849 1.737zM28 22h16v40H28m8-34v18" strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} d="M12 62H2V10h10m0-8h16v60H12zm8 8v36" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
