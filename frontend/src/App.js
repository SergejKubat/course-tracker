import React, { useState, useMemo } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import AuthorsPage from 'pages/Authors';
import UserPage from 'pages/User';
import CoursePage from 'pages/Course';
import CategoryPage from 'pages/Category';
import NotFound from 'pages/NotFound';

import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';

import { UserContext } from 'context/UserContext';

import './assets/sass/app.scss';

const App = () => {
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <UserContext.Provider value={value}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registration" element={<RegistrationPage />} />
                    <Route path="/authors" element={<AuthorsPage />} />
                    <Route path="/users/:id" element={<UserPage />} />
                    <Route path="/courses/:id" element={<CoursePage />} />
                    <Route path="/categories/:id" element={<CategoryPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </Router>
    );
};

export default App;
