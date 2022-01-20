import React, { useContext } from 'react';

import ReviewItem from './Item';

import { UserContext } from 'context/UserContext';

const ReviewItemList = ({ reviews, callback }) => {
    const { user } = useContext(UserContext);

    return (
        <section className="section">
            <h2>Reviews</h2>
            <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi repellendus, ab asperiores animi excepturi sunt.
            </p>
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} isAuthor={review.userId === user.id} callback={callback} />
            ))}
        </section>
    );
};

export default ReviewItemList;
