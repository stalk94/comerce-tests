import ClientLayout from './components/ClientLayout'


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
            <body>
                <ClientLayout>
                    { children }
                </ClientLayout>
            </body>
        </html>
    )
}