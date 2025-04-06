import React from 'react'
import { SvgIcon, Badge, Box, SvgIconProps } from '@mui/material';



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

export const MobailTop =({ ...props }: SvgIconProps)=> (
    <SvgIcon
        width="30" 
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <circle cx="15" cy="15" r="15" fill="#9C2426"/>
        <path d="M15 19.125H15.0075M12.15 22.5H17.85C18.6901 22.5 19.1102 22.5 19.431 22.3365C19.7132 22.1927 19.9427 21.9632 20.0865 21.681C20.25 21.3601 20.25 20.9401 20.25 20.1V9.9C20.25 9.05992 20.25 8.63988 20.0865 8.31901C19.9427 8.03677 19.7132 7.8073 19.431 7.66349C19.1102 7.5 18.6901 7.5 17.85 7.5H12.15C11.3099 7.5 10.8899 7.5 10.569 7.66349C10.2868 7.8073 10.0573 8.03677 9.91349 8.31901C9.75 8.63988 9.75 9.05992 9.75 9.9V20.1C9.75 20.9401 9.75 21.3601 9.91349 21.681C10.0573 21.9632 10.2868 22.1927 10.569 22.3365C10.8899 22.5 11.3099 22.5 12.15 22.5ZM15.375 19.125C15.375 19.3321 15.2071 19.5 15 19.5C14.7929 19.5 14.625 19.3321 14.625 19.125C14.625 18.9179 14.7929 18.75 15 18.75C15.2071 18.75 15.375 18.9179 15.375 19.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
);

export const MassageTop =({ ...props }: SvgIconProps)=> (
    <SvgIcon
        width="30" 
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <circle cx="15" cy="15" r="15" fill="#9C2426"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 9L7 9.66667V20.3333L7.66667 21H22.3333L23 20.3333V9.66667L22.3333 9H7.66667ZM8.33333 11.1738V19.6667H21.6667V11.1736L14.9999 17.2343L8.33333 11.1738ZM20.6088 10.3333H9.39099L14.9999 15.4324L20.6088 10.3333Z" fill="white" stroke="white" stroke-width="0.5"/>
    </SvgIcon>
);

export const CallTop =({ ...props }: SvgIconProps)=> (
    <SvgIcon
        width="30" 
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <circle cx="15" cy="15" r="15" fill="#2CB742"/>
        <path d="M7 23L8.376 18.8723C7.67779 17.6979 7.27586 16.3274 7.27586 14.8621C7.27586 10.52 10.7959 7 15.1379 7C19.48 7 23 10.52 23 14.8621C23 19.2041 19.48 22.7241 15.1379 22.7241C13.8168 22.7241 12.5727 22.3967 11.48 21.8212L7 23Z" fill="white"/>
    </SvgIcon>
);

export const TgTop =({ ...props }: SvgIconProps)=> (
    <SvgIcon
        width="30" 
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <path d="M15 0C6.71566 0 0 6.71566 0 15C0 23.2843 6.71566 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71566 23.2843 0 15 0Z" fill="#40B3E0"/>
        <path d="M22.2987 8.62861L19.6196 22.1365C19.6196 22.1365 19.245 23.0733 18.2145 22.6236L12.032 17.8836L9.78383 16.797L5.99938 15.523C5.99938 15.523 5.4186 15.317 5.36235 14.8673C5.30621 14.4177 6.01813 14.1742 6.01813 14.1742L21.0622 8.27259C21.0622 8.27259 22.2987 7.72931 22.2987 8.62861Z" fill="white"/>
        <path d="M11.5567 21.9848C11.5567 21.9848 11.3763 21.9679 11.1514 21.2559C10.9266 20.544 9.78381 16.797 9.78381 16.797L18.8702 11.0267C18.8702 11.0267 19.3948 10.7082 19.3761 11.0267C19.3761 11.0267 19.4697 11.0828 19.1887 11.3451C18.9077 11.6075 12.0507 17.7712 12.0507 17.7712" fill="#D2E5F1"/>
        <path d="M14.4025 19.701L11.9571 21.9306C11.9571 21.9306 11.7659 22.0757 11.5568 21.9848L12.025 17.8433" fill="#B5CFE4"/>
    </SvgIcon>
);