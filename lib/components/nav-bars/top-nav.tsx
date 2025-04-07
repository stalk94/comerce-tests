import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Divider, Box, useTheme, alpha, lighten, darken } from "@mui/material";
import { NavLinkItem } from '../menu/list';
import NavMenu from '../menu/nav-menu';
import NavigationItemsDesktop from './fragment';

type NavbarProps = {
    start?: React.ReactNode
    end?: React.ReactNode
    items: NavLinkItem[]
    /** разделитель перед end (не передавать ничего что бы не рендерить его) */
    endDividier?: boolean | React.ReactNode 
}
type LinearNavigationProps = {
    items: NavLinkItem[]
    /** кастомный элемент отображаемый когда ссылки элементы не помешаются в desktop  */
    elemDesktop?: React.ReactNode 
}


/**
 * ! не достаточно модулен
 * Масштабируемая панелька навигации которая если не помешается то складывается
 */
export function LinearNavigation({ items, elemDesktop }: LinearNavigationProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    // обработчик данных для внесения правок и форматирования
    const useTransformator = (items: NavLinkItem[]) => {
        return items.map((item) => {
            if (item.icon && React.isValidElement(item.icon)) {
                item.icon = React.cloneElement(item.icon, { 
                    sx: { 
                        opacity: 0.4 
                    } 
                });
            }

            return item;
        });
    }
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
    }


    return(
        <React.Fragment>
            {/* Кнопки навигации (на больших экранах) */}
            <NavigationItemsDesktop 
                items={useTransformator(items)} 
                element={elemDesktop}
            />

            {/* Бургер-меню для мобилок */}
            <IconButton
                edge="end"
                color="primary"
                aria-label="menu"
                sx={{ 
                    mr: 1, 
                    display: { sm: "none" } 
                }}
                onClick={handleMenuOpen}
            >
                <MenuIcon />
            </IconButton>

            {/* Выпадающее меню mobile */}
            <NavMenu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                navLinks={items}
                isMobile={true}
            />
        </React.Fragment>
    );
}


/** 
 * ! ему обязательно в схеме нужна `comand`
*/
export default function Navbar({ start, end, endDividier, items }: NavbarProps) {
    const theme = useTheme();

    const renderDividier =()=> {
        if(endDividier === true) return(
            <Divider
                flexItem
                orientation="vertical"
                variant='middle'
                sx={{ ml: 2, mt: 2, mb: 2, borderStyle: 'dashed' }}
            />
        );
        else if(endDividier) return endDividier;
    }
    
    return (
        <AppBar elevation={2}
            position="static" 
            sx={{ 
                p: 0, 
                m: 0, 
                //background: (theme)=> lighten(theme.palette.background.paper, 0.1),
                backgroundColor: alpha(theme.palette.background.input, 0.35),
                backdropFilter: "blur(14px)"
            }}
        >
            <Toolbar>
                {/* Лого и прочее */}
                <Box 
                    sx={{
                        //display: { xs: "none", sm: "flex" },
                        display: "flex",
                        justifyContent: "flex-start",
                        flexGrow: 1,
                        alignItems: "center"
                    }}
                >
                    { start }
                </Box>

                {/* Полоса навигации */}
                <LinearNavigation 
                    items={items} 
                />

                {/* user меню к примеру */}
                { end &&
                    <React.Fragment>
                        { renderDividier() }
                        { end }
                    </React.Fragment>
                }
            </Toolbar>
        </AppBar>
    );
}