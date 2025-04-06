'use client'
import { useEffect, useState } from 'react';
import Editor from '../../editor/index';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '../theme';



// данные панели верхней навинации
const linkItemsTest = [
    {
        id: 'company',          // это должно быть уникально, будет использоватся для построения роутинга
        label: 'Компания',
        children: [
            {
                id: 'info',
                label: 'О нас',
            }
        ]
    },
    {
        id: 'services',
        label: 'Услуги',
        children: [
            {
                id: 'montage',
                label: 'Монтаж',
                children: [
                    {
                        id: 'individual',
                        label: 'Для частных',
                    }
                ]
            }
        ]
    },
    {
        id: 'payInfo',
        label: 'Как Купить',
        children: [

        ]
    },
    {
        id: 'action',
        label: 'Акции',
    },
    {
        id: 'info',
        label: 'Информация',
        children: [

        ]
    },
    {
        id: 'contact',
        label: 'Контакты',
    }
];



// главный экран
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [component, setComponent] = useState();
    const router = useRouter();


    const useNavigation =(path: string)=> {
        router.push(path);
    }
    const useClick =(e: MouseEvent)=> {
        if (e.target.dataset.edit) {
            setComponent(e.target);
        }
    }
    useEffect(() => {
        setMounted(true); // Рендерим Craft.js только на клиенте
    }, []);
    

    if (!mounted) return <div>Загрузка...</div>;
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Editor 
                component={component} 
            />
            <Box 
                onClick={useClick}
                className='BaseLayout'
                sx={{
                    width: '100%',
                    maxWidth: {
                        xs: '1200px',           // todo: донастроить под все размеры
                    },
                    margin: '0 auto',           // центрируем
                }}
            >
                <Header 
                    useNavigation={useNavigation}
                    linkItems={linkItemsTest} 
                />
                { children }
            </Box>
            {/* ноги */}
            <Footer
                    
            />
        </ThemeProvider>
    )
}