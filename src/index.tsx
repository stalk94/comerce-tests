import React from "react";
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { lightTheme } from './theme';
import Catalog from './catalog/index';
import ProductDetails from './catalog/details';
import Header from './shared/header';
import './styles/index.css';


function Home() {
    const navigate = useNavigate();


    return <div>Загружается каталог...</div>;
}


function Modules() {
    const navigate = useNavigate();

    // * заглушка с редиректом на товар
    React.useEffect(() => {
        navigate('/');

        setTimeout(()=> {navigate('/catalog/item/0');}, 200);
        
    }, []);
    
 
    return (
        <Container sx={{ height: '100%' }}>
            <Header />

            <Routes>
                <Route
                    path='/'
                    element={
                        <Home />
                    }
                />
                <Route
                    path='/catalog'
                    element={
                        <Catalog />
                    }
                />
                <Route 
                    path="/catalog/item/:id" 
                    element={<ProductDetails />} 
                />
                <Route path="*" element={<>not found</>} />
            </Routes>

        </Container>
    );
}


const App =()=> {
    const themeLight = createTheme(lightTheme);
 
    return(
        <ThemeProvider theme={themeLight}>
            <BrowserRouter>
                <Modules />
            </BrowserRouter>
        </ThemeProvider>
    );
}



createRoot(document.querySelector(".root")).render(<App/>);