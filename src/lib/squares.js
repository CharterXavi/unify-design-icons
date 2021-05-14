import React from 'react';

const SquaresIcon = (props) => {

return (
    <svg className={props.className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3C4.11929 3 3 4.11929 3 5.5V15.5C3 16.8807 4.11929 18 5.5 18H15.5C16.8807 18 18 16.8807 18 15.5V5.5C18 4.11929 16.8807 3 15.5 3H5.5Z" fill="url(#squares)"/>
      <path d="M5.5 22C4.11929 22 3 23.1193 3 24.5V34.5C3 35.8807 4.11929 37 5.5 37H15.5C16.8807 37 18 35.8807 18 34.5V24.5C18 23.1193 16.8807 22 15.5 22H5.5Z" fill="url(#squares1)"/>
      <path d="M22 5.5C22 4.11929 23.1193 3 24.5 3H34.5C35.8807 3 37 4.11929 37 5.5V15.5C37 16.8807 35.8807 18 34.5 18H24.5C23.1193 18 22 16.8807 22 15.5V5.5Z" fill="url(#squares2)"/>
      <path d="M24.5 22C23.1193 22 22 23.1193 22 24.5V34.5C22 35.8807 23.1193 37 24.5 37H34.5C35.8807 37 37 35.8807 37 34.5V24.5C37 23.1193 35.8807 22 34.5 22H24.5Z" fill="url(#squares3)"/>
      <defs>
        <linearGradient id="squares" x1="4.82143" y1="37" x2="44.3159" y2="19.7544" gradientUnits="userSpaceOnUse">
          <stop offset="0.109375" stopColor="#F14D70"/>
          <stop offset="0.317708" stopColor="#FF008A"/>
          <stop offset="0.520833" stopColor="#FF446C"/>
          <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
        <linearGradient id="squares1" x1="4.82143" y1="37" x2="44.3159" y2="19.7544" gradientUnits="userSpaceOnUse">
          <stop offset="0.109375" stopColor="#F14D70"/>
          <stop offset="0.317708" stopColor="#FF008A"/>
          <stop offset="0.520833" stopColor="#FF446C"/>
          <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
        <linearGradient id="squares2" x1="4.82143" y1="37" x2="44.3159" y2="19.7544" gradientUnits="userSpaceOnUse">
          <stop offset="0.109375" stopColor="#F14D70"/>
          <stop offset="0.317708" stopColor="#FF008A"/>
          <stop offset="0.520833" stopColor="#FF446C"/>
          <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
        <linearGradient id="squares3" x1="4.82143" y1="37" x2="44.3159" y2="19.7544" gradientUnits="userSpaceOnUse">
          <stop offset="0.109375" stopColor="#F14D70"/>
          <stop offset="0.317708" stopColor="#FF008A"/>
          <stop offset="0.520833" stopColor="#FF446C"/>
          <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SquaresIcon;