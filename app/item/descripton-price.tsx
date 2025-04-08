import React from "react";
import { ItemProduct } from '../global.d.ts';
import { Box, Paper, Typography, BoxProps } from "@mui/material";



type DescriptionBlockPriceProps = {
    item: ItemProduct
}
type PriceProps = BoxProps & {
    item: ItemProduct
}

/** Цена (старая / новая) */
export const Price = ({ item, ...props }: PriceProps) => {
    const calculate =()=> {
        if(item?.price?.current) return item.price.current + (item.price.current * 0.1);
        else return 0;
    }

    return (
        <Box
            sx={{
                minWidth: {
                    xs: '150px',
                    md: '180px',
                },
                display: 'flex',
                ...props.sx
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
                { item.price?.current } ₽
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
    );
}

//todo: имеется баг с слотом цены при значении более 9999
export default function BlockPrice ({ item }: DescriptionBlockPriceProps) {

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

            {/* ANCHOR - цена */}
            <Price 
                item={item} 
            />

            {/* ANCHOR - текст подпись */}
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
                        fontFamily: 'Geometria, sans-serif',
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