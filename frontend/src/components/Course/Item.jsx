import React from 'react';

import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import Image from 'assets/img/slika.jpg';

const CourseItem = () => {
    return (
        <div className="course-item">
            <Link to="/courses/1">
                <img src={Image} alt="Course 1" className="course-item-img" />
            </Link>
            <h3 className="course-item-name">Course 1</h3>
            <p className="course-item-author">Author 1</p>
            <div className="course-item-rating">
                <span className='average'>4.5</span>
                <StarRatings
                    rating={4.5}
                    starRatedColor="#e59819"
                    starEmptyColor="#6c757d"
                    starDimension="16px"
                    starSpacing="2px"
                    numberOfStars={5}
                />
                <span className='count'>(123)</span>
            </div>
            <p className="course-item-price">10.99 $</p>
        </div>
    );
};

export default CourseItem;
