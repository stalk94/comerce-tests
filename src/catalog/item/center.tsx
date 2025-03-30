import React from "react";
import { ItemProduct } from '../index';
import { Box, Paper, Typography } from "@mui/material";



export default function ({ item }: { item: ItemProduct }) {
    
    return (
        <Box className="CenterCatalogItem"
            sx={{
                py: 5
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 800,
                    fontSize: '20px',
                    lineHeight: '1', // 100%
                    letterSpacing: '0px', // 0%
                    textTransform: 'uppercase',
                }}
            >
                Размеры и цены
            </Typography>
            
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 3,
                    borderRadius: '30px',
                    p: {
                        xs: 3, // padding для экранов xs (меньше 600px)
                        sm: 3, // padding для экранов sm (600px и больше)
                        md: 3, // padding для экранов md (960px и больше)
                        lg: 4, // padding для экранов lg (1280px и больше)
                        xl: 5, // padding для экранов xl (1920px и больше)
                    }
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                    }}
                >
                    <Typography color="black"
                        sx={{
                            pb: 3,
                            fontFamily: 'Kinetika, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '1.5', // 100%
                            letterSpacing: '0px', // 0%
                            textAlign: 'left',
                            borderBottom: '1px solid #9f9f9f19'
                        }}
                    >
                        Для заказа товара выберите в таблице ячейку на пересечении необходимой ширины и высоты вашего посадочного размера, кликните на ячейку для возможности заказа. Высота - это сторона, на которую будет открываться люк или дверь.
                    </Typography>
                    <Box 
                        sx={{ 
                            mt: 2, 
                            display: 'flex'
                        }}
                    >
                        <svg width="26" height="26" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#9C2426"/>
                            <path d="M13.598 19.362C13.598 18.3 14.426 17.454 15.488 17.454C16.55 17.454 17.378 18.3 17.378 19.362C17.378 19.884 17.198 20.316 16.82 20.694C16.46 21.072 16.01 21.252 15.488 21.252C14.966 21.252 14.516 21.072 14.138 20.694C13.778 20.316 13.598 19.884 13.598 19.362ZM16.946 16.644H14.048L13.31 8.4H17.684L16.946 16.644Z" fill="white"/>
                        </svg>
                        <Typography color="black"
                            sx={{      
                                fontFamily: 'Kinetika, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '1',
                                textAlign: 'left',
                                my: 'auto',
                                ml: 2
                            }}
                        >
                        <b>Внимание! </b> 
                        Для запуска в работу товара со статусом "Под заказ" требуется его оплата.
                    </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}