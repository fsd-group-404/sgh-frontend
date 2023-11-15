import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="path/to/hero/logo" alt="Hero Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#">Search</a></li>
                <li><a href="#">My Groups</a></li>
                <li><a href="#">My Account</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
