import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import CourseItem from 'components/Course/Item';
import Input from 'components/Form/Input';

const CategoryPage = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    const filterCourses = (e) => {
        if (e) {
            console.log(e);
        }
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container>
                <div className="text-center">
                    <h1>
                        Category: <span style={{ color: '#206ee9' }}>Frontend Development</span>
                    </h1>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sapiente, labore harum accusantium animi adipisci
                        fugit eos assumenda temporibus at et vel nam obcaecati ducimus?
                    </p>
                    <Input
                        name="search"
                        placeholder="Search Courses"
                        icon={<FaSearch className="form-icon" />}
                        onValueChange={filterCourses}
                        style={{ maxWidth: '45rem', margin: '1rem auto' }}
                    />
                </div>
                <h3 className="mt-5">Courses (5)</h3>
                <Row>
                    <Col xs={12} md={3} className="mt-5">
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3} className="mt-5">
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3} className="mt-5">
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3} className="mt-5">
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3} className="mt-5">
                        <CourseItem />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoryPage;
