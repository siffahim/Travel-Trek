
import { Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const Register = () => {
    const { registerUser, user, error, googleLogin } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = data => {
        //validate password with regex.
        if (data.password?.length < 6) {
            toast.warn('Please password must be 6 charectar')
            return
        }
        if (!/(?=.*[!@#$&*])/.test(data.password)) {
            toast.warn('Ensure string has one special case letter.')
            return
        }
        if (!/(?=.*[0-9].*[0-9])/.test(data.password)) {
            toast.warn(' Ensure string has two digits.')
            return
        }
        if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(data.password)) {
            toast.warn('Ensure string has three lowercase letters.')
            return
        }
        if (data.password !== data.password2) {
            toast.warn('Please give same password')
            return
        }

        //value send to useFirebase hooks
        registerUser(data.name, data.email, data.password, location, navigate)
    }
    return (
        <>
            <div className='row mx-auto p-3 mt-5 w-75'>
                <div className='col-md-6 col-12 mx-auto shadow p-4'>
                    <p className='text-center'>
                        <img style={{ width: '180px' }} src={logo} alt="" />
                    </p>
                    <h4 className='text-center mb-4 text-muted'>Register</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' {...register("name", { required: true })} className="form-control mb-2" />
                        {errors.name && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                        {errors.email && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Password' type='password' {...register("password", { required: true })} className="form-control mb-2" />
                        {errors.password && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Confrim password' type='password'  {...register("password2", { required: true })} className="form-control mb-4" />
                        {errors.password2 && <span className='text-danger'>This field is required</span>}

                        <p>{error}</p>

                        <Button variant='contained' sx={{ bgcolor: '#1ec38b', width: '100%' }} type="submit">Login</Button>
                    </form>
                    <Box sx={{ textAlign: 'center', my: 2 }}>
                        <Typography sx={{ mb: 1 }}>or sign up using</Typography>
                        <Button variant='contained' sx={{ bgcolor: red[500] }} onClick={() => googleLogin(location, navigate)}>Google</Button>
                    </Box>

                    <Typography>Alrady have an account? <Link to='/login'>Login</Link></Typography>
                    <ToastContainer theme='colored' />
                </div>
            </div>
        </>
    );
};

export default Register;




