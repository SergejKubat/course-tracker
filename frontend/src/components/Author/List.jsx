import React from 'react';

import { Row, Col } from 'react-bootstrap';

import AuthorItem from './Item';

const AuthorItemList = ({ heading, description }) => {
    return (
        <section className="section">
            <h2 className="text-center">{heading}</h2>
            <p className="mt-4 mb-0 text-center">{description}</p>
            <Row style={{ marginTop: '5rem' }}>
                <Col xs={12} md={3}>
                    <AuthorItem />
                </Col>
                <Col xs={12} md={3}>
                    <AuthorItem />
                </Col>
                <Col xs={12} md={3}>
                    <AuthorItem />
                </Col>
                <Col xs={12} md={3}>
                    <AuthorItem />
                </Col>
            </Row>
        </section>
    );
};

export default AuthorItemList;
