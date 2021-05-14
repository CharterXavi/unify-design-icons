import React from 'react';

const VisionIcon = (props) => {
    return (
        <svg className={props.className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.4655 21.0345C35.4655 22.8568 33.9254 24.6602 31.0805 26.0397C28.2724 27.4014 24.3555 28.2586 20 28.2586C15.6445 28.2586 11.7276 27.4014 8.9195 26.0397C6.07458 24.6602 4.53448 22.8568 4.53448 21.0345C4.53448 19.2121 6.07458 17.4088 8.9195 16.0292C11.7276 14.6675 15.6445 13.8103 20 13.8103C24.3555 13.8103 28.2724 14.6675 31.0805 16.0292C33.9254 17.4088 35.4655 19.2121 35.4655 21.0345Z" fill="white" stroke="#282E3E" strokeWidth="1.06897"/>
            <ellipse cx="19.9997" cy="21.0345" rx="6.70968" ry="6.72414" fill="url(#vision)"/>
            <ellipse cx="20.0001" cy="21.0345" rx="2.58065" ry="2.58621" fill="#282E3E"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.7571 6.60081L13.29 5L12.8229 6.60081L11.2255 7.06897L12.8229 7.53712L13.29 9.13793L13.7571 7.53712L15.3545 7.06897L13.7571 6.60081ZM8.59612 10.7387L8.12897 9.13793L7.66182 10.7387L6.06445 11.2069L7.66182 11.6751L8.12897 13.2759L8.59612 11.6751L10.1935 11.2069L8.59612 10.7387ZM25.1617 31.8966L25.512 33.0972L26.7101 33.4483L25.512 33.7994L25.1617 35L24.8113 33.7994L23.6133 33.4483L24.8113 33.0972L25.1617 31.8966ZM32.2555 30.9942L31.6131 28.7931L30.9708 30.9942L28.7744 31.6379L30.9708 32.2816L31.6131 34.4827L32.2555 32.2816L34.4518 31.6379L32.2555 30.9942Z" fill="url(#vision1)"/>
            <defs>
            <linearGradient id="vision" x1="14.0089" y1="27.7586" x2="29.6076" y2="20.962" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            <linearGradient id="vision1" x1="7.58521" y1="35" x2="41.1219" y2="21.1431" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
            </defs>
        </svg>
    );
}

export default VisionIcon;