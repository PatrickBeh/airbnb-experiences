import React from 'react'
import AirbnbLogo from '../images/Airbnb Logo.svg'

export default function Header() {
    return (
        <header className="h-18 flex items-center justify-start p-8 bg-white min-w-xl drop-shadow-md">
            <img src={AirbnbLogo} className="h-7 w-20 object-contain" alt='Airbnb Logo'/>
        </header>
    )
}