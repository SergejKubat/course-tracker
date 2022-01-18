import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

const AuthorItem = ({ author }) => {
    const [courses, setCourses] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/courses?userId=${author.id}`)
            .then((response) => {
                setCourses(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const calcAverageRating = (courses) => {
        const numberOfReviews = courses.reduce((acc, course) => acc + course.reviews.length, 0);
        let sumOfReviews = 0;
        for (let i = 0; i < courses.length; i++) {
            sumOfReviews += courses[0].reviews.reduce((acc, review) => acc + review.rating, 0);
        }

        return sumOfReviews / numberOfReviews;
    };

    return (
        <div className="author-item">
            <Link to="/users/1">
                <img src={author.avatar} alt={`${author.firstName} ${author.lastName}`} className="author-item-img" />
            </Link>
            <h3 className="author-item-name">
                {author.firstName} {author.lastName}
            </h3>
            <p className="author-item-profession">{author.profession}</p>
            {courses && (
                <div>
                    <div className="author-item-data">
                        <AiFillStar className="icon" />
                        <span className="text">{calcAverageRating(courses)} Author Rating</span>
                    </div>
                    <div className="author-item-data">
                        <MdReviews className="icon" />
                        <span className="text">{courses.reduce((acc, course) => acc + course.reviews.length, 0)} Reviews</span>
                    </div>
                    <div className="author-item-data">
                        <BsFillPeopleFill className="icon" />
                        <span className="text">{courses.reduce((acc, course) => acc + course.purchaseRecords.length, 0)} Students</span>
                    </div>
                    <div className="author-item-data">
                        <AiFillPlayCircle className="icon" />
                        <span className="text">{courses.length} Courses</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthorItem;
