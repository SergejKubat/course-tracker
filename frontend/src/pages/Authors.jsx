import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import AuthorItem from 'components/Author/Item';
import Input from 'components/Form/Input';

const AuthorsPage = () => {
    const filterAuthors = (e) => {
        if (e) {
            console.log(e);
        }
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container>
                <div className="text-center">
                    <h1>Authors Page</h1>
                    <p className="my-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione corporis aspernatur autem nostrum, animi, commodi,
                        iste sequi ut perferendis quos eaque quia velit quis facilis ipsum. Aspernatur illum quod maiores.
                    </p>
                    <Input
                        name="search"
                        placeholder="Search Authors"
                        icon={<FaSearch className="form-icon" />}
                        onValueChange={filterAuthors}
                        style={{ maxWidth: '45rem', margin: '1rem auto' }}
                    />
                </div>
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
                    <Col xs={12} md={3}>
                        <AuthorItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <AuthorItem />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthorsPage;
