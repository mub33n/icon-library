import React from 'react';

export default function CoffeeCup(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"  aria-labelledby="title" aria-describedby="desc" width={24} height={24} {...props}>
      <path data-name="layer1" d="M51.996 12v24.856c0 9.468-9.58 17.144-19.049 17.144h-1.902c-9.469 0-19.049-7.676-19.049-17.144V12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
      <path data-name="layer2" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} d="M2 54h59.994" strokeLinejoin="round" />
      <path data-name="layer1" d="M51.996 15.998h1.016a8.985 8.985 0 018.984 8.984 8.985 8.985 0 01-8.984 8.983h-1.014" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={4} strokeLinejoin="round" />
    </svg>
  );
}
