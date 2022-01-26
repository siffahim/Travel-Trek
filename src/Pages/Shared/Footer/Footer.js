import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../../../images/logo2.png';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'text.primary', color: '#706f6d', pt: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={logo} alt="" /><br />
                            <Typography variant='body.1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos velit voluptatum eligendi laboriosam beatae accusantium molestiae illo est distinctio possimus?</Typography>
                            <ul style={{ display: 'flex', padding: '0px', marginTop: '30px' }}>
                                <li className='footer-icon'><i className="fas fa-vr-cardboard"></i></li>
                                <li className='footer-icon'><i className="fab fa-twitter"></i></li>
                                <li className='footer-icon'><i className="fab fa-facebook-f"></i></li>
                                <li className='footer-icon'><i className="fab fa-youtube"></i></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Site Menu</Typography>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Home</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Tournaments</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> About Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Reviews</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> About Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Reviews</Typography>
                            </li>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Useful Links</Typography>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Create Account</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Subscription</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Affiliat</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Site Condition</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> About Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Reviews</Typography>
                            </li>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ lineHeight: 2 }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'white' }}>Information</Typography>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> FAQ</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Site Maps</Typography>
                            </li>

                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Privacy Policy</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Contact Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> About Us</Typography>
                            </li>
                            <li>
                                <Typography variant='body.1'><i className="fas fa-caret-right icon"></i> Reviews</Typography>
                            </li>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ px: 3, bgcolor: 'black', py: 2, mt: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='body.1' sx={{ pt: 2 }}>Copyright &copy; 2022 TravelTrek</Typography>
                    <Typography variant='body.1' sx={{ pt: 2 }}>All Rights Reserved.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;