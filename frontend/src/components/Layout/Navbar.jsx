import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                                {categories && (
                                    <ul className="header-drop-menu">
                                        {categories.map((category) => (
                                            <li key={category.id} className="header-drop-item">
                                                <NavLink to={`/categories/${category.id}`}>{category.name}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
