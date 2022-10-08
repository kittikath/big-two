import React from 'react';
import { Button } from '@mui/material';
import { forwardRef } from 'react';

interface ButtonProps {
    text: string;
}

export const CustomButton = forwardRef<HTMLInputElement, ButtonProps >((props) => {
    const {text} = props;
    return <Button sx={{ width: 1, marginY: 1, color: 'white', paddingY: 1, }} variant="outlined"><code>{text}</code></Button>
})

