import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {TextField, InputAdornment, IconButton} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from './Button'

export default function BasicTextFields({title, setEmail, setPassword, handleAction}) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return(
        <Box
            sx={{
                width: '90%',
                maxWidth: '500px',
                margin: '20px auto',
                backgroundColor: '#f9ffff',
                padding: '5em 0',
                boxShadow: '4px 3px 5px -1px #E0E0E0',
            }}
        >
            <div className='heading-container'>
                <h3 
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '800',
                        color: '#7d41a6'
                    }}
                    >
                    {title} Form
                </h3>
            </div>
            <Box 
                component='form'
                sx={{
                    marginBottom: '2em',
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete='off'
            >
                <TextField 
                    id='email' 
                    label='Enter Email' 
                    type='email'
                    variant='outlined'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    id='password' 
                    label='Enter Password' 
                    type={showPassword ? 'text' : 'password'}
                    variant='outlined'
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={handleClickShowPassword}>
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>

            <Button title={title} handleAction={handleAction}/>
        </Box>
    )
}