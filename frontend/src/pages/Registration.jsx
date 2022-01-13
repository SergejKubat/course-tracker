import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Input from 'components/Form/Input';
import Button from 'components/Form/Button';

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registration = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            console.log('error');
            return;
        }

        console.log('registration');
    };

    return (
        <div style={{ marginTop: '15vh' }}>
            <Container className="text-center">
                <h1>SIGN UP</h1>
                <p className="my-3">
                    Dicta beatae necessitatibus odit fugit natus, dolorum aperiam nobis maxime qui corporis voluptatem eos ut ipsa repellat.
                </p>
                <form className="login-form" onSubmit={registration}>
                    <Input
                        name="firstName"
                        type="text"
                        value={firstName}
                        onValueChange={setFirstName}
                        placeholder="Your First Name"
                        required
                    />
                    <Input name="lastName" type="text" value={lastName} onValueChange={setLastName} placeholder="Your Last Name" required />
                    <Input name="email" type="email" value={email} onValueChange={setEmail} placeholder="Your Email" required />
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        onValueChange={setPassword}
                        placeholder="Your Password"
                        required
                    />
                    <Input
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onValueChange={setConfirmPassword}
                        placeholder="Confirm Your Password"
                        required
                    />
                    <p className="mb-4">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                    <Button text="Sign Up" type="info" />
                </form>
            </Container>
        </div>
    );
};

export default RegistrationPage;
