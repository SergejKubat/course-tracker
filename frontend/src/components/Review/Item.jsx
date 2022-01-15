import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

import AuthorImage from 'assets/img/author.jpg';

const ReviewItem = () => {
    return (
        <div className="review-item">
            <Row>
                <Col xs={12} md={1}>
                    <Link to="/users/1">
                        <img src={AuthorImage} alt="Author 1" className="review-item-img" />
                    </Link>
                </Col>
                <Col xs={12} md={11}>
                    <h3>Author Name</h3>
                    <div className="review-item-rating">
                        <StarRatings
                            rating={4}
                            starRatedColor="#e59819"
                            starEmptyColor="#6c757d"
                            starDimension="18px"
                            starSpacing="2px"
                            numberOfStars={5}
                        />
                        <span className="date">a week ago</span>
                    </div>
                    <p className="review-item-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam nisi nam obcaecati sapiente maxime blanditiis
                        repellendus facere fuga necessitatibus nihil!
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default ReviewItem;
