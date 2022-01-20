import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import { timeSince } from 'helpers/time';

const ReviewItem = ({ review }) => {
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
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default ReviewItem;
