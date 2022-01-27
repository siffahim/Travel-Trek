import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const handleBlur = e => {
        const value = e.target.value;
        setEmail(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("WOW!", "Made Admin successfully", "success");
                }
            })
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Add Email"
                    onBlur={handleBlur}
                    size="small"
                />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;