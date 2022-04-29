import React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({title, handleAction}) {
    return (
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
            onClick={handleAction} 
        >
                {title}
            </Button>
    )
}