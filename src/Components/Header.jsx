/*
================================================================================
FILE: src/components/Header.jsx
PURPOSE: Corrected Header component with improved desktop spacing and a
         reliable auto-closing mobile menu.
================================================================================
*/
import React, { useState } from 'react';

const Header = ({ currentPage, navigateTo }) => {
    // State to manage whether the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // This function handles all navigation clicks
    const handleNavigation = (page) => {
        // First, it navigates to the desired page
        navigateTo(page);
        // Second, it explicitly sets the menu state to closed.
        // This ensures the overlay always hides after a link is clicked.
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#!" onClick={() => handleNavigation('home')}>
                            Eagle<span className="text-accent">Web</span>
                        </a>
                        
                        {/* Desktop Navigation (Visible on large screens and up) */}
                        <div className="d-none d-lg-block">
                            <ul className="navbar-nav ms-auto align-items-center">
                                {/* FIX 1: Added Bootstrap's 'mx-lg-2' class to each list item
                                  to increase the horizontal margin (the gap) on large screens.
                                */}
                                <li className="nav-item mx-lg-2">
                                    <a className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNavigation('home')}>Home</a>
                                </li>
                                <li className="nav-item mx-lg-2">
                                    <a className={`nav-link ${currentPage === 'details' ? 'active' : ''}`} onClick={() => handleNavigation('details')}>Talent Hunts</a>
                                </li>
                                <li className="nav-item mx-lg-2">
                                    <a className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleNavigation('about')}>About Us</a>
                                </li>
                                <li className="nav-item mx-lg-2">
                                    <a className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handleNavigation('contact')}>Contact</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <a className="btn btn-primary-custom" onClick={() => handleNavigation('apply')}>Apply Now</a>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Toggler Button (Visible on screens smaller than lg) */}
                        <button 
                            className="navbar-toggler d-lg-none" 
                            type="button" 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Full-Screen Mobile Menu Overlay
              Its visibility is controlled by the 'isMenuOpen' state.
            */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                 <ul className="mobile-nav-links">
                    <li>
                        <a className={`nav-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleNavigation('home')}>Home</a>
                    </li>
                    <li>
                        <a className={`nav-link ${currentPage === 'details' ? 'active' : ''}`} onClick={() => handleNavigation('details')}>Talent Hunts</a>
                    </li>
                    <li>
                        <a className={`nav-link ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleNavigation('about')}>About Us</a>
                    </li>
                    <li>
                        <a className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handleNavigation('contact')}>Contact</a>
                    </li>
                    <li>
                        <a className="btn btn-primary-custom mt-4" onClick={() => handleNavigation('apply')}>Apply Now</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
