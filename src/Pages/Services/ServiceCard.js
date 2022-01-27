import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ service, load }) => {
    const { img, location, price, _id } = service;
    const navigate = useNavigate();


    // send to detail route
    const handleToggle = id => {
        navigate(`/service/${id}`)
    }

    return (
        <Grid item xs={12} sm={12} md={3}>
            {
                load ? <Box>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Box> : <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                <i className="fas fa-map-marker-alt"></i>
                            </Avatar>
                        }
                        title={location}
                        subheader="September 14, 2022"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '14px' }}>
                                10 Activity
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                <i className="fas fa-map-marked-alt icon"></i> 12 places
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                                <i className="fas fa-calendar-alt icon"></i> 1 Weak
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" color="text.secondary">${price}</Typography>
                            <Button variant='contained' onClick={() => handleToggle(_id)} sx={{ bgcolor: '#1ec38b' }} >View Detail</Button>
                        </Box>
                    </CardContent>
                </Card>
            }
        </Grid>
    );
};

export default ServiceCard;