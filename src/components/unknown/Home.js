import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardHeader , Button } from '@mui/material';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Home() {

    const [ userName, setUsername ] = useState('');

    let navigate = useNavigate();

    const handleLogOut = () => {
        sessionStorage.removeItem('Auth Token')
        navigate('/')
    }

    const auth = getAuth();
    onAuthStateChanged( auth, (user) => {
        setUsername(user.email.slice(0, user.email.indexOf('@')))
    } )


    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if(authToken){
            navigate('/home')
        }

        if(!authToken){
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <CardHeader 
                sx={{
                    textAlign: 'left',
                    backgroundColor: '#0098ffbf',
                    fontWeigh: '600',
                    color: '#7d41a6'
                }}
                title={`Welcome, ${userName}!!!`} 
                action={
                    <Button 
                        sx={{
                            color: '#fff',
                            fontWeight: '600',
                            backgroundColor: '#7d41a6',
                            '&:hover': {
                                backgroundColor: 'orange'
                            }
                        }}
                        variant='contained'
                        onClick={handleLogOut}
                    >
                        Log Out
                    </Button>}
            />
        </div>
    )
}