import React from 'react';

export default function Loop(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer2" d="M12 43.748V20.492a5.269 5.269 0 015.004-5.496l13.38.002L27.006 18l3.986 4.484 11.523-10.241L31 2l-3.993 4.484L29.837 9H17A11.263 11.263 0 006 20.492v23.256a11.195 11.195 0 0010.908 11.245l.18-5.997A5.223 5.223 0 0112 43.748z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
      <path data-name="layer1" d="M49.089 9.248l-.178 5.997A5.222 5.222 0 0154 20.492v23.256C54 46.643 52.895 49 50 49H35.888l3.105-2.76-3.986-4.485-11.523 10.243L35 62l3.993-4.243L35.891 55H48.75A11.265 11.265 0 0060 43.748V20.492A11.194 11.194 0 0049.089 9.248z" fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
