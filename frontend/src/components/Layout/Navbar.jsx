import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <header className="header">
            <Container className="header-container">
                <div className="header-side">
                    <div className="header-logo">
                        Course<span>Tracker</span>
                    </div>
                    <div className="header-drop">
                        <Link to="/categories" className="header-link">
                            CATEGORIES
                        </Link>
                        <ul className="header-drop-menu">
                            <li className="header-drop-item">
                                <Link to="/categories/1">Category 1</Link>
                            </li>
                            <li className="header-drop-item">
                                <Link to="/categories/2">Category 2</Link>
                            </li>
                            <li className="header-drop-item">
                                <Link to="/categories/3">Category 3</Link>
                            </li>
                            <li className="header-drop-item">
                                <Link to="/categories/4">Category 4</Link>
                            </li>
                            <li className="header-drop-item">
                                <Link to="/categories/5">Category 5</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/authors" className="header-link">
                        AUTHORS
                    </Link>
                </div>
                <div className="header-side">
                    <Link to="/registration">SIGN UP</Link>
                    <Link to="/login">SIGN IN</Link>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
