import React, { useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import Button from '../common/Button'


function ProfileForm () {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ adress, setAdress ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');

    console.log(firstName, lastName, adress, phoneNumber)

    return(
        <>
            <Container maxWidth="sm">
                <Typography variant='h3'>
                    Profile Form
                </Typography>
                <Box 
                    component='form'
                    noValidate
                    autoComplete='no'
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' }
                    }}
                >
                    <TextField 
                        variant='outlined'
                        id='first-name'
                        label='First Name'
                        type='tetx'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField 
                        variant='outlined'
                        id='last-name'
                        label='Last Name'
                        type='tetx'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField 
                        variant='outlined'
                        id='adress'
                        label='Adress'
                        type='tetx'
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                    <TextField 
                        variant='outlined'
                        id='phone-number'
                        label='Phone Number'
                        type='pnone'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Button title={"Save User Info"} />
                </Box>
            </Container>
        </>
    )
}


export default ProfileForm;