import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = () => {
        return <>
            <NavLink to="/" className={({ isActive }) =>`block px-3 py-2 rounded-md text-base font-medium opacity-80 hover:opacity-100 ${isActive ? 'bg-white text-black hover:text-black p-3 opacity-100' : ''}`}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) =>`block px-3 py-2 rounded-md text-base font-medium opacity-80 hover:opacity-100 ${isActive ? 'bg-white text-black hover:text-black p-3 opacity-100' : ''}`}>Services</NavLink>
            <NavLink to="/about" className={({ isActive }) =>`block px-3 py-2 rounded-md text-base font-medium opacity-80 hover:opacity-100 ${isActive ? 'bg-white text-black hover:text-black p-3 opacity-100' : ''}`}>About</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) =>`block px-3 py-2 rounded-md text-base font-medium opacity-80 hover:opacity-100 ${isActive ? 'bg-white text-black hover:text-black p-3 opacity-100' : ''}`}>Contact Us</NavLink>
            

        </>
    }

    return (
        <nav className="text-white absolute w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold">
                            Developer Baby
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLinks></NavLinks>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden z-50 relative" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-10">
                        <NavLinks></NavLinks>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
