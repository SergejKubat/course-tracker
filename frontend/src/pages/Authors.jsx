import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import AuthorItem from 'components/Author/Item';
import Input from 'components/Form/Input';

const AuthorsPage = () => {
    const [authors, setAuthors] = useState();
    const [filteredAuthors, setFilteredAuthors] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users?roleId=2`)
            .then((response) => {
                setAuthors(response.data);
                setFilteredAuthors(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filterAuthors = (e) => {
        if (e) {
            setFilteredAuthors(
                authors.filter((author) =>
                    (author.firstName.toLowerCase() + ' ' + author.lastName.toLowerCase()).startsWith(e.toLowerCase())
                )
            );
        } else {
            setFilteredAuthors(authors);
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
                {filteredAuthors && filteredAuthors.length > 0 ? (
                    <Row style={{ marginTop: '5rem' }}>
                        {filteredAuthors.map((author) => (
                            <Col key={author.id} xs={12} md={3}>
                                <AuthorItem author={author} />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div>
                        <h3 className="mt-5 text-center">No results.</h3>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default AuthorsPage;
