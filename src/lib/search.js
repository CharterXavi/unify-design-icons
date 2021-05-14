import React from 'react';

const SearchIcon = (props) => {
    return (
        <svg className={props.className} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5884 6.60081L13.1276 5L12.6669 6.60081L11.0913 7.06897L12.6669 7.53712L13.1276 9.13793L13.5884 7.53712L15.164 7.06897L13.5884 6.60081ZM8.49714 10.7388L8.03636 9.13794L7.57559 10.7388L6 11.2069L7.57559 11.6751L8.03636 13.2759L8.49714 11.6751L10.0727 11.2069L8.49714 10.7388ZM24.836 31.8965L25.1816 33.0972L26.3633 33.4483L25.1816 33.7994L24.836 35L24.4904 33.7994L23.3088 33.4483L24.4904 33.0972L24.836 31.8965ZM31.8337 30.9942L31.2001 28.7931L30.5665 30.9942L28.4001 31.6379L30.5665 32.2816L31.2001 34.4828L31.8337 32.2816L34.0001 31.6379L31.8337 30.9942Z" fill="url(#search)"/>
            <path d="M18.4724 21.5517L6.50879 34.4828" stroke="#282E3E" strokeWidth="3.62069" strokeLinecap="round"/>
            <path d="M32.7151 15.3448C32.7151 20.3556 28.7203 24.3966 23.8182 24.3966C18.9162 24.3966 14.9214 20.3556 14.9214 15.3448C14.9214 10.334 18.9162 6.2931 23.8182 6.2931C28.7203 6.2931 32.7151 10.334 32.7151 15.3448Z" fill="url(#search1)" stroke="#282E3E" stroke-width="1.55172"/>
            <path d="M27.9185 9.39654C27.9185 10.1725 26.6458 9.13786 24.3549 8.8793C22.064 8.62074 20.5368 9.39651 20.7913 8.62068C21.0459 7.84485 22.5731 7.58622 24.3549 7.5862C26.1367 7.58618 27.9185 8.62056 27.9185 9.39654Z" fill="white"/>
            <defs>
                <linearGradient id="search" x1="7.5" y1="35" x2="40.7103" y2="21.4652" gradientUnits="userSpaceOnUse">
                    <stop offset="0.109375" stopColor="#F14D70"/>
                    <stop offset="0.317708" stopColor="#FF008A"/>
                    <stop offset="0.520833" stopColor="#FF446C"/>
                    <stop offset="0.869792" stopColor="#FFB016"/>
                </linearGradient>
                <linearGradient id="search1" x1="15.1819" y1="25.1724" x2="37.7667" y2="15.466" gradientUnits="userSpaceOnUse">
                    <stop offset="0.109375" stopColor="#F14D70"/>
                    <stop offset="0.317708" stopColor="#FF008A"/>
                    <stop offset="0.520833" stopColor="#FF446C"/>
                    <stop offset="0.869792" stopColor="#FFB016"/>
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SearchIcon;