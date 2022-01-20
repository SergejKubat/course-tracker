import React, { useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import AuthUser from 'pages/AuthUser';
import AuthorsPage from 'pages/Authors';
import UserPage from 'pages/User';
import CoursePage from 'pages/Course';
import CategoryPage from 'pages/Category';
import Purchase from 'pages/Purchase';
import NotFound from 'pages/NotFound';

import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';

import { UserContext } from 'context/UserContext';

import './assets/sass/app.scss';

const App = () => {
    const [user, setUser] = useState(window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/user', { withCredentials: true })
            .then((response) => {
                setUser(response.data);
                window.localStorage.setItem('user', JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Router>
            <UserContext.Provider value={value}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/user" />} />
                    <Route path="/registration" element={!user ? <RegistrationPage /> : <Navigate to="/user" />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="/user" element={user ? <AuthUser /> : <Navigate to="/login" />} />
                    <Route path="/users/:id" element={<UserPage />} />
                    <Route path="/courses/:id" element={<CoursePage />} />
                    <Route path="/categories/:id" element={<CategoryPage />} />
                    <Route path="/purchase/:id" element={user ? <Purchase /> : <Navigate to="/login" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </Router>
    );
};

export default App;
