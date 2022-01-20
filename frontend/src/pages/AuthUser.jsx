import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

import Input from 'components/Form/Input';
import Textarea from 'components/Form/Textarea';
import Button from 'components/Form/Button';
import Notification from 'components/Notification';
import ModalUploadImage from 'components/Modal/UploadImage';
import Spinner from 'components/Spinner';

import { UserContext } from 'context/UserContext';

import { convertDateToString } from 'helpers/date';

const AuthUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profession, setProfession] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setProfession(user.profession);
        setDescription(user.description);
    }, [user]);

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return 'Student';
            case 2:
                return 'Author';
            case 3:
                return 'Admin';
            default:
                return 'Error';
        }
    };

    const updateUser = (userData) => {
        setUser(userData);
        window.localStorage.setItem('user', JSON.stringify(userData));
    };

    const updateDetails = (e) => {
        e.preventDefault();

        setLoading(true);

        axios
            .put(
                `http://localhost:5000/api/users/${user.id}`,
                {
                    firstName: firstName,
                    lastName: lastName,
                    profession: profession,
                    description: description
                },
                { withCredentials: true }
            )
            .then((response) => {
                updateUser(response.data);
                setSuccess('Successfully updated details.');
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div style={{ marginTop: '10vh' }}>
            <Container>
                <h1 className="mb-5">
                    {user.firstName} {user.lastName}
                </h1>
                <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="d-block mb-4" />
                <Button text="New Avatar" onClick={() => setModalShow(true)} />
                <p className="mt-4">
                    <b>Role:</b> {getRole(user.roleId)}
                </p>
                <p>
                    <b>Email:</b> {user.email}
                </p>
                <p>
                    <b>Joined:</b> {convertDateToString(new Date(user.dateCreated))}
                </p>
                <form autoComplete="off" className="my-5" onSubmit={updateDetails}>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>First Name:</p>
                            <Input
                                name="firstName"
                                defaultValue={firstName}
                                onValueChange={setFirstName}
                                placeholder="Not Specified"
                                required
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <p>Last Name:</p>
                            <Input
                                name="lastName"
                                defaultValue={lastName}
                                onValueChange={setLastName}
                                placeholder="Not Specified"
                                required
                            />
                        </Col>
                    </Row>
                    <p>Profession:</p>
                    <Input name="profession" defaultValue={profession} onValueChange={setProfession} placeholder="Not Specified" required />
                    <p>Description:</p>
                    <Textarea
                        name="description"
                        defaultValue={description}
                        onValueChange={setDescription}
                        placeholder="Not Specified"
                        required
                    />
                    <Button type="info" text="Update Details" />
                </form>
                <ModalUploadImage show={modalShow} onHide={() => setModalShow(false)} />
                {success && <Notification type="success" text={success} onClose={() => setSuccess('')} />}
                {loading && <Spinner />}
            </Container>
        </div>
    );
};

export default AuthUser;
