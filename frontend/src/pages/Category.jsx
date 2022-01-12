import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div>
            <h1>Category Page</h1>
        </div>
    );
};

export default CategoryPage;
