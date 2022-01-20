import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { MdOutlineUpdate, MdLanguage } from 'react-icons/md';
import { BsFillPeopleFill, BsPlayCircle } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';

import Button from 'components/Form/Button';
import SectionList from 'components/Section/List';
import CourseItemList from 'components/Course/List';
import ReviewItemList from 'components/Review/List';
import ModalVideo from 'components/Modal/Video';
import CreateReview from 'components/Review/Create';
import Spinner from 'components/Spinner';

import { UserContext } from 'context/UserContext';

import { convertDateToString } from 'helpers/date';

const CoursePage = () => {
    const [course, setCourse] = useState();
    const [author, setAuthor] = useState();
    const [category, setCategory] = useState();
    const [sections, setSections] = useState();
    const [relatedCourses, setRelatedCourses] = useState();
    const [modalShow, setModalShow] = useState(false);

    const { id } = useParams();

    const { user } = useContext(UserContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/courses/${id}`)
            .then((response) => {
                setCourse(response.data);

                axios
                    .get(`http://localhost:5000/api/users/${response.data.userId}`)
                    .then((response) => {
                        setAuthor(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                axios
                    .get(`http://localhost:5000/api/categories/${response.data.categoryId}`)
                    .then((response) => {
                        setCategory(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                axios
                    .get(`http://localhost:5000/api/courses/${id}/sections`)
                    .then((response) => {
                        setSections(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                axios
                    .get(`http://localhost:5000/api/courses?categoryId=${response.data.categoryId}`)
                    .then((response) => {
                        setRelatedCourses(response.data.filter((course) => course.id !== Number(id)));
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const updateCourse = () => {
        axios
            .get(`http://localhost:5000/api/courses/${id}`)
            .then((response) => {
                setCourse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div style={{ marginTop: '20vh' }}>
            {course ? (
                <Container>
                    <Row>
                        <Col xs={12} md={6} className="course-details">
                            {category ? <p>{category.name}</p> : <Spinner />}
                            <h1 className="mb-4">{course.name}</h1>
                            {author ? (
                                <Link to={`/users/${author.id}`}>
                                    <div className="course-author">
                                        <img
                                            src={author.avatar}
                                            alt={`${author.firstName} ${author.lastName}`}
                                            className="course-author-img"
                                        />
                                        <span className="course-author-name" style={{ color: '#c4c6c9' }}>
                                            {author.firstName} {author.lastName}
                                        </span>
                                    </div>
                                </Link>
                            ) : (
                                <Spinner />
                            )}
                            <div className="course-item-rating">
                                <span className="average" style={{ fontSize: '1.8rem' }}>
                                    {(course.reviews.reduce((acc, review) => acc + review.rating, 0) / course.reviews.length).toFixed(2)}
                                </span>
                                <StarRatings
                                    rating={course.reviews.reduce((acc, review) => acc + review.rating, 0) / course.reviews.length}
                                    starRatedColor="#e59819"
                                    starEmptyColor="#6c757d"
                                    starDimension="20px"
                                    starSpacing="2px"
                                    numberOfStars={5}
                                />
                                <span className="count" style={{ fontSize: '1.6rem' }}>
                                    ({course.reviews.length} Ratings)
                                </span>
                            </div>
                            <div className="course-data">
                                <BsFillPeopleFill className="icon" />
                                <span className="text">{course.purchaseRecords.length} Students</span>
                            </div>
                            <div className="course-data">
                                <MdOutlineUpdate className="icon" />
                                <span className="text">Last updated: {convertDateToString(new Date(course.lastUpdated))}</span>
                            </div>
                            <div className="course-data">
                                <MdLanguage className="icon" />
                                <span className="text">Language: {course.language}</span>
                            </div>
                            <div className="course-data">
                                <ImPriceTag className="icon" />
                                <span className="text">{course.price} $</span>
                            </div>
                            {!user ||
                                (user.purchaseRecords.filter((purchaseRecord) => purchaseRecord.courseId === course.id).length === 0 && (
                                    <Link to={`/purchase/${course.id}`}>
                                        <Button text="Buy Course" />
                                    </Link>
                                ))}
                        </Col>
                        <Col xs={12} md={6} className="course-video">
                            <div className="course-video-preview" onClick={() => setModalShow(true)}>
                                <img src={course.image} alt={course.name} className="image" />
                                <BsPlayCircle className="icon" />
                            </div>
                        </Col>
                        <ModalVideo
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            title="Course Preview"
                            name={course.name}
                            video={course.video}
                        />
                    </Row>
                    <h2 className="my-5">Description</h2>
                    <p>{course.description}</p>
                    <h2 className="my-5">Course Content</h2>
                    {sections && <SectionList sections={sections} />}
                    <ReviewItemList reviews={course.reviews} callback={updateCourse} />
                    {user &&
                        user.purchaseRecords.filter((purchaseRecord) => purchaseRecord.courseId === course.id).length > 0 &&
                        course.reviews.filter((review) => review.userId === user.id).length === 0 && (
                            <CreateReview courseId={course.id} callback={updateCourse} />
                        )}
                    {relatedCourses ? (
                        <CourseItemList
                            heading="Related Courses"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis."
                            courses={relatedCourses}
                        />
                    ) : (
                        <Spinner />
                    )}
                </Container>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default CoursePage;
