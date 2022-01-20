import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import Button from 'components/Form/Button';

import { timeSince } from 'helpers/time';

const ReviewItem = ({ review, isAuthor, callback }) => {
    const [author, setAuthor] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users/${review.userId}`)
            .then((response) => {
                setAuthor(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteReview = () => {
        axios
            .delete(`http://localhost:5000/api/reviews/${review.id}`, { withCredentials: true })
            .then((response) => {
                callback();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="review-item">
            {author && (
                <Row>
                    <Col xs={12} md={1}>
                        <Link to={`/users/${author.id}`}>
                            <img src={author.avatar} alt={`${author.firstName} ${author.lastName}`} className="review-item-img" />
                        </Link>
                    </Col>
                    <Col xs={12} md={11}>
                        <h3>
                            <Link to={`/users/${author.id}`} style={{ color: '#fff' }}>{`${author.firstName} ${author.lastName}`}</Link>
                        </h3>
                        <div className="review-item-rating">
                            <StarRatings
                                rating={review.rating}
                                starRatedColor="#e59819"
                                starEmptyColor="#6c757d"
                                starDimension="18px"
                                starSpacing="2px"
                                numberOfStars={5}
                            />
                            <span className="date">{timeSince(new Date(review.dateCreated))}</span>
                        </div>
                        <p className="review-item-description">{review.comment}</p>
                        {isAuthor && <Button type="danger" text="Delete" onClick={deleteReview} />}
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ReviewItem;
