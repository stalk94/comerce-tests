'use client'
import React from 'react';
import { Box, SxProps, Typography, TypographyProps } from '@mui/material';


/** подписи на главной странице */
export function LabelHome({ children, ...props }: TypographyProps) {
    return(
        <Typography
            { ...props }
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

export function LabelPromo({ children, ...props }: TypographyProps) {
    
    return(
        <Typography
            data-edit='text'        //!
            data-media='true'       //!
            id='primary-promo'
            color="primary"
            sx={{
                fontFamily: 'Kinetika, sans-serif',
                fontWeight: 800,
                textAlign: "left",
                textTransform: 'uppercase',
                fontSize: {
                    xs: "1.5rem", // Для мобильных устройств
                    sm: "2rem",   // Для маленьких экранов
                    md: "2.5rem", // Для средних и больших экранов
                },
                ...props.sx
            }}
            variant='h4'
        >
            { children }
        </Typography>
    );
}

export function LabelSecondary({ children, ...props }: TypographyProps) {
    return(
        <Typography
            { ...props }
            data-edit='text'        //!
            data-media='true'       //!
            id='secondary-promo'
            color="secondary"
            sx={{
                textAlign: "left",
                mt: 1,
                ...props.sx
            }}
        >
            { children }
        </Typography>
    );
}

/** заголовок body1 */
export function LabelPrimary({ children, ...props }: TypographyProps) {
    return(
        <Typography
            { ...props }
            data-edit='text'        //!
            id='primary-linkList'
            color="primary"
            sx={{
                fontFamily: 'Kinetika, sans-serif',
                fontWeight: 800,
                textAlign: "left",
                textTransform: 'uppercase',
                mb: 2,
                ...props.sx
            }}
            variant='body1'
        >
            { children }
        </Typography>
    )
}