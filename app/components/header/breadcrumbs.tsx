'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Breadcrumbs, Typography, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const breadcrumbNameMap: Record<string, string> = {
    dashboard: 'Панель',
    settings: 'Настройки',
    catalog: 'Каталог',
    account: 'Кабинет',
}


export default function BreadcrumbsNav() {
    const pathname = usePathname();
    const router = useRouter();
    const segments = pathname.split('/').filter(Boolean);
    const isMobile = useMediaQuery('(max-width:600px)');
  
    const currentSegment = segments.at(-1);
    const previousHref = '/' + segments.slice(0, segments.length - 1).join('/') || '/';
    const currentLabel = breadcrumbNameMap[currentSegment ?? ''] || decodeURIComponent(currentSegment ?? '');
  

    if(isMobile) {
        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                    cursor: 'pointer',
                }}
                onClick={() => router.push(previousHref)}
            >
                <ArrowBackIcon fontSize="small" />
                <Typography variant="body2">
                    { currentLabel }
                </Typography>
            </div>
        );
    }
  
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
            <Link href="/">Главная</Link>
            {segments.map((segment, index) => {
                const href = '/' + segments.slice(0, index + 1).join('/');
                const isLast = index === segments.length - 1;
                const label = breadcrumbNameMap[segment] || decodeURIComponent(segment);
        
                return isLast ? (
                    <Typography key={href} color="text.primary">
                        {label}
                    </Typography>
                ) : (
                    <Link key={href} href={href}>
                        {label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
  }