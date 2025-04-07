import React from "react";
import { useHookstate } from '@hookstate/core';
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { NumberInput } from '../../src/component/input';
import { ItemProduct } from '../global.d.ts';
import { itemState } from './index';
import BlockPrice from './descripton-price';


type DescriptionSegmentProps = {
    item: ItemProduct
    nameComponent?: React.ReactNode 
}



export default function DescriptionSegment ({ item, nameComponent }: DescriptionSegmentProps) {
    const theme = useTheme();
    const stateTable = useHookstate(itemState.table);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const handlerChangeInputs =(name: 'width'|'height'|'count', value: number)=> {
        // width - col, height: row
        console.log(name, value);
        stateTable[name].set(value);
    }
    const handleClick =()=> {
        console.log('click button');
    }
    

    return(
        <div>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    //mx: 1
                }}
            >

                { nameComponent }

                {/* ANCHOR: описание */}
                <Typography
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        mt: 3,
                        //pl: 1,
                        fontSize: isSmallScreen ? '14px' : '16px',
                        lineHeight: '1.5',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'normal',
                    }}
                >
                    { item.description }
                </Typography>

                {/* ANCHOR: блок с ценой */}
                <BlockPrice 
                    item={item}
                />

                {/* ANCHOR: расчет цены */}
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Kinetika, sans-serif',
                            mt: 3,
                            fontSize: '16px',
                            lineHeight: '1.5',
                            textDecoration: 'underline'
                        }}
                    >
                        Введите посадочные размеры:
                    </Typography>
                    <Box 
                        sx={{ 
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                        }}
                    >
                        <NumberInput 
                            label='Ширина, мм' 
                            value={stateTable.width.get()}
                            onChange={(v)=> handlerChangeInputs('width', v)} 
                        />
                        <NumberInput 
                            label='Высота, мм' 
                            value={stateTable.height.get()}
                            onChange={(v)=> handlerChangeInputs('height', v)} 
                        />
                        <NumberInput 
                            label='Кол-во' 
                            value={stateTable.count.get()}
                            onChange={(v)=> handlerChangeInputs('count', v)} 
                            isAdornments={ !isSmallScreen } 
                        />
                    </Box>
                </Box>

                {/* ANCHOR: кнопка */}
                <Button 
                    size="large"
                    variant="contained" 
                    color="error" 
                    sx={{
                        borderRadius: '16px',
                        width: '100%',
                        mt: 2
                    }}
                    onClick={handleClick}
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