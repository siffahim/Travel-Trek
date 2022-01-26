import { List, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Search = () => {
    return (
        <Box sx={{ bgcolor: '#d4f5ea', py: 8 }}>
            <Box className='search-container'>
                <List sx={{ display: 'flex', textAlign: 'center', bgcolor: 'white', borderRadius: '30px 30px 0 0' }}>
                    <ListItemText>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}><i className="fas fa-hotel icon"></i></Typography>
                        <Typography>Hotels</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}><i className="fas fa-car icon"></i></Typography>
                        <Typography>Car Rentals</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}><i className="fas fa-plane icon"></i></Typography>
                        <Typography>Flights</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}><i className="fas fa-suitcase-rolling icon"></i></Typography>
                        <Typography>Trips</Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}><i className="fas fa-ship icon"></i></Typography>
                        <Typography>Cruises</Typography>
                    </ListItemText>
                </List>
                <Box sx={{ bgcolor: '#b3fde4', padding: '50px 40px', borderRadius: '0 0 30px 30px', textAlign: 'center' }}>
                    <Box className='search'>
                        <Box>
                            <label htmlFor="">Destination</label><br />
                            <input type="text" />
                        </Box>
                        <Box>
                            <label htmlFor="">Check In</label><br />
                            <input type="date" />
                        </Box>
                        <Box>
                            <label htmlFor="">Check Out</label><br />
                            <input type="date" />
                        </Box>
                        <Box>
                            <label>Adults</label><br />
                            <select>
                                <option >01</option>
                                <option >02</option>
                                <option >03</option>
                                <option >04</option>
                            </select>
                        </Box>
                        <Box>
                            <label>Children</label><br />
                            <select>
                                <option >01</option>
                                <option >02</option>
                                <option >03</option>
                                <option >04</option>
                            </select>
                        </Box>
                    </Box>
                    <button className='btN' style={{ marginTop: '30px' }}>Search Now</button>
                </Box>
            </Box>
        </Box>
    );
};

export default Search;