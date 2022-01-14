import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

import CourseItem from 'components/Course/Item';

import Image from 'assets/img/author.jpg';

const UserPage = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div style={{ marginTop: '20vh' }}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>Jose Portilla</h1>
                        <p className="my-3">Head of Data Science</p>
                        <div className="mt-5">
                            <div className="author-item-data">
                                <AiFillStar className="icon" />
                                <span className="text">4.7 Author Rating</span>
                            </div>
                            <div className="author-item-data">
                                <MdReviews className="icon" />
                                <span className="text">123 Reviews</span>
                            </div>
                            <div className="author-item-data">
                                <BsFillPeopleFill className="icon" />
                                <span className="text">199 Students</span>
                            </div>
                            <div className="author-item-data">
                                <AiFillPlayCircle className="icon" />
                                <span className="text">2 Courses</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src={Image} alt="Author 1" className="author-item-img" style={{ height: '20rem' }} />
                    </Col>
                </Row>
                <h3 className="mt-5">About Me</h3>
                <p className="mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet ab quaerat repellat minima assumenda minus alias
                    blanditiis! Voluptatum numquam nulla, dignissimos animi, officia est possimus nisi ipsam minima unde quo ab provident.
                    Officiis quae omnis numquam aspernatur molestias fuga consequatur, magnam animi velit voluptatibus modi quos a debitis
                    totam veniam dolorum quod eaque sequi libero dolor. A quas temporibus, repellat dolorem vitae, maiores maxime vero
                    optio, excepturi commodi perferendis. Ea ratione accusantium, doloremque tempora aperiam quas aliquid non facere
                    commodi. Perspiciatis accusantium soluta, repellat amet libero perferendis qui eveniet hic rerum nam laudantium, quod
                    eligendi nulla eaque eius accusamus. Laboriosam, officiis recusandae non ea voluptas enim optio reiciendis repellat sunt
                    fuga pariatur est minus mollitia minima dolore, sit eos, natus odit obcaecati. Quisquam, laudantium distinctio voluptas
                    ducimus animi porro eveniet omnis iure libero minus corporis explicabo earum molestias assumenda reprehenderit quia sint
                    deserunt! Quasi accusamus ab assumenda quas, qui officiis maiores quidem praesentium, voluptates earum quod sapiente
                    autem. Dolor nesciunt, labore voluptatibus amet ad harum! Nostrum velit mollitia eligendi fuga vero possimus cumque
                    repellat, quo tempore obcaecati, dolorum, magni dolorem! Perspiciatis in explicabo nobis veritatis ex numquam enim
                    voluptatem quam quidem aspernatur voluptatibus fugiat, pariatur deleniti architecto doloremque, nemo eos esse cum.
                    Veniam repellat debitis, ipsam a totam consectetur voluptatibus dignissimos ad iure quis consequuntur repudiandae
                    nesciunt nobis vero commodi odio, exercitationem reprehenderit ex impedit provident delectus mollitia tenetur
                    praesentium ipsa? Nam distinctio itaque fugiat dignissimos cum odit sint tenetur quisquam rem dolorum alias adipisci
                    temporibus, nostrum maxime laboriosam.
                </p>
                <h3 className="mt-5">Courses (5)</h3>
                <Row>
                    <Col xs={12} md={3}>
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <CourseItem />
                    </Col>
                    <Col xs={12} md={3}>
                        <CourseItem />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserPage;
