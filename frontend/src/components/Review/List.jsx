import React from 'react';

import ReviewItem from './Item';

const ReviewItemList = ({ reviews }) => {
    return (
        <section className="section">
            <h2>Reviews</h2>
            <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi repellendus, ab asperiores animi excepturi sunt.
            </p>
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </section>
    );
};

export default ReviewItemList;
