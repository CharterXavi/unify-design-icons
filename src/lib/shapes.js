import React from 'react';

const ShapesIcon = (props) => {
    return (
        <svg className={props.className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3076 24.2024C22.3076 23.457 22.939 22.8528 23.7179 22.8528H33.5897C34.3685 22.8528 34.9999 23.457 34.9999 24.2024V33.6503C34.9999 34.3957 34.3685 35 33.5897 35H23.7179C22.939 35 22.3076 34.3957 22.3076 33.6503V24.2024Z" fill="url(#shapes)"/>
            <path d="M24.4372 5.7362C25.0294 4.7546 26.5097 4.7546 27.1019 5.7362L34.4298 17.8835C35.022 18.865 34.2818 20.092 33.0975 20.092H18.4416C17.2573 20.092 16.5171 18.865 17.1093 17.8835L24.4372 5.7362Z" fill="#282E3E"/>
            <path d="M18.8462 28.3741C18.8462 32.0334 15.7466 34.9999 11.9231 34.9999C8.09957 34.9999 5 32.0334 5 28.3741C5 24.7148 8.09957 21.7484 11.9231 21.7484C15.7466 21.7484 18.8462 24.7148 18.8462 28.3741Z" fill="white"/>
            <defs>
            <linearGradient id="shapes" x1="22.9876" y1="35" x2="37.5175" y2="28.3707" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            </defs>
        </svg>
    );
}

export default ShapesIcon;