import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img1 from '../../../images/1.jpg';
import img2 from '../../../images/2.jpg';
import img3 from '../../../images/3.jpg';

const Article = () => {
    return (
        <Box className='article'>
            <Container>
                <Box>
                    <Typography variant='h6' sx={{ color: '#1ec38b', fontWeight: 'bold' }}>NEWS & ARTICLES</Typography>
                    <Typography variant='h4' sx={{ color: '#2b2946', fontWeight: 'bold', my: 2, mb: 4 }}>Stay Update With <br /> Traveltrek</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'relative', textAlign: 'left' }}>
                            <Box style={{ opacity: '.9' }}><img style={{ borderRadius: '8px' }} width='100%' height='200px' src={img1} alt="" /></Box>
                            <Box sx={{ position: 'absolute', bottom: 0, p: 2, color: 'white' }}>
                                <Typography variant='body2'>June 6,2018. John Smith</Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Change your place and get the fresh air.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'relative', textAlign: 'left' }}>
                            <Box style={{ opacity: '.9' }}><img style={{ borderRadius: '8px' }} width='100%' height='220px' src={img2} alt="" /></Box>
                            <Box sx={{ position: 'absolute', bottom: 0, p: 2, color: 'white' }}>
                                <Typography variant='body2'>June 6,2018. John Smith</Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Change your place and get the fresh air.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ position: 'relative', textAlign: 'left' }}>
                            <Box style={{ opacity: '.9' }}><img style={{ borderRadius: '8px' }} width='100%' height='200px' src={img3} alt="" /></Box>
                            <Box sx={{ position: 'absolute', bottom: 0, p: 2, color: 'white' }}>
                                <Typography variant='body2'>June 6,2018. John Smith</Typography>
                                <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>Change your place and get the fresh air.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Article;