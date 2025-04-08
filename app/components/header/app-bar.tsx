import React from "react";
import { AppBar, Toolbar, Box, useTheme, darken, IconButton, useMediaQuery } from "@mui/material";
import Logo from "./logo";
import { Search } from "@mui/icons-material";
import { UserIcon, CatalogIcon, ShopIcon, MobailMain } from './icons';
import NavigationItemsDesktop from "../../../lib/components/nav-bars/fragment";        // реализация секретна


export interface NavLinkItem {
    id: string
    /** сформируется сам исходя из вложенности на основе `id` */
    path?: string
    label?: string
    icon?: React.ReactNode
    /** 🔥 кастомный параметр подсветит элемент как выбранный */
    select?: any
    comand?: (item: any) => void
    divider?: React.ReactNode | boolean
    children?: NavLinkItem[]
}
export type RightToolBarTypes = 'search' | 'user' | 'shop' | 'mobail';
type NavbarProps = {
    items: NavLinkItem[]
    onClickCatalog: ()=> void
    onClickRightToolBar: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: RightToolBarTypes)=> void
}



export default function Navbar({ items, onClickCatalog, onClickRightToolBar }: NavbarProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const handlerClickRightToolBar =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: RightToolBarTypes)=> {
        onClickRightToolBar && onClickRightToolBar(e, type);
    }
    const renderButtonCatalog =()=> {
        return (
            <Box
                sx={{
                    cursor: 'pointer',
                    background: theme.palette.error.main,
                    height: {
                        xs: '52px',
                        sm: '52px',
                        md: '52px',
                        lg: '54px',
                        xl: '54px'
                    },
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 5,
                    mr: 3,
                    borderRadius: '25px',
                }}
                onClick={onClickCatalog}
            >
                <CatalogIcon />
                <Box
                    sx={{
                        ml: 1,
                        fontSize: '14px',
                        fontFamily: 'Kinetika, sans-serif',
                        display: {
                            xs: 'none',
                            md: 'block'
                        }
                    }}
                >
                    КАТАЛОГ
                </Box>
            </Box>
        );
    }


    return (
        <AppBar 
            elevation={0}
            position="static" 
            sx={{ 
                p: 0, 
                m: 0, 
                backgroundColor: darken(theme.palette.background.navBar, 0.02),
                backdropFilter: "blur(14px)",
                borderRadius: '25px',
            }}
        >
            <Toolbar 
                disableGutters 
                sx={{ pr: 2, }}
            >
                {/* Лого или каталог */}
                { !isMobile && renderButtonCatalog() }
                { isMobile && <Logo isMobail={true} /> }

                {/* Полоса навигации только в desctop */}
                <NavigationItemsDesktop
                    items={items} 
                />

                {/* правый tool bar */}
                <Box
                    sx={{
                        ml: 'auto'
                    }}
                >
                    <IconButton
                        onClick={(e)=> handlerClickRightToolBar(e, 'search')}
                    >
                        <Search
                            color="secondary"
                        />
                    </IconButton>
                    { !isMobile &&
                        <IconButton
                            onClick={(e)=> handlerClickRightToolBar(e, 'user')}
                        >
                            <UserIcon
                                color={theme.palette.secondary.main}
                            />
                        </IconButton>
                    }
                    <IconButton
                        onClick={(e)=> handlerClickRightToolBar(e, 'shop')}
                    >
                        <ShopIcon
                            color={theme.palette.secondary.main}
                            badgeContent={1}
                        />
                    </IconButton>
                    { isMobile &&
                        <IconButton
                            onClick={(e)=> handlerClickRightToolBar(e, 'mobail')}
                        >
                            <MobailMain
                                color={theme.palette.secondary.main}
                            />
                        </IconButton>
                    }
                </Box>
                
            </Toolbar>
        </AppBar>
    );
}