import React, { useState, useContext } from 'react';

import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Notification from 'components/Notification';
import Spinner from 'components/Spinner';

import { UserContext } from 'context/UserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        setLoading(true);

        axios
            .post(
                'http://localhost:5000/api/login',
                {
                    email: email,
                    password: password
                },
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response.data);

                axios
                    .get('http://localhost:5000/api/user', { withCredentials: true })
                    .then((response) => {
                        setUser(response.data);
                        window.localStorage.setItem('user', JSON.stringify(response.data));
                        navigate('/user');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container className="text-center">
                <h1>SIGN IN</h1>
                <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <form className="login-form" onSubmit={login}>
                    <Input name="email" type="email" value={email} onValueChange={setEmail} placeholder="Your Email" required />
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                        placeholder="Your Password"
                        required
                    />
                    <p className="mb-4">
                        Don't have an account? <Link to="/registration">Sign Up</Link>
                    </p>
                    <Button text="Sign In" type="info" />
                </form>
                {error && <Notification type="danger" text={error} onClose={() => setError('')} />}
                {loading && <Spinner />}
            </Container>
        </div>
    );
};

export default LoginPage;
