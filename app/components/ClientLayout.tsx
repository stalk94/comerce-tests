'use client'
import Header from '../header/Header';
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
    const router = useRouter();

    const useNavigation =(path: string)=> {
        router.push(path);
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Box 
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
        </ThemeProvider>
    )
}