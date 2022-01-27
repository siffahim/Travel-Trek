import { Box, Button } from '@mui/material';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect className='px-4' expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                <img width='150px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ms-auto text-center d-flex align-items-center">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {
                        user.email && <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: '#1ec38b', fontWeight: 'bold' }}>{user.displayName}</span>
                            {
                                user.photoURL ? <img style={{ width: '40px', height: '40px', borderRadius: '50%', margin: '0 10px' }} src={user.photoURL} alt="" /> : <span style={{ fontSize: '20px', margin: '0 10px' }}><i className="fas fa-user icon"></i></span>
                            }

                        </Box>
                    }
                    {
                        user.email ? <Button sx={{ bgcolor: '#1ec38b', color: 'white' }} onClick={logOut}>Logout</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;