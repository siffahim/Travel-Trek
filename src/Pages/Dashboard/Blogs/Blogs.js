import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [num, setNum] = useState(0);
    useEffect(() => {
        fetch(`https://vast-lake-22687.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data.result)
            })
    }, [num])
    return (
        <div>
            <h2>Blogs</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    blogs.map(service => <BlogsCard
                        key={service._id}
                        service={service}
                        setNum={setNum}
                    />)
                }
            </Grid>

        </div>
    );
};

export default Blogs;