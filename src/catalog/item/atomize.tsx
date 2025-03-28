import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import MarqueeObserver from '../../component/marquee';




export const Name =({ name, sx }: { name: string })=> {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const useFontSize =()=> {
        if(isSmallScreen) return '14px';
        else if(isMediumScreen) return '18px';
        else return '24px';
    }


    return (
        <MarqueeObserver
            sx={sx}
            wrapper={
                <Typography
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        fontWeight: 800,
                        fontSize: useFontSize(),
                        lineHeight: '1',
                        letterSpacing: '0px',
                        textTransform: 'uppercase',
                    }}
                />
            }
        >
            { name }
        </MarqueeObserver>
    );
}
