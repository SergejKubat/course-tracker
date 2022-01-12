import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

const UserPage = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
};

export default UserPage;
