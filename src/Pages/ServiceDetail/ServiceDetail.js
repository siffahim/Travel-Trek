import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Calendar from '../Shared/Calander/Calander';
import Navigation from '../Shared/Navigation/Navigation';


const ServiceDetail = () => {
    const [date, setDate] = React.useState(new Date());
    const [openModal, setOpenModal] = React.useState(false);
    const handleBookingOpen = () => setOpenModal(true);
    const handleBookingClose = () => setOpenModal(false);
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        async function singleProduct() {
            const res = await fetch(`https://vast-lake-22687.herokuapp.com/services/${serviceId}`)
            const data = await res.json()
            setService(data)
        }
        singleProduct()
    }, [serviceId])

    return (
        <Box sx={{ mb: 4 }}>
            <Navigation />
            <Container>
                <Grid container sx={{ mt: 2 }} spacing={2} >
                    <Grid item xs={12} md={5}>
                        <Calendar
                            date={date}
                            setDate={setDate}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <img width='80%' style={{ borderRadius: '5px' }} src={service.img} alt="" />
                    </Grid>
                    <Grid items xs={12} md={5}>
                        <Box>
                            <Box sx={{ textAlign: 'center', my: 4 }}>
                                <Typography variant='h4' sx={{ color: '#1ec38b' }}>Available Booking {date.toDateString()}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid items xs={12} md={7}>
                        <Box sx={{ ml: 2 }}>
                            <Typography variant='h5' sx={{ mt: 2 }}>{service.name}</Typography>
                            <Typography variant='h6'>{service.location}</Typography>
                            <Typography sx={{ my: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sapiente vero! Deserunt fugiat, nulla nam sapiente numquam dolor a officia, eaque exercitationem animi laboriosam! Nesciunt vero omnis consequatur pariatur voluptatum.</Typography>
                            <Button variant='contained' onClick={handleBookingOpen} sx={{ bgcolor: '#1ec38b' }} >Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <BookingModal
                openModal={openModal}
                handleBookingClose={handleBookingClose}
                service={service}
                date={date}
            />
        </Box>
    );
};

export default ServiceDetail;