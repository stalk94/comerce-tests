import React from "react";
import { Box, BoxProps, useTheme, useMediaQuery } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SxProps } from '@mui/system';



type NavTabProps = BoxProps & {
    activeIndex: number 
    onChange: (currentActiveIndex: number )=> void
}

// todo: не достаточно абстрактен
export default function ({ activeIndex, onChange, ...props }: NavTabProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');
    const sxTab: SxProps = {
        fontWeight: 600,
        fontSize: {
            xs: 12,
            sm: 12,
            md: 18, 
            lg: 18, 
            xl: 18
        }
    }
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        onChange && onChange(newValue);
    }
    
    
    return (
        <Box 
            { ...props } 
            sx={{ 
                width: '100%', 
                ...props.sx 
            }}
        >
            <Tabs
                value={activeIndex}
                onChange={handleChange}
                textColor="inherit"
                aria-label="NavigationTab"
                sx={{
                    "& .MuiTabs-indicator": {
                        backgroundColor: theme.palette.error.main,
                        height: '4px'
                    },
                }}
            >
                <Tab sx={sxTab} value={0} label="Описание" />
                <Tab sx={sxTab} value={1} label={isMobile ? "Хар-ки" : 'Характеристики'} />
                <Tab sx={sxTab} value={2} label="Размеры" />
                <Tab sx={sxTab} value={3} label="Доставка" />
            </Tabs>
        </Box>
    );
}