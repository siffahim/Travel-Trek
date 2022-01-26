import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { googleLogin, login } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();


    const handleBlur = e => {
        const name = e.target.name;
        const value = e.target.value;

        const newLogin = { ...loginData };
        newLogin[name] = value;
        setLoginData(newLogin)
    }


    const handleSubmit = e => {
        e.preventDefault()

        login(loginData.email, loginData.password, location, navigate)

    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(135deg,#b3fde4, #b3fde4)' }}>
            <Box sx={{ width: 300, bgcolor: 'white', borderRadius: '5px', boxShadow: 4, p: 2, textAlign: 'center' }}>
                <Typography variant='h5'>Login</Typography>
                <form onSubmit={handleSubmit}>
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
                        <Typography variant='body1' sx={{ ml: 8 }}>Forgot password?</Typography>
                    </Box>
                    <button type='submit'>Login</button>
                </form>
                <Typography>or Sign Up Using</Typography>
                <button onClick={() => googleLogin(location, navigate)}>Google</button>
                <Typography>Creater new account? <Link to='/register'>Sing Up</Link></Typography>
            </Box>
        </Box>
    );
};

export default Login;