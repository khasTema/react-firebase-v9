import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Home() {
    let navigate = useNavigate();

    const handleLogOut = () => {
        sessionStorage.removeItem('Auth Token')
        navigate('/')
    }

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
            <h3>
                Home Page
            </h3>
            <Button 
                variant='contained' 
                onClick={handleLogOut}
            >
                Log Out
            </ Button>
        </div>
    )
}