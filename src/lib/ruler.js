import React from 'react';

const RulerIcon = (props) => {
    return (
        <svg className={props.className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.75 5C15.1642 5 15.5 5.3276 15.5 5.73171V24.0244C15.5 24.0519 15.5015 24.0791 15.5046 24.1059L5.00014 34.3542L5 5.73171C5 5.3276 5.33578 5 5.75 5H14.75Z" fill="url(#ruler)"/>
            <path d="M5.39881 35H34.25C34.6642 35 35 34.6724 35 34.2683V25.4878C35 25.0837 34.6642 24.7561 34.25 24.7561H16.2499C16.1463 24.7561 16.0476 24.7356 15.9578 24.6985L5.39881 35Z" fill="url(#ruler1)"/>
            <path d="M10.2501 10.122C10.2501 9.71792 10.5859 9.39032 11.0001 9.39032H15.5001V10.8537H11.0001C10.5859 10.8537 10.2501 10.5261 10.2501 10.122Z" fill="white"/>
            <path d="M10.25 15.244C10.25 14.8399 10.5858 14.5123 11 14.5123H15.5V15.9757H11C10.5858 15.9757 10.25 15.6481 10.25 15.244Z" fill="white"/>
            <path d="M10.25 20.366C10.25 19.9619 10.5858 19.6343 11 19.6343H15.5V21.0977H11C10.5858 21.0977 10.25 20.7701 10.25 20.366Z" fill="white"/>
            <path d="M19.25 29.8782C18.8357 29.8782 18.5 29.5506 18.5 29.1465V24.7562H20V29.1465C20 29.5506 19.6642 29.8782 19.25 29.8782Z" fill="white"/>
            <path d="M24.4998 29.8782C24.0856 29.8782 23.7498 29.5506 23.7498 29.1465V24.7562H25.2498V29.1465C25.2498 29.5506 24.914 29.8782 24.4998 29.8782Z" fill="white"/>
            <path d="M29.7498 29.8782C29.3356 29.8782 28.9998 29.5506 28.9998 29.1465V24.7562H30.4998V29.1465C30.4998 29.5506 30.164 29.8782 29.7498 29.8782Z" fill="white"/>
            <defs>
            <linearGradient id="ruler" x1="6.60714" y1="35" x2="41.4552" y2="19.7833" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            <linearGradient id="ruler1" x1="6.60714" y1="35" x2="41.4552" y2="19.7833" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            </defs>
        </svg>
    );
}

export default RulerIcon;