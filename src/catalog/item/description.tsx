import React from "react";
import { Box, Paper, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { NumberInput } from '../../component/input';
import { ItemProduct } from '../index';


type DescriptionSegmentProps = {
    item: ItemProduct
    nameComponent?: React.ReactNode 
}


const BlockPrice =({ item })=> {
    const calculate =()=> item.price.current + (item.price.current * 0.1);


    return(
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 80,
                mt: 3,
                px: {
                    xs: 1, // padding для экранов xs (меньше 600px)
                    sm: 2, // padding для экранов sm (600px и больше)
                    md: 3, // padding для экранов md (960px и больше)
                    lg: 4, // padding для экранов lg (1280px и больше)
                    xl: 5, // padding для экранов xl (1920px и больше)
                },
                borderRadius: '15px',
            }}
        >
            
            <Box 
                sx={{ 
                    minWidth: '180px', 
                    display: 'flex' 
                }}
            >
                <Typography color="black"
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        fontWeight: 800,
                        fontSize: '28px',
                        lineHeight: '1', // 100%
                        letterSpacing: '0px', // 0%
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >
                    От { item.price?.current } ₽
                </Typography>
                <Typography color="black"
                    sx={{
                        textDecoration: 'line-through',
                        fontFamily: 'Kinetika, sans-serif',
                        mt: 0.5,
                        ml: 1,
                        fontWeight: 800,
                        fontSize: '22px',
                        lineHeight: '1',
                        textAlign: 'center',
                        color: '#9F9F9F'
                    }}
                >
                    { item?.price?.old || calculate() } ₽
                </Typography>
            </Box>

            <Box 
                sx={{
                    marginLeft: {
                        xs: 3, // padding для экранов xs (меньше 600px)
                        sm: 5, // padding для экранов sm (600px и больше)
                        md: 15, // padding для экранов md (960px и больше)
                        lg: 10, // padding для экранов lg (1280px и больше)
                        xl: 15, // padding для экранов xl (1920px и больше)
                    }
                }}
            >
                <Typography color="black"
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        ml: 1,
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '1',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                    }}
                >
                    Для расчета выберите интересующие Вас размеры в таблице  &nbsp;
                    <a href="#table">Размеры и цены</a>
                </Typography>
            </Box>
        </Paper>
    );
}



export const DescriptionSegment =({ item, nameComponent }: DescriptionSegmentProps)=> {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handlerChangeInputs =(name: 'width'|'height'|'count', value: number)=> {
        console.log(name, value);
    }
    

    return(
        <div className="DescriptionTopCatalogItem">
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    //mx: 1
                }}
            >

                { nameComponent }

                {/* описание */}
                <Typography
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        mt: 3,
                        fontWeight: 100,
                        fontSize: isSmallScreen ? '14px' : '16px',
                        lineHeight: '1.5',
                        maxWidth: '100%',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'normal',
                       
                    }}
                >
                    { item.description }
                </Typography>

                {/* блок с ценой */}
                <BlockPrice 
                    item={item}
                />

                {/* расчет цены */}
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Kinetika, sans-serif',
                            mt: 3,
                            fontWeight: 100,
                            fontSize: '16px',
                            lineHeight: '1.5'
                        }}
                    >
                        Введите посадочные размеры:
                    </Typography>
                    <Box sx={{ 
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                        }}
                    >
                        <NumberInput 
                            label='Ширина, мм' 
                            onChange={(v)=> handlerChangeInputs('width', v)} 
                        />
                        <NumberInput 
                            label='Высота, мм' 
                            onChange={(v)=> handlerChangeInputs('height', v)} 
                        />
                        <NumberInput 
                            label='Количество' 
                            onChange={(v)=> handlerChangeInputs('count', v)} 
                            isAdornments={ !isSmallScreen } 
                        />
                    </Box>
                </Box>

                {/* */}
                <Button 
                    variant="contained" 
                    color="error" 
                    sx={{borderRadius:'16px', width:'100%',mt:2}}
                >
                    рассчитать стоимость Под заказ
                </Button>
            </Box>
        </div>
    );
}


/**
 *  display: '-webkit-box',         // Поддержка для многострочного обрезания
                        WebkitBoxOrient: 'vertical',    // Вертикальная ориентация для текста
                        WebkitLineClamp: 3,             // Обрезка текста после 3 строк
 */