import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const AddBlog = () => {
    const [post, setPost] = useState({});

    const handleBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newPost = { ...post }
        newPost[name] = value;
        setPost(newPost)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const postInfo = {
            ...post
        }

        //send data to server
        fetch('https://vast-lake-22687.herokuapp.com/services', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Blog!",
                        text: "Added Blog",
                        icon: "success",
                        button: "Ok",
                    })
                }
            })
    }


    return (
        <>
            <Container>
                <div className='col-12 col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onBlur={handleBlur} name='name' className='col-12 col-md-6 mb-3 d-block form-control' placeholder='Blog Name' required />


                        <input type="text" onBlur={handleBlur} name='location' className='col-12 col-md-6 mb-3 d-block  form-control' placeholder='Location' required />

                        <input type="text" onBlur={handleBlur} name='price'
                            className='col-12 col-md-6 mb-3 d-block  form-control' placeholder='Price' required />

                        <input type="text" onBlur={handleBlur} name='img' placeholder='img link'
                            className='col-12 col-md-6 d-block form-control' required />

                        <textarea onBlur={handleBlur} name='description' className='border col-12 col-md-6 d-block mx-auto form-control' placeholder='Blog Deccription' id="" cols="100" rows="8"></textarea>


                        <Button type="submit" variant='contained' sx={{ bgcolor: '#1ec38b', color: 'white', mt: 2 }} className='col-12 col-md-6 mb-3 d-block form-control' >Post</Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default AddBlog;