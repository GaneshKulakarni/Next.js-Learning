import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-950 text-white flex justify-between h-15 px-5 items-center'>
            <div className="logo font-bold">GetMeAchain!</div>
            <ul className='flex justify-between gap-4 '>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Signups</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar
