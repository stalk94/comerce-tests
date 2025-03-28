import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { NumberInput } from '../../component/input';
import { ItemProduct } from '../index';


type DescriptionSegmentProps = {
    item: ItemProduct
    nameComponent?: React.ReactNode 
}


export const DescriptionSegment =({ item, nameComponent }: DescriptionSegmentProps)=> {
    const handlerChangeInputs =(name: 'width'|'height'|'count', value: number)=> {
        console.log(name, value);
    }
    const calculate =()=> item.price.current + (item.price.current * 0.1);
    

    return(
        <div className="DescriptionTopCatalogItem">
            <Box>

                { nameComponent }

                <Typography
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        mt: 3,
                        fontWeight: 100,
                        fontSize: '16px',
                        lineHeight: '1.5',
                        maxWidth: '100%',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'normal',           // Для многострочного текста
                        display: '-webkit-box',         // Поддержка для многострочного обрезания
                        WebkitBoxOrient: 'vertical',    // Вертикальная ориентация для текста
                        WebkitLineClamp: 3,             // Обрезка текста после 3 строк
                    }}
                >
                    { item.description }
                </Typography>

                <Paper 
                    elevation={0} 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 80,
                        mt: 3,
                        px: 5,
                        borderRadius: '15px',
                    }}
                >
                    <Box sx={{minWidth: '180px', display: 'flex'}}>
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
                            От { item.price?.current } P
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
                            { item?.price?.old || calculate() } P
                        </Typography>
                    </Box>

                    <Typography color="black"
                        sx={{
                            fontFamily: 'Kinetika, sans-serif',
                            ml: 15,
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '1',
                            textAlign: 'left',
                            textTransform: 'uppercase',
                        }}
                    >
                        Для расчета выберите интересующие Вас размеры в таблице Размеры и цены
                    </Typography>
                </Paper>

                {/* */}
                <div>
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
                            isAdornments={true} 
                        />
                    </Box>
                </div>

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