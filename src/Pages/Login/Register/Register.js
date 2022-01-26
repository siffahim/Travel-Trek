import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { register } = useAuth();
    const location = useLocation();
    const navigate = useNavigate()

    const handleBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[name] = value;
        setLoginData(newLoginData)
    }
    const handleSubmit = e => {
        e.preventDefault();

        //validate password with regex.
        if (loginData.password?.length < 6) {
            toast.warn('Please password must be 6 charectar')
            return
        }
        if (!/(?=.*[!@#$&*])/.test(loginData.password)) {
            toast.warn('Ensure string has one special case letter.')
            return
        }
        if (!/(?=.*[0-9].*[0-9])/.test(loginData.password)) {
            toast.warn(' Ensure string has two digits.')
            return
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(loginData.password)) {
            toast.warn('Ensure string has three lowercase letters.')
            return
        }
        if (loginData.password !== loginData.password2) {
            toast.warn('Please give same password')
            return
        }

        //value send to useFirebase hooks
        register(loginData.name, loginData.email, loginData.password, location, navigate)
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(135deg,#b3fde4, #b3fde4)' }}>
            <Box sx={{ width: 300, bgcolor: 'white', borderRadius: '5px', boxShadow: 4, p: 2, textAlign: 'center' }}>
                <Typography variant='h5'>Sign Up</Typography>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            onBlur={handleBlur}
                            name='name'
                            label="Name"
                            type="text"
                            variant="standard"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onBlur={handleBlur}
                            name='email'
                            label="Email"
                            type="email"
                            variant="standard"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onBlur={handleBlur}
                            name='password'
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onBlur={handleBlur}
                            name='password2'
                            label="Confirm password"
                            type="password"
                            variant="standard"
                        />
                    </Box>
                    <button type='submit'>Sign Up</button>
                </form>
                <Typography>or Sign Up Using</Typography>
                <button>Google</button>
                <Typography>Alrady have an account? <Link to='/login'>Login</Link></Typography>
            </Box>
            <ToastContainer theme='colored' />
        </Box>
    );
};

export default Register;