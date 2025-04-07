import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';


type CategoryCardProps = {
    image: string
    title: string
}


export const Mobail = ({ image, title }: CategoryCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 5,
                px: 2,
                py: 1.5,
                width: '100%',
                backgroundColor: 'white',
                border: (theme)=> `1px solid ${theme.palette.card.border}`
            }}
        >
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mr: 2,
                }}
            />
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ textTransform: 'uppercase', fontSize: '1rem' }}
            >
                { title }
            </Typography>
        </Card>
    );
}

export const Desktop = ({ image, title }: CategoryCardProps) => {
    return (
        <Card 
            elevation={0}
            sx={{
                width: 260,
                height: 200,
                borderRadius: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 2,
                backgroundColor: 'white',
                border: (theme)=> `1px solid ${theme.palette.card.border}`
            }}
        >
            <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                }}
            />
            <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ textTransform: 'uppercase' }}
            >
                { title }
            </Typography>
        </Card>
    );
}