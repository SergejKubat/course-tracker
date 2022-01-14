import React from 'react';

import { Link } from 'react-router-dom';
import { AiFillStar, AiFillPlayCircle } from 'react-icons/ai';
import { MdReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

import Image from 'assets/img/author.jpg';

const AuthorItem = () => {
    return (
        <div className="author-item">
            <Link to="/users/1">
                <img src={Image} alt="Author 1" className="author-item-img" />
            </Link>
            <h3 className="author-item-name">Jose Portilla</h3>
            <p className="author-item-profession">Head of Data Science</p>
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
    );
};

export default AuthorItem;
