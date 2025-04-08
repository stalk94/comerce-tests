import React, { useState } from "react";
import Button from "@mui/material/Button";
import { KeyboardArrowDown } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Box, } from "@mui/material";
import { NavLinkItem } from '../menu/list';
import NavMenu from '../menu/nav-menu';

type OverflowNavigationItemsProps = { 
    hiddenItems: NavLinkItem[] 
    element?: React.ReactNode 
}
type NavigationItemsDesktopProps = { 
    items: NavLinkItem[] 
    element?: React.ReactNode 
}


// Компонент для отображения элемента с вложенным меню в десктопном режиме
export const DesktopNestedMenuItem =({ item }: { item: NavLinkItem })=> {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }


    return (
        <React.Fragment>
            <Button
                color="primary"
                startIcon={item.icon || null}
                endIcon={<KeyboardArrowDown />}
                onClick={handleClick}
                sx={{
                    fontWeight: 400,
                    fontFamily: 'Kinetika, sans-serif',
                    fontSize: 16
                }}
            >
                { item.label }
            </Button>
            <NavMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                navLinks={item.children}
                isMobile={false}
            />
        </React.Fragment>
    );
}
// ANCHOR - modernizire. то что не помешается в десктопном виде
const OverflowNavigationItems =({ hiddenItems, element }: OverflowNavigationItemsProps)=> {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
    }
    const renderDefaultElement = () => {
        return(
            <IconButton
                edge="end"
                color="secondary"
                aria-label="menu-overflow"
                sx={{ mr: 0 }}
            >
                <MenuIcon />
            </IconButton>
        );
    }

    return(
        <React.Fragment>
            <Box 
                sx={{
                    //ml: 1,
                    mr: 2
                }}
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                    setMenuOpen(true);
                }}
            >
                { element ?? renderDefaultElement() }
            </Box>
            
            <NavMenu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                navLinks={hiddenItems}
                isMobile={false}
            />
        </React.Fragment>
    );
}



export default function NavigationItemsDesktop({ items, element }: NavigationItemsDesktopProps) {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [visibleItems, setVisibleItems] = useState<NavLinkItem[]>(items);
    const [hiddenItems, setHiddenItems] = useState<NavLinkItem[]>([]);
  
    //? надо придумать отслежку размера либо типо того
    React.useEffect(()=> {
        const updateVisibleItems =()=> {
            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            let totalWidth = 0;
            const newVisibleItems: NavLinkItem[] = [];
            const newHiddenItems: NavLinkItem[] = [];

            for (const item of items) {
                const itemWidth = 130;
                totalWidth += itemWidth;

                if (totalWidth < containerWidth - 60) {
                    newVisibleItems.push(item);
                } 
                else {
                    newHiddenItems.push(item);
                }
            }

            setVisibleItems(newVisibleItems);
            setHiddenItems(newHiddenItems);
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);

        return ()=> window.removeEventListener("resize", updateVisibleItems);
    }, [items]);


    return(
        <Box 
            ref={containerRef}
            sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "flex-start",           //? это надо выносить
                flexGrow: 1,
            }}
        >
            { visibleItems.map((item, index) => (
                <React.Fragment key={index}>
                    {/* элемент с вложенным списком, с label/icon, только с icon*/}
                    { item.children 
                        ? (
                            <DesktopNestedMenuItem 
                                item={item} 
                            />
                        ) 
                        : item.label ? (
                            <Button
                                color="primary"
                                startIcon={item.icon || null}
                                onClick={() => item.comand?.(item)}
                                sx={{
                                    fontWeight: 200,
                                    fontFamily: 'Kinetika, sans-serif',
                                    fontSize: 16
                                }}
                            >
                                { item.label }
                            </Button>
                        ) 
                        : item.icon ? (
                            <IconButton
                                color="primary" 
                                onClick={() => item.comand?.(item)}
                                sx={{
                                    fontWeight: 400, 
                                    fontFamily: 'Kinetika, sans-serif',
                                    fontSize: 16
                                }}
                            >
                                { item.icon }
                            </IconButton>
                        ) 
                        : null
                    }
                </React.Fragment>
            ))}

            {/* то что не помещается выносим в выделенную вкладку */}
            { hiddenItems.length > 0 &&
                <OverflowNavigationItems 
                    hiddenItems={hiddenItems}
                    element={element}
                />
            }
        </Box>
    );
}