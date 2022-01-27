import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #1ec38b',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openModal, handleBookingClose, service, date }) => {
    const { name, img } = service;
    const { user } = useAuth();
    const initialInfo = { travelerName: user.displayName, email: user.email, phone: '' }
    const [bookings, setBookings] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookings };
        newInfo[field] = value;
        setBookings(newInfo)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const bookingInfo = {
            ...bookings,
            serviceName: name,
            img,
            date: date.toLocaleDateString()
        }
        //send data server
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal(
                        "Good job!",
                        "Successfully confirm Booking!",
                        "success"
                    );
                }

            })


        // console.log(bookingInfo)
        handleBookingClose()
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography sx={{ mb: 2, textAlign: 'center', color: '#1ec38b' }} variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name="travelerName"
                                label='Name'
                                onBlur={handleOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name='email'
                                label='Email'
                                onBlur={handleOnBlur}
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                name='phone'
                                label="Phone"
                                onBlur={handleOnBlur}
                                defaultValue='Phone Number'
                                size="small"
                            />
                            <TextField
                                disabled
                                label='Date'
                                sx={{ width: '95%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' variant='contained' sx={{ bgcolor: '#1ec38b', m: 1, width: '95%' }} >Confrim</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default BookingModal;