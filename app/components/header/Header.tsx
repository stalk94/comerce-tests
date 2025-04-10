import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Box, Typography, useTheme, useMediaQuery, IconButton, Button } from "@mui/material";
import Navigation, { NavLinkItem, RightToolBarTypes } from './app-bar';
import Logo from "./logo";
import Breadcrumbs from './breadcrumbs';
import { TgTop, MassageTop, MobailTop, CallTop } from './icons';


type Props = {
    linkItems: NavLinkItem[]
}



export default function ({ linkItems }: Props) { 
    const theme = useTheme();
    const router = useRouter();
    const path = usePathname();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const handlerClickRightToolBar =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: RightToolBarTypes)=> {
        console.log('click right tools: ', type);
    }
    const handlerNavigationLinkClick =(item: NavLinkItem)=> {
        console.log(item.path);
        if(item.path) router.push(item.path);
    }
    const transform =()=> {
        const func =(items, parent?: string)=> {
            return items.map((elem, index)=> {
                if(!parent) elem.path = '/' + elem.id;
                else elem.path = parent + '/' + elem.id;

                elem.comand =()=> handlerNavigationLinkClick(elem);

                if(elem.children) {
                    func(elem.children, elem.path);
                }

                return elem;
            });
        }

        const result = func(linkItems ?? linkItemsTest);
        return result;
    }


    return(
        <Box 
            className="Header"
            sx={{
                mb: 2
            }}
        >
            {/* тут еще верх */}
            { !isMobile &&
                <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'row',
                        my: 0.5,
                    }}
                >
                    <Logo isMobail={false} sx={{fontSize: 32,ml:0.5}} />
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection: 'row',
                            marginLeft: 'auto'
                        }}
                    >
                        <IconButton>
                            <CallTop sx={{ fontSize:26 }}/>
                        </IconButton>
                        <IconButton>
                            <TgTop sx={{ fontSize:26 }} />
                        </IconButton>

                        <Button
                            variant="text"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                ml: 6
                            }}
                        >
                            <MobailTop sx={{ fontSize: 28 }} />
                            <Typography variant='caption' sx={{textTransform: 'none'}}>
                                8 (800) 201-13-21
                            </Typography>
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <MassageTop sx={{ fontSize: 28 }} />
                            <Typography variant='caption' sx={{textTransform: 'none'}}>
                                metpromsnab@mail.ru
                            </Typography>
                        </Button>
                        <Button
                            variant="text"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <MobailTop sx={{ fontSize: 28 }} />
                            <Typography variant='caption' sx={{textTransform: 'none'}}>
                                <a href="#feed-back">Заказать звонок </a>
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            }

            {/* верхняя навигация */}
            <Navigation 
                onClickCatalog={()=> router.push('/catalog')}
                items={transform()}
                onClickRightToolBar={handlerClickRightToolBar}
            />
            { (!(isMobile && path.includes('/luki/'))) &&
                <Breadcrumbs />
            }
        </Box>
    );
}