import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';


const breadcrumbs = [
    { label: 'Главная', to: '/' },
    { label: 'Каталог', to: '/catalog' },
    { label: 'Текущая страница', to: null } // Последний элемент без ссылки
];


export default function() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" component={RouterLink} to="/">
                Главная
            </Link>

            { pathnames.map((name, index)=> {
                const fullPath = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                if(isLast) return (
                    <Typography 
                        key={fullPath} 
                        color="text.primary"
                    >
                        { name }
                    </Typography>
                );
                else return(
                    <Link 
                        key={fullPath} 
                        underline="hover" 
                        color="inherit" 
                        component={RouterLink} 
                        to={fullPath}
                    >
                        { name }
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}