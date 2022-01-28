import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { loginUser, user, error, googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate)
        reset()
    };

    return (
        <>
            <div className='row m-auto py-5 p-3 w-75'>
                <div className='col-md-6 col-12 mx-auto shadow p-4'>
                    <p className='text-center'>
                        <img style={{ width: '180px' }} src={logo} alt="" />
                    </p>
                    <h4 className='text-center mb-5 text-muted'>Login</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                        {errors.email && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Password' type='password' {...register("password", { required: true })} className="form-control mb-4" />
                        {errors.password && <span className='text-danger'>This field is required</span>}
                        <p>{error}</p>

                        <Button variant='contained' sx={{ bgcolor: '#1ec38b', width: '100%' }} type="submit">Login</Button>
                    </form>
                    <Box sx={{ textAlign: 'center', my: 2 }}>
                        <Typography sx={{ mb: 1 }}>or sign up using</Typography>
                        <Button variant='contained' sx={{ bgcolor: red[500] }} onClick={() => googleLogin(location, navigate)}>Google</Button>
                    </Box>
                    <Typography>Creater new account? <Link to='/register'>Sing Up</Link></Typography>
                </div>
            </div>
        </>
    );
};

export default Login;



/*  
 <Typography variant='body1' sx={{ ml: 8 }}>Forgot password?</Typography>
 */