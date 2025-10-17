import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white font-medium text-sm uppercase tracking-wider underline'
                        : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'
                }
            >
                HOME
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white font-medium text-sm uppercase tracking-wider underline'
                        : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'
                }
            >
                ABOUT
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/projects'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white font-medium text-sm uppercase tracking-wider underline'
                        : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'
                }
            >
                PROJECTS
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/skills'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white font-medium text-sm uppercase tracking-wider underline'
                        : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'
                }
            >
                SKILLS
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/contact'
                className={({ isActive }) =>
                    isActive
                        ? 'text-white font-medium text-sm uppercase tracking-wider underline'
                        : 'text-white hover:text-white font-medium uppercase tracking-wider transition-colors duration-300'
                }
            >
                CONTACT
            </NavLink>
        </li>
    </>

    return (
        <nav className="navbar backdrop-blur-md sticky top-0 z-50 px-4 lg:px-16 py-3 border-b"
            style={{
                background: 'linear-gradient(90deg, #07233b 1.67%, #041d34 39.95%, #04192d 58.24%, #040e18 80.28%, #050c16 101.48%)'
            }}>

            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-56 space-y-2">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>

                    <span className="text-xl lg:text-3xl font-bold text-white">CHAITEY</span>
                </div>
            </div>

            <div className="navbar-end">

                <div className="hidden lg:flex items-center gap-8 mr-6">
                    <ul className="menu menu-horizontal gap-6">
                        {links}
                    </ul>
                </div>


                <button className="bg-[#0788ff] hover:bg-black border-2 border-transparent hover:border-white text-white px-4 py-2 lg:px-8 lg:py-4 rounded-full text-xs lg:text-sm font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Resume
                </button>
            </div>
        </nav>
    );
};

export default Navbar;