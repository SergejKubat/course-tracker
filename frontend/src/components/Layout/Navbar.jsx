import React from 'react';

import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar id="navbar" expand="lg" variant="dark" className="header">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <div className="header-logo">
                            Course<span>Tracker</span>
                        </div>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <div className="header-item">
                            <NavLink to="/authors" className="header-link">
                                AUTHORS
                            </NavLink>
                        </div>
                        <div className="header-item">
                            <div className="header-drop">
                                <NavLink to="/categories" className="header-link">
                                    CATEGORIES
                                </NavLink>
                                <ul className="header-drop-menu">
                                    <li className="header-drop-item">
                                        <NavLink to="/categories/1">Category 1</NavLink>
                                    </li>
                                    <li className="header-drop-item">
                                        <NavLink to="/categories/2">Category 2</NavLink>
                                    </li>
                                    <li className="header-drop-item">
                                        <NavLink to="/categories/3">Category 3</NavLink>
                                    </li>
                                    <li className="header-drop-item">
                                        <NavLink to="/categories/4">Category 4</NavLink>
                                    </li>
                                    <li className="header-drop-item">
                                        <NavLink to="/categories/5">Category 5</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-item">
                            <NavLink to="/registration" className="header-btn">
                                SIGN UP
                            </NavLink>
                        </div>
                        <div className="header-item">
                            <NavLink to="/login" className="header-link">
                                SIGN IN
                            </NavLink>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
