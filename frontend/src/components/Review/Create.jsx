import React, { useState } from 'react';

import axios from 'axios';
import StarRatings from 'react-star-ratings';

import Textarea from 'components/Form/Textarea';
import Button from 'components/Form/Button';
import Notification from 'components/Notification';

const CreateReview = ({ courseId, callback }) => {
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    const createRating = () => {
        axios
            .post(
                `http://localhost:5000/api/courses/${courseId}/reviews`,
                {
                    comment: comment,
                    rating: rating
                },
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response.data);
                callback();
            })
            .catch((error) => {
                setError(error.response.data.message);
            });
    };

    return (
        <div className="mt-5">
            <h3 className="mb-4">Add Review</h3>
            <StarRatings
                rating={rating}
                starRatedColor="#e59819"
                starEmptyColor="#6c757d"
                starDimension="18px"
                starSpacing="2px"
                numberOfStars={5}
                changeRating={changeRating}
            />
            <Textarea
                name="comment"
                required={true}
                minLength={10}
                maxLength={200}
                placeholder="Add your comment here"
                defaultValue={comment}
                onValueChange={setComment}
                style={{ marginTop: '2rem' }}
            />
            <Button type="info" text="Add Review" onClick={createRating} style={{ marginBottom: '2rem' }} />
            {error && <Notification type="danger" text={error} onClose={() => setError('')} />}
        </div>
    );
};

export default CreateReview;
