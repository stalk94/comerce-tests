import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import MarqueeObserver from '../../src/component/marquee';



export const Name =({ name, sx }: { name: string })=> {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const useFontSize =()=> {
        if(isSmallScreen) return '16px';
        else if(isMediumScreen) return '16px';
        else return '20px';
    }


    return (
        <MarqueeObserver
            sx={sx}
            wrapper={
                <Typography
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        fontWeight: {
                            xs: 600,
                            md: 800
                        },
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
