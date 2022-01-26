import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [load, setLoad] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 8;

    console.log(page)
    useEffect(() => {
        setLoad(true)
        fetch(`http://localhost:5000/services?size=${size}&&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
                setLoad(false)
            })
    }, [page])

    return (
        <Box sx={{ py: 4, px: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant='h6' sx={{ color: '#1ec38b', fontWeight: 'bold' }}>EXPLORE WONDERFUL EXPERIENCE</Typography>
                <Typography variant='h5' sx={{ color: '#2b2946', fontWeight: 'bold', my: 2, mb: 4 }}>Visit Popular Destinations <br /> in the World</Typography>
            </Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                            load={load}
                        />)
                    }
                </Grid>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    {
                        [...Array(pageCount).keys()].map(num => <button
                            key={num}
                            className={num === page ? 'selected' : ''}
                            style={{ border: 'none', padding: '4px 10px', fontWeight: 'bold', borderRadius: '3px', marginRight: '6px' }}
                            onClick={() => setPage(num)}
                        >
                            {num + 1}
                        </button>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Services;