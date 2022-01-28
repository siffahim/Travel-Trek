import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const BlogsCard = ({ service, setNum }) => {
    const { _id, name, img, location, price, status } = service;
    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/dashboard/blogs/${id}`)
    }

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(isOkey => {
            if (isOkey) {
                fetch(`https://vast-lake-22687.herokuapp.com/services/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swal("🤭", "Deleted Successfully", "success");
                            setNum(prev => prev + 1)
                        }
                    })
            }
        })
    }

    const handlePandding = id => {
        fetch(`https://vast-lake-22687.herokuapp.com/services`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("WOW!", "Approved successfully", "success");
                }
                setNum(prev => prev + 1)
            })
    }

    return (
        <Grid item xs={12} sm={12} md={4}>
            {
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <i className="fas fa-map-marker-alt"></i>
                            </Avatar>
                        }
                        title={name.slice(0, 25)}
                        subheader={location}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            {
                                status ? <Typography sx={{ fontSize: '14px' }}>
                                    <i className="fas fa-check-circle icon"></i> Approved
                                </Typography> : <Typography sx={{ fontSize: '14px' }}>
                                    <i className="fas fa-spinner icon"></i> Pannding...
                                </Typography>
                            }

                            <Typography sx={{ fontSize: '14px' }}>
                                <i className="fas fa-map-marked-alt icon"></i> 12 places
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            {/* <Button variant='contained' onClick={() => handleUpdate(_id)} sx={{ bgcolor: green[500] }} >Update</Button> */}
                            <Typography variant="h6" color="text.secondary">${price}</Typography>
                            <Button variant='contained' onClick={() => handleDelete(_id)} sx={{ bgcolor: red[500] }} >Delete</Button>
                            <Button onClick={() => handlePandding(_id)} disabled={status} variant='contained' sx={{ bgcolor: '#1ec38b' }} >Approved</Button>
                        </Box>
                    </CardContent>
                </Card>
            }
        </Grid>
    );
};

export default BlogsCard;