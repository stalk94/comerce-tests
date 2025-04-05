'use client'
import React from 'react';
import { Box, SxProps, Typography, TypographyProps } from '@mui/material';


/** подписи на главной странице */
export function LabelHome({ children, ...props }: TypographyProps) {
    return(
        <Typography
            color='primary'
            sx={{
                fontFamily: 'Kinetika, sans-serif',
                textTransform: 'uppercase',
                fontWeight: 800,
                fontSize: 28,
                lineHeight: '1',
                textAlign: 'left',
                my: 'auto',
                ...props.sx
            }}
        >
            { children }
        </Typography>
    );
}
