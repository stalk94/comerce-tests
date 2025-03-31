import React from "react";
import { Box } from "@mui/material";
import Navigation, { NavLinkItem, RightToolBarTypes } from '../header/app-bar';
import { useNavigate } from 'react-router-dom';


// !! ОЗНАКОМИТСЯ СО СТРУКТУРОЙ
const linkItemsTest: NavLinkItem[] = [
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



export default function ({ linkItems }: { linkItems: NavLinkItem[] }) { 
    //const navigate = useNavigate();

    const handlerClickRightToolBar =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: RightToolBarTypes)=> {
        console.log('click right tools: ', type);
    }
    const handlerNavigationLinkClick =(item: NavLinkItem)=> {
        console.log(item.path);
        //if(item.path) navigate(item.path);
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
        <Box className="Header"
            sx={{
                mb: 2
            }}
        >
            {/* тут еще верх */}

            {/* верхняя навигация */}
            <Navigation 
                onClickCatalog={()=> console.log('catalog click')}
                items={transform()}
                onClickRightToolBar={handlerClickRightToolBar}
            />
        </Box>
    );
}