import { Box, Button, Container, Grid, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/about3.jpg';

const About = () => {
    return (
        <Box className='about'>
            <Container>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Box>
                                <img style={{ borderRadius: '5px' }} width='100%' height='580px' src={img} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant='h6' sx={{ color: '#1ec38b', fontWeight: 'bold' }}>ABOUT TREVELTREK</Typography>
                            <Typography variant='h3' sx={{ color: '#2b2946', fontWeight: 'bold', my: 1 }}>World Best Travel Agency Company <br /> Since 2020</Typography>
                            <Typography variant='body1' sx={{ color: '#97b6b4', mb: 1 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Ducimus voluptatum modi aperiam animi, vel nisi!</Typography>
                            <List sx={{ mb: 1 }}>
                                <ListItemText><i className="fas fa-check-circle icon"></i> Forem commodo dolor sit amet consectetu adipis.</ListItemText>
                                <ListItemText><i className="fas fa-check-circle icon"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItemText>
                                <ListItemText><i className="fas fa-check-circle icon"></i> Dolor sit amet consectetur,adipisicing elit.</ListItemText>
                            </List>
                            <Grid container sx={{ mb: 2 }}>
                                <Grid item xs={4}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#1ec38b' }}>45k+</Typography>
                                        <Typography variant='body1'>Year<br /> Experience</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#1ec38b' }}>355k+</Typography>
                                        <Typography variant='body1'>Destination<br /> Collaboration</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box>
                                        <Typography variant='h5' sx={{ fontWeight: 'bold', color: '#1ec38b' }}>45k+</Typography>
                                        <Typography variant='body1'>Happy<br /> Customers</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Button variant='contained' sx={{ bgcolor: '#1ec38b', padding: '10px' }}>Find Tours</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;