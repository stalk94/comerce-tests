import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Desktop from './desktop';
import Mobail from './mobail';


export default function() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); 


    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: (theme) => theme.palette.background.card,
                mt: 5,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
            }}
        >
            { !isSmallScreen
                ? <Desktop />
                : <Mobail/>
            }
        </Box>
    );
}