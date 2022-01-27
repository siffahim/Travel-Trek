import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { blogId } = useParams();
    return (
        <div>
            <h2>Update Blog: {blogId}</h2>
        </div>
    );
};

export default Update;