import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-dark text-white">
            <h1 className="bg-dark">Programming School</h1>
            <nav className="nav-link">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/teachers">Teachers</Link>
            </nav>
        </div>
    );
};

export default Header;