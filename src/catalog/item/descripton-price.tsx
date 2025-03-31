import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { ItemProduct } from '../index';


type DescriptionBlockPriceProps = {
    item: ItemProduct
}


//todo: имеется баг с слотом цены при значении более 9999
export default function BlockPrice ({ item }: DescriptionBlockPriceProps) {
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
                    xs: 2, // padding для экранов xs (меньше 600px)
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
                    minWidth: {
                        xs: '150px',
                        md: '180px',
                    },
                    display: 'flex' 
                }}
            >
                <Typography color="black"
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        fontWeight: 800,
                        fontSize: {
                            xs: 18,
                            md: 20,
                        },
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
                        fontSize: {
                            xs: 16,
                            md: 18,
                        },
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
                        fontSize: {
                            xs: '12px'
                        },
                        lineHeight: '1',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                    }}
                >
                    Для расчета выберите интересующие Вас размеры в таблице
                    <a href="#table"> Размеры и цены</a>
                </Typography>
            </Box>
        </Paper>
    );
}