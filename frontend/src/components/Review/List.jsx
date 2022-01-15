import React from 'react';

import ReviewItem from './Item';

const ReviewItemList = () => {
    return (
        <section className="section">
            <h2>Reviews</h2>
            <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi repellendus, ab asperiores animi excepturi sunt.
            </p>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
        </section>
    );
};

export default ReviewItemList;
