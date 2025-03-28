import React from "react";
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider, Button, CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import Catalog from './catalog/index';
import './styles/index.css';



export default function Module({ data }: { data: any }) {
    const [state, setState] = React.useState();
    const themeLight = createTheme(lightTheme);


    React.useEffect(() => {
        
    }, []);


    
    return (
        <ThemeProvider theme={themeLight}>
            <Catalog />
        </ThemeProvider>
    );
}



createRoot(document.querySelector(".root")).render(<Module/>);