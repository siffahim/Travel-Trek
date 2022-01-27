import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box className='banner'>
            <Container>
                <Box>
                    <Typography variant='h6' sx={{ color: '#1ec38b' }}>Explore the World <i className="fas fa-globe-asia"></i></Typography>
                    <Typography variant='h3' sx={{ color: '#2b2946', fontWeight: 'bold', my: 2 }}>Let's Make Your <br /> best trip Ever!</Typography>
                    <Typography variant='body1' sx={{ color: '#97b6b4', mb: 3 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Ducimus voluptatum modi aperiam animi, vel nisi!</Typography>
                    <Button variant='contained' sx={{ bgcolor: '#1ec38b', padding: '10px' }}>Explore Now</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;