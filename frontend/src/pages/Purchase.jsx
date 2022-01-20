import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineUpdate, MdLanguage } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import Notification from 'components/Notification';
import Spinner from 'components/Spinner';

import { convertDateToString } from 'helpers/date';

import { UserContext } from 'context/UserContext';

const Purchase = () => {
    const [course, setCourse] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user.purchaseRecords.filter((purchaseRecord) => purchaseRecord.courseId === id).length > 0) {
            navigate(`/courses/${id}`);
            return;
        }

        axios
            .get(`http://localhost:5000/api/courses/${id}`)
            .then((response) => {
                setCourse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, navigate, user.purchaseRecords]);

    const purchaseCourse = (e) => {
        e.preventDefault();

        setLoading(true);

        axios
            .post(`http://localhost:5000/api/courses/${course.id}/records`, {}, { withCredentials: true })
            .then((response) => {
                axios
                    .get('http://localhost:5000/api/user', { withCredentials: true })
                    .then((response) => {
                        setUser(response.data);
                        window.localStorage.setItem('user', JSON.stringify(response.data));
                        navigate(`/courses/${course.id}`);
                    })
                    .catch((error) => {
                        setError(error.response.data.message);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div style={{ marginTop: '15vh' }}>
            {course ? (
                <Container>
                    <h1 className="mb-5">Purchase Course</h1>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={course.image} alt={course.name} />
                            <h3 className="mt-3">{course.name}</h3>
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
                        </Col>
                        <Col xs={12} md={6}>
                            <h3 className="mb-5">Credit/Debit Card</h3>
                            <form autoComplete="off" onSubmit={purchaseCourse}>
                                <Input name="name" placeholder="Name on Card" required />
                                <Input name="card-number" placeholder="Card Number" required />
                                <Row>
                                    <Col>
                                        <Input name="expiration" placeholder="MM / YY" required />
                                    </Col>
                                    <Col>
                                        <Input name="security-code" placeholder="Security Code" required />
                                    </Col>
                                </Row>
                                <Input name="zip" placeholder="Zip/Postal Code" required />
                                <p>
                                    <span style={{ color: '#cad1d7' }}>Price:</span>{' '}
                                    <span style={{ fontSize: '2.5rem', fontWeight: '500' }}>{course.price} $</span>
                                </p>
                                <Button type="info" text="Complete Payment" />
                            </form>
                            {error && <Notification type="danger" text={error} onClose={() => setError('')} />}
                        </Col>
                    </Row>
                    {loading && <Spinner />}
                </Container>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Purchase;
