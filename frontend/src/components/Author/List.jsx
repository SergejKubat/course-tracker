import React from 'react';

import { Row, Col } from 'react-bootstrap';

import AuthorItem from './Item';

const AuthorItemList = ({ heading, description, authors }) => {
    return (
        <section className="section">
            <h2 className="text-center">{heading}</h2>
            <p className="mt-4 mb-0 text-center">{description}</p>
            <Row style={{ marginTop: '5rem' }}>
                {authors.map((author) => (
                    <Col key={author.id} xs={12} md={3}>
                        <AuthorItem author={author} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default AuthorItemList;
