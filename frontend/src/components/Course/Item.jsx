import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const CourseItem = ({ course }) => {
    const [author, setAuthor] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users/${course.userId}`)
            .then((response) => {
                setAuthor(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="course-item">
            {author && (
                <div>
                    <Link to={`/courses/${course.id}`}>
                        <img src={course.image} alt="Course 1" className="course-item-img" />
                    </Link>
                    <h3 className="course-item-name">{course.name}</h3>
                    <p className="course-item-author">
                        {author.firstName} {author.lastName}
                    </p>
                    <div className="course-item-rating">
                        <span className="average">
                            {course.reviews.reduce((acc, review) => acc + review.rating, 0) / course.reviews.length}
                        </span>
                        <StarRatings
                            rating={course.reviews.reduce((acc, review) => acc + review.rating, 0) / course.reviews.length}
                            starRatedColor="#e59819"
                            starEmptyColor="#6c757d"
                            starDimension="16px"
                            starSpacing="2px"
                            numberOfStars={5}
                        />
                        <span className="count">({course.reviews.length})</span>
                    </div>
                    <p className="course-item-price">{course.price} $</p>
                </div>
            )}
        </div>
    );
};

export default CourseItem;
