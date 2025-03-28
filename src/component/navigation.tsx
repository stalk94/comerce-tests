import React from "react";
import { Box, BoxProps, useTheme } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


type NavTabProps = BoxProps & {
    activeIndex: number 
    onChange: (currentActiveIndex: number )=> void
}


export default function ({ activeIndex, onChange, ...props }: NavTabProps) {
    const theme = useTheme();
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        onChange && onChange(newValue);
    }
  
    
    return (
        <Box 
            { ...props } 
            sx={{ width: '100%', ...props.sx }}
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
                <Tab sx={{ fontSize: '16px', fontWeight:600 }} value={0} label="Описание" />
                <Tab sx={{ fontSize: '16px', fontWeight:600 }} value={1} label="Характеристики" />
                <Tab sx={{ fontSize: '16px', fontWeight:600 }} value={2} label="Размеры" />
                <Tab sx={{ fontSize: '16px', fontWeight:600 }} value={3} label="Доставка" />
            </Tabs>
        </Box>
    );
}