import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import CourseItem from 'components/Course/Item';
import Input from 'components/Form/Input';

const CategoryPage = () => {
    const [category, setCategory] = useState();
    const [courses, setCourses] = useState();
    const [filteredCourse, setFilteredCourses] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/categories/${id}`)
            .then((response) => {
                setCategory(response.data);

                axios
                    .get(`http://localhost:5000/api/courses?categoryId=${id}`)
                    .then((response) => {
                        setCourses(response.data);
                        setFilteredCourses(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const filterCourses = (e) => {
        if (e) {
            setFilteredCourses(courses.filter((course) => course.name.toLowerCase().startsWith(e.toLowerCase())));
        } else {
            setFilteredCourses(courses);
        }
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            {category && (
                <Container>
                    <div className="text-center">
                        <h1>
                            Category: <span style={{ color: '#206ee9' }}>{category.name}</span>
                        </h1>
                        <p className="my-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi sapiente, labore harum accusantium animi
                            adipisci fugit eos assumenda temporibus at et vel nam obcaecati ducimus?
                        </p>
                        <Input
                            name="search"
                            placeholder="Search Courses"
                            icon={<FaSearch className="form-icon" />}
                            onValueChange={filterCourses}
                            style={{ maxWidth: '45rem', margin: '1rem auto' }}
                        />
                    </div>
                    {filteredCourse && filteredCourse.length > 0 ? (
                        <div>
                            <h3 className="mt-5 text-center">Courses ({filteredCourse.length})</h3>
                            <Row>
                                {filteredCourse.map((course) => (
                                    <Col key={course.id} xs={12} md={3} className="mt-5">
                                        <CourseItem course={course} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ) : (
                        <div>
                            <h3 className="mt-5 text-center">No results.</h3>
                        </div>
                    )}
                </Container>
            )}
        </div>
    );
};

export default CategoryPage;
