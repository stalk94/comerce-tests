import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { NumberInput } from '../../component/input';
import { ItemProduct } from '../index';



export const Name =({ name }: { name: string })=> {

    return (
        <Typography
            sx={{
                fontFamily: 'Kinetika, sans-serif',
                fontWeight: 800,
                fontSize: '24px',
                lineHeight: '1',
                letterSpacing: '0px',
                textTransform: 'uppercase',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }}
        >
            { name }
        </Typography>
    );
}