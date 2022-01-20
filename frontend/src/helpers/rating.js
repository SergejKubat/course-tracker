export const calcAverageRating = (courses) => {
    const numberOfReviews = courses.reduce((acc, course) => acc + course.reviews.length, 0);
    let sumOfReviews = 0;
    for (let i = 0; i < courses.length; i++) {
        sumOfReviews += courses[i].reviews.reduce((acc, review) => acc + review.rating, 0);
    }

    return (sumOfReviews / numberOfReviews).toFixed(2);
};
