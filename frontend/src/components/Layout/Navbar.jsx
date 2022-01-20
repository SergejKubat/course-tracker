import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { UserContext } from 'context/UserContext';

const Navigation = () => {
    const [categories, setCategories] = useState();

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

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

    const logOut = () => {
        axios
            .post('http://localhost:5000/api/logout', null, { withCredentials: true })
            .then((response) => {
                setUser(null);
                window.localStorage.removeItem('user');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                        {!user && (
                            <React.Fragment>
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
                            </React.Fragment>
                        )}
                        {user && (
                            <div className="d-flex align-items-center">
                                <div className="header-item">
                                    <NavLink to="/user" className="header-link">
                                        <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="img" />
                                    </NavLink>
                                </div>
                                <div className="header-item">
                                    <p className="header-link" style={{ marginBottom: 0, cursor: 'pointer' }} onClick={logOut}>
                                        LOG OUT
                                    </p>
                                </div>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
