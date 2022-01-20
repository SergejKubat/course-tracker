import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

import CourseItem from 'components/Course/Item';
import Spinner from 'components/Spinner';

import { calcAverageRating } from 'helpers/rating';

const UserPage = () => {
    const [user, setUser] = useState();
    const [courses, setCourses] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users/${id}`)
            .then((response) => {
                setUser(response.data);

                if (response.data.roleId === 2) {
                    axios
                        .get(`http://localhost:5000/api/courses?userId=${id}`)
                        .then((response) => {
                            setCourses(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div style={{ marginTop: '20vh' }}>
            {user ? (
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h1>
                                {user.firstName} {user.lastName}
                            </h1>
                            <p className="my-3">
                                <b>Profession:</b> {user.proffesion || 'Not Specified'}
                            </p>
                            {courses && user.roleId === 2 && (
                                <div className="mt-5">
                                    <div className="author-item-data">
                                        <AiFillStar className="icon" />
                                        <span className="text">{calcAverageRating(courses)} Author Rating</span>
                                    </div>
                                    <div className="author-item-data">
                                        <MdReviews className="icon" />
                                        <span className="text">
                                            {courses.reduce((acc, course) => acc + course.reviews.length, 0)} Reviews
                                        </span>
                                    </div>
                                    <div className="author-item-data">
                                        <BsFillPeopleFill className="icon" />
                                        <span className="text">
                                            {courses.reduce((acc, course) => acc + course.purchaseRecords.length, 0)} Students
                                        </span>
                                    </div>
                                    <div className="author-item-data">
                                        <AiFillPlayCircle className="icon" />
                                        <span className="text">{courses.length} Courses</span>
                                    </div>
                                </div>
                            )}
                        </Col>
                        <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <img
                                src={user.avatar}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="author-item-img"
                                style={{ height: '20rem' }}
                            />
                        </Col>
                    </Row>
                    <h2 className="mt-5">About Me</h2>
                    <p className="mt-5">{user.description}</p>
                    {user.roleId === 2 ? (
                        courses ? (
                            <div>
                                <h3 className="my-5">Courses ({courses.length})</h3>
                                <Row>
                                    {courses.map((course) => (
                                        <Col key={course.id} xs={12} md={3}>
                                            <CourseItem course={course} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        ) : (
                            <Spinner />
                        )
                    ) : (
                        <div></div>
                    )}
                </Container>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default UserPage;
