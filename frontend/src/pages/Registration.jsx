import React, { useState } from 'react';

import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Notification from 'components/Notification';
import Spinner from 'components/Spinner';

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const registration = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Password and repeated password didn't match.");
            return;
        }

        setLoading(true);

        axios
            .post('http://localhost:5000/api/register', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
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
                {error && <Notification type="danger" text={error} onClose={() => setError('')} />}
                {loading && <Spinner />}
            </Container>
        </div>
    );
};

export default RegistrationPage;
