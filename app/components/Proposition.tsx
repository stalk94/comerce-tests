import React from 'react';
import { Box, IconButton, SvgIcon, SxProps, Typography } from '@mui/material';
import { ItemProduct } from '../global.d.ts';
import { Price } from '../item/descripton-price';
import { LabelHome, LabelSecondary } from './Text';



type Props = {
    items: ItemProduct[]
    countRow?: number
    sx?: SxProps
}


// блок с названием, ценой (! донастроить)
const DescriptionBoxCard =({ item })=> {
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                flexGrow: 15,
                color: 'black',
                borderRadius: 5,
                background: (theme)=> theme.palette.background.navBar,
                px: 2,
            }}
        >
            <LabelSecondary
                sx={{
                    my: 1,
                }}
            >
                { item.name }
            </LabelSecondary>
            <Price 
                sx={{
                    mb: 1
                }}
                item={item}
            />
        </Box>
    );
}
// todo:  доработать
const Card = ({ item, id }) => {
    item.id = id;

    return (
        <Box
            sx={{
                flex: 1,                
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',         //! переделать на цвет темы
                border: '1px solid #e8e8e8',        //! переделать на цвет темы
                borderRadius: 8,
                overflow: 'hidden',
            }}
        >
            <Box
                component="img"
                src={item.images[0]}
                alt="Описание"
                sx={{
                    width: '100%',
                    height: '20vw',         //? 20% ширины экрана (надо динамический расчет)
                    objectFit: 'contain',
                    display: 'block',
                    mx: 'auto',
                }}
            />
            <DescriptionBoxCard item={item} />
        </Box>
    );
}
// кнопки навигации по страницам
const ArrowNavigation =({ onClick, currentPage, lastPage })=> {
    const style: SxProps = {
        color: 'black',
    }
    

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                ml: 'auto'
            }}
        >
            <IconButton 
                disabled={!currentPage}
                sx={{...style, opacity: !currentPage ? 0.5 : 1}}
                onClick={()=> onClick('left')}
            >
                <SvgIcon
                    width="50" 
                    height="50" 
                    viewBox="0 0 50 50" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{ fontSize: 42 }}
                >
                    <rect 
                        x="-0.5" 
                        y="0.5" 
                        width="49" 
                        height="49" 
                        rx="24.5" 
                        transform="matrix(-1 0 0 1 49 0)" 
                        fill="white" 
                        stroke="#EBEBEB"
                    />
                    <path 
                        d="M23.2182 25L30 31.8585L26.8937 35L20.1119 28.1415L20.1063 28.1471L17 25.0056L17.0056 25L17 24.9944L20.1063 21.8529L20.1119 21.8585L26.8937 15L30 18.1415L23.2182 25Z" 
                        fill="#343434"
                    />
                </SvgIcon>
            </IconButton>
            <IconButton 
                disabled={(currentPage === lastPage)}
                sx={{...style, opacity: (currentPage === lastPage) ? 0.5 : 1}}
            >
                <SvgIcon
                    width="50" 
                    height="50" 
                    viewBox="0 0 50 50"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    sx={{ fontSize: 42 }}
                    onClick={()=> onClick('right')}
                >
                    <rect 
                        x="0.5"
                        y="0.5" 
                        width="49" 
                        height="49" 
                        rx="24.5" 
                        fill="white" 
                        stroke="#EBEBEB" 
                    />
                    <path 
                        d="M26.7818 25L20 31.8585L23.1063 35L29.8881 28.1415L29.8937 28.1471L33 25.0056L32.9944 25L33 24.9944L29.8937 21.8529L29.8881 21.8585L23.1063 15L20 18.1415L26.7818 25Z" 
                        fill="#343434" 
                    />
                </SvgIcon>
            </IconButton>
        </Box>
    );
}


/** Карусель выгодных предложений */
export default function({ items, countRow, sx }: Props) {
    const [renderChunks, setRenderChunks] = React.useState<ItemProduct[][]>([]);
    const [current, setCurrent] = React.useState(0);
  

    const useChank = (array: ItemProduct[], size: number) => {
        const result = [];

        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        
        return result;
    }
    const handlerClickArow =(type: 'left' | 'right')=> {
        if(type === 'right') setCurrent(current + 1);
        else if(current > 0) setCurrent(current - 1);
    }
    // заливка тестовыми данными
    const fiction =()=> {
        const testData = {
            id: 1,
            name: 'Чердачная лестница Econ ЧЛ-11 H=280 см, 60 x 87.5 см',
            description: '',
            images: [
                'https://kordodesign.com/wp-content/uploads/2022/05/MNOLM-escalier-bois-droit-pas-cher-KORDO-768x768.jpg',
            ],
            price: {
                old: 10000,
                current: 8888
            }
        };

        const array = new Array(11).fill(testData);
        return array;
    }
    React.useEffect(()=> {
        setRenderChunks(
            useChank(items ?? fiction(), countRow ?? 4)
        );
    }, []);
    

    return(
        <Box
            className='Proposition'
            sx={{
                width: '100%',
                height: '20%',
                display: 'flex',
                flexDirection: 'column',
                ...sx
            }}
        >
            {/* навигация и label */}
            <Box
                sx={{
                    width: '100%',
                    height: '10%',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {/* Подпись, можно сделать редактируемым */}
                <LabelHome>
                    Выгодные предложения
                </LabelHome>
                {/* стрелочки навигации */}
                <ArrowNavigation
                    currentPage={current}
                    lastPage={renderChunks.length - 1}
                    onClick={handlerClickArow}
                />
            </Box>

            {/* галерея */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 3
                }}
            >
                { renderChunks[current]?.map((elem, index)=> 
                    <Card 
                        key={index}
                        id={index}
                        item={elem}
                    />
                ) }
            </Box>
        </Box>
    );
}