import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import Collapsible from 'react-collapsible';
import { MdOutlineUpdate, MdLanguage } from 'react-icons/md';
import { BsFillPeopleFill, BsFillCollectionFill, BsPlayCircle } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';

import AuthorImage from 'assets/img/author.jpg';
import CourseItemList from 'components/Course/List';
import ReviewItemList from 'components/Review/List';
import ModalVideo from 'components/Modal/Video';

import Image from 'assets/img/slika.jpg';

const CoursePage = () => {
    const [modalShow, setModalShow] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="course-details">
                        <h1 className="mb-4">Complete Python Bootcamp</h1>
                        <Link to="/users/1">
                            <div className="course-author">
                                <img src={AuthorImage} alt="Author" className="course-author-img" />
                                <span className="course-author-name" style={{ color: '#6a6f73' }}>
                                    Jose Portilla
                                </span>
                            </div>
                        </Link>
                        <div className="course-item-rating">
                            <span className="average" style={{ fontSize: '1.8rem' }}>
                                4.5
                            </span>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="#e59819"
                                starEmptyColor="#6c757d"
                                starDimension="20px"
                                starSpacing="2px"
                                numberOfStars={5}
                            />
                            <span className="count" style={{ fontSize: '1.6rem' }}>
                                (123 Ratings)
                            </span>
                        </div>
                        <div className="course-data">
                            <BsFillPeopleFill className="icon" />
                            <span className="text">154 Students</span>
                        </div>
                        <div className="course-data">
                            <MdOutlineUpdate className="icon" />
                            <span className="text">Last updated: 19 December 2021</span>
                        </div>
                        <div className="course-data">
                            <MdLanguage className="icon" />
                            <span className="text">Language: English</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="course-video">
                        <div className="course-video-preview" onClick={() => setModalShow(true)}>
                            <img src={Image} alt="Course name" className="image" />
                            <BsPlayCircle className="icon" />
                        </div>
                    </Col>
                </Row>
                <h3 className="my-5">Description</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda iure nesciunt deserunt fuga consequatur
                    repudiandae ad temporibus natus distinctio. Est aut non illo voluptatem voluptatibus a accusamus molestias unde
                    blanditiis totam expedita voluptas, ullam aperiam sunt fuga cupiditate quam dolore, quaerat possimus ex. Facilis atque
                    voluptatem corporis! Repellat fuga minus dolor tempore sint harum esse dicta nulla? Quos ipsa, quas officia porro
                    asperiores, reprehenderit nesciunt expedita rem facere soluta repudiandae amet, atque cum culpa ipsum. Minima qui culpa
                    blanditiis quaerat omnis cum. Reprehenderit, ex a! Quas molestiae, consequatur, in voluptatem ad mollitia reprehenderit
                    quisquam provident laborum repellat, at quis nisi enim maiores dolorem ipsa? Vitae doloremque obcaecati repudiandae
                    tempore saepe a porro, fugiat consequatur. Omnis adipisci ullam, ad vero odio officiis nesciunt at vel error accusantium
                    vitae modi cumque non exercitationem molestias hic esse harum! Error, a mollitia labore aliquid minima sapiente libero
                    nisi rem repellendus, quam soluta dolores sint pariatur nemo cum dolorem esse facere deleniti numquam quibusdam
                    voluptate? Consequuntur repellendus delectus, dignissimos veritatis, pariatur sit tempore minus, iusto ipsum ab animi?
                    Hic cupiditate dolorum laboriosam quibusdam veritatis, soluta temporibus reprehenderit necessitatibus consectetur.
                    Consequuntur sint nemo, odit fuga alias sed, eligendi eaque deleniti veniam, doloribus dolor iste quae!
                </p>
                <h3 className="my-5">Course Content</h3>
                <div className="course-data">
                    <BsFillCollectionFill className="icon" />
                    <span className="text">4 Sections</span>
                </div>
                <div className="course-data">
                    <AiFillPlayCircle className="icon" />
                    <span className="text">15 Lections</span>
                </div>
                <div className="mt-5">
                    <Collapsible trigger="Section 1" open={true}>
                        <div className="course-lection">
                            <AiFillPlayCircle className="icon" />
                            <span className="name">Lection 1</span>
                        </div>
                        <div className="course-lection">
                            <FaLock className="icon" />
                            <span className="name">Lection 2</span>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Section 1">
                        <div className="course-lection">
                            <FaLock className="icon" />
                            <span className="name">Lection 3</span>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Section 1">
                        <div className="course-lection">
                            <FaLock className="icon" />
                            <span className="name">Lection 4</span>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Section 1">
                        <div className="course-lection">
                            <FaLock className="icon" />
                            <span className="name">Lection 5</span>
                        </div>
                    </Collapsible>
                </div>
                <ReviewItemList />
                <CourseItemList
                    heading="Related Courses"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, omnis."
                />
                <ModalVideo
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Course Preview"
                    name="Complete Python Bootcamp"
                    video="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                />
            </Container>
        </div>
    );
};

export default CoursePage;
