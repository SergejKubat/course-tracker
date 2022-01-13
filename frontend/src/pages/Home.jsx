import React from 'react';

import { Container } from 'react-bootstrap';

import Button from 'components/Form/Button';

const HomePage = () => {
    return (
        <main style={{ marginTop: '10vh' }}>
            <Container>
                <h1>Welcome! Learn from our courses</h1>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias necessitatibus quibusdam vitae eligendi excepturi
                    provident non consequatur amet laudantium officia, cumque ullam ad iusto nulla corporis! Eligendi, tenetur saepe.
                </p>
                <h2 className="text-center" style={{ marginTop: '7rem' }}>
                    Latest Courses
                </h2>
                <p className="mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, rem?</p>
                <Button text="Some text" />
            </Container>
        </main>
    );
};

export default HomePage;
