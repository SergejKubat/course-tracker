import React, { useContext } from 'react';

import { Container } from 'react-bootstrap';

import { UserContext } from 'context/UserContext';

import { convertDateToString } from 'helpers/date';

const AuthUser = () => {
    const { user } = useContext(UserContext);

    const getRole = (roleId) => {
        switch (roleId) {
            case 1:
                return 'Student';
            case 2:
                return 'Author';
            case 3:
                return 'Admin';
        }
    };

    return (
        <div style={{ marginTop: '10vh' }}>
            <Container>
                <h1 className="mb-5">
                    {user.firstName} {user.lastName}
                </h1>
                <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="mb-5" />
                <p>
                    <b>Role:</b> {getRole(user.roleId)}
                </p>
                <p>
                    <b>Email:</b> {user.email}
                </p>
                <p>
                    <b>Profession:</b> {user.profession}
                </p>
                <p>
                    <b>Date Created:</b> {convertDateToString(new Date(user.dateCreated))}
                </p>
                <p>
                    <b>Description:</b> {user.description}
                </p>
            </Container>
        </div>
    );
};

export default AuthUser;
