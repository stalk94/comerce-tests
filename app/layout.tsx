import createCache from '@emotion/cache';
import ClientLayout from './App';
import '../public/styles/global.css';
import '../public/styles/dynamic.css';

//const cache = createCache({ key: 'css', prepend: true });

export const metadata = {
    title: 'МетПромСнаб',
    description: "Описание для SEO",
    authors: [{ name: "stalk9424", url: "" }],
    creator: "Telegram: @stalk9424",
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico'
    }
}


/** 
 * ! это серверный компонент
 */
export default function ({ children }: { children: React.ReactNode }) {
    
    return (
        <html lang="en">
            <head>

            </head>
            
            <body>
                <ClientLayout>
                    { children }
                </ClientLayout>
            </body>
        </html>
    )
}