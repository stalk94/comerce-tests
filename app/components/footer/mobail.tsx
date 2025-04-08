import React from "react";
import { Box, Button, Typography, Grid2, IconButton, Divider } from "@mui/material";
import { LabelPromo, LabelSecondary } from '../Text';
import { TgTop, CallTop } from '../header/icons';
import Link from 'next/link';


export default function() {

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                margin: '0 auto', 
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
            }}
        >
            <Box
                sx={{
                    mx: 'auto',
                    justifyItems: 'center',
                    mt: 4,
                    mb: 4
                }}
            >
                <Typography color="secondary" sx={{mb:1, fontSize:16, fontWeight: 600}}>
                    8 (901) 586-80-11
                </Typography>
                <Typography color="secondary" sx={{mb:1, fontSize:16, fontWeight: 600}}>
                    8 (495) 984-33-93
                </Typography>
                <Typography color="secondary" sx={{mb:1, fontSize:16, fontWeight: 600}}>
                    8 (800) 100-91-18
                </Typography>
                <Typography color="secondary" sx={{fontSize:16, fontWeight: 600}}>
                    metpromsnab@mail.ru
                </Typography>
                <Button
                    color='error'
                    variant='contained'

                    sx={{
                        mt: 2,
                        height: 40,
                        borderRadius: 5
                    }}
                >
                    заказать звонок
                </Button>
            </Box>

            <Divider/>

            <Box
                sx={{
                    display:'flex',
                    flexDirection: 'column',
                    justifyItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mx: 'auto',
                    }}
                >
                    <Typography variant='caption' sx={{my:'auto'}}>
                        Мессенджеры:
                    </Typography>
                    <IconButton>
                        <CallTop sx={{ fontSize: 26 }} />
                    </IconButton>
                    <IconButton>
                        <TgTop sx={{ fontSize: 26 }} />
                    </IconButton>
                </Box>
                <Typography variant='caption' sx={{m:'auto',mb:0.5}}>
                    <Link href={'/'}>
                        Политика конфиденциальности
                    </Link>
                </Typography>
                <Typography variant='caption' sx={{color: '#9F9F9F',m:'auto',mb:1}}>
                    Copyright © Метпромснаб, 2016-2025
                </Typography>
            </Box>
        </Box>
    );
}
