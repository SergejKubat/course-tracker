import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        console.log(`email: ${email}, password: ${password}`);
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
            </Container>
        </div>
    );
};

export default LoginPage;
