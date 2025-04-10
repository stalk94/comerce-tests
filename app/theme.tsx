import { createTheme, PaletteOptions, ThemeOptions, Theme } from "@mui/material/styles";


declare module '@mui/material/styles' {
    interface Palette {
        placeholder: {
            main: string;
        };
        table: {
            body: string
            header: string
            thead: string
        }
    }

    interface TypeBackground {
        sidenav: string;
        card: string;
        input: string;
        navBar: string;
    }

    interface PaletteOptions {
        placeholder?: {
            main: string;
        };
        table?: {
            body: string
            header: string
            thead: string
        }
    }
    interface Theme {
        elements: typeof elements;
    }
    interface ThemeOptions {
        elements?: typeof elements;
    }
}

// глобальные стили для элементов
const elements = {
    input: {
        fontStyle: "italic",
        variant: 'middle',          //<undefined|"fullWidth"|"inset"|"middle"> 
        alight: undefined           // <'center'|undefined>
    },
    scrollbar: {
        "&::-webkit-scrollbar": {
            width: "3px",
            height: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#7e7e7e",
            borderRadius: '7px',
        },
        "&::-webkit-scrollbar-track": {
            background: "#2e2e2e",
        }
    }
}


export const darkTheme = createTheme({
    elements,
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        text: {
            disabled: 'gray'
        },
        placeholder: {
            main: '#808080'   
        },
        table: {
            body: "#5151513f",
            header: "#5c5c5c62",
            thead: "#353943"
        },
        background: {
            default: '#222222',         //  '#2c303d'
            sidenav: "#1f283e",
            card: "#202940",
            paper: "rgb(63, 63, 63)",       //  rgb(63, 63, 63)
            input: "#393E46",      // цвет фона всех инпутов, селектов #3b3b3ba8
            navBar: "#86898d61",
            
        },
        // это управляет цветами обводок инпутов
        action: {
            active: 'rgba(255, 255, 255, 0.25)'  
        }
    },
});


export const lightTheme = createTheme({
    elements,
    typography: {
        fontFamily: `'Geometria', 'Kinetika', 'Arial', sans-serif`,
    },
    palette: {
        mode: "light",
        input: {
            main: '#F4F5F7',
            border: '#333',
            error: '#f34f4fcc',
            success: 'rgba(120, 227, 114, 0.6)',
            placeholder: '#808080',
        },
        chekbox: {
            main: 'rgba(255, 255, 255, 0.05)',
            border: 'rgba(255, 255, 255, 0.3)',
            success: 'rgba(255, 255, 255, 0.6)',
        },
        switch: {
            trackOn: 'rgba(255, 255, 255, 0.25)',
            trackOff: 'rgba(255, 255, 255, 0.05)',
            thumb: 'rgb(215, 215, 215)',
            border: 'rgba(255, 255, 255, 0.6)',
            icon: 'rgb(215, 215, 215)',
        },
        card: {
            border: '#e8e8e8'
        },
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#242424b5",
        },
        text: {
            disabled: 'gray'
        },
        error: {
            main: '#9C2426'
        },
        placeholder: {
            main: '#808080'   
        },
        table: {
            body: "#5151513f",
            header: "#5c5c5c62",
            thead: "#353943"
        },
        background: {
            default: '#ffffff',         //  '#2c303d'
            sidenav: "#1f283e",
            card: "#F4F5F7",
            paper: "#F4F5F7",       //  rgb(63, 63, 63)
            input: "#393E46",      // цвет фона всех инпутов, селектов #3b3b3ba8
            navBar: "#F4F5F7",
            
        },
        // это управляет цветами обводок инпутов
        action: {
            active: 'rgba(255, 255, 255, 0.25)'  
        }
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
            },
        }
    }
});