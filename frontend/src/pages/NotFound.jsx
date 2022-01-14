import React from 'react';

import { Container } from 'react-bootstrap';

import Button from 'components/Form/Button';

const NotFound = () => {
    const previousPage = () => {
        window.history.back();
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container className="text-center">
                <h1>
                    <span style={{ color: '#dc3545' }}>Error 404.</span> Not Found
                </h1>
                <p className="my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, veritatis ratione dignissimos eos officia neque
                    voluptates delectus et maxime repellat itaque eaque earum aspernatur! Dolore quia sunt eius placeat rem, in quidem
                    beatae laborum perferendis nobis repudiandae, facilis, ipsam qui officiis illum rerum sint alias sit possimus. Impedit,
                    temporibus rerum!
                </p>
                <Button text="PREVIOUS PAGE" style={{ marginTop: '3rem' }} onClick={previousPage} />
            </Container>
        </div>
    );
};

export default NotFound;
