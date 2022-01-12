import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const CoursePage = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div>
            <h1>Course Page</h1>
        </div>
    );
};

export default CoursePage;
