import React from 'react'
import { SvgIcon, Badge, Box } from '@mui/material';



export const CatalogIcon =()=> (
    <SvgIcon
        component="svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
            height: '30%',
            color: 'primary.main',
        }}
    >
        <rect width="5" height="5" rx="2.5" fill="white" />
        <rect x="9" width="5" height="5" rx="2.5" fill="white" />
        <rect x="18" width="5" height="5" rx="2.5" fill="white" />
        <rect y="9" width="5" height="5" rx="2.5" fill="white" />
        <rect x="9" y="9" width="5" height="5" rx="2.5" fill="white" />
        <rect x="18" y="9" width="5" height="5" rx="2.5" fill="white" />
        <rect y="18" width="5" height="5" rx="2.5" fill="white" />
        <rect x="9" y="18" width="5" height="5" rx="2.5" fill="white" />
        <rect x="18" y="18" width="5" height="5" rx="2.5" fill="white" />
    </SvgIcon>
);

export const UserIcon =({ color })=> (
    <SvgIcon
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
            height: 20,
        }}
    >
        <path 
            d="M18.6693 20.75V18.5833C18.6693 17.4341 18.2127 16.3319 17.4001 15.5192C16.5874 14.7065 15.4852 14.25 14.3359 14.25H5.66927C4.52 14.25 3.4178 14.7065 2.60514 15.5192C1.79248 16.3319 1.33594 17.4341 1.33594 18.5833V20.75" 
            stroke={color} 
            strokeWidth="2.3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
        <path 
            d="M10.0052 9.91667C12.3984 9.91667 14.3385 7.97657 14.3385 5.58333C14.3385 3.1901 12.3984 1.25 10.0052 1.25C7.61197 1.25 5.67188 3.1901 5.67188 5.58333C5.67188 7.97657 7.61197 9.91667 10.0052 9.91667Z" 
            stroke={color} 
            strokeWidth="2.3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </SvgIcon>
);

export const ShopIcon =({ color, badgeContent })=> (
    <Badge
        badgeContent={badgeContent}
        color="error"
    >
        <SvgIcon
            width="20"
            height="20"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                height: 20,
            }}
        >
            <path 
                d="M13.1641 7.75C13.1641 8.94492 12.1923 9.91667 10.9974 9.91667C9.80248 9.91667 8.83073 8.94492 8.83073 7.75V4.5H6.66406V7.75C6.66406 10.1393 8.6081 12.0833 10.9974 12.0833C13.3867 12.0833 15.3307 10.1393 15.3307 7.75V4.5H13.1641V7.75Z" 
                fill={color}
            />
            <path 
                d="M0.164062 19.6667C0.164062 20.8583 1.13906 21.8333 2.33073 21.8333H19.6641C20.8557 21.8333 21.8307 20.8583 21.8307 19.6667V0.166656H0.164062V19.6667ZM2.33073 2.33332H19.6641V19.6667H2.33073V2.33332Z" 
                fill={color}
            />
        </SvgIcon>
    </Badge>
);

export const MobailMain =({ color })=> (
    <Box
        sx={{
            mt: 1.3,
            ml: 0.5
        }}
    >
        <SvgIcon
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
                height: 20,
            }}
        >
            <rect width="25" height="2" rx="1" fill={color} />
            <rect y="8" width="15" height="2" rx="1" fill={color}/>
        </SvgIcon>
    </Box>
);