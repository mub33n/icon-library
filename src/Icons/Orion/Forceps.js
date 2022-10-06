import React from 'react';

export default function Forceps(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M17.927 30.249l20.234 12.14a31.644 31.644 0 014.933 3.524l15.5 15.5a1.993 1.993 0 002.819 0 1.993 1.993 0 000-2.819l-15.5-15.5a23.676 23.676 0 01-3.524-4.933l-12.14-20.234m-1.422-.03l-10.93 10.93" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx="29.705" cy="9.973" r="7.973" transform="rotate(-45 29.704 9.973)" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <circle data-name="layer1" cx="9.973" cy="29.705" r="7.973" transform="rotate(-45 9.973 29.704)" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
