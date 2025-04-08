import React from "react";
import { useHookstate } from '@hookstate/core';
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { NumberInput } from '../../src/component/input';
import { ItemProduct } from '../global.d.ts';
import { itemState } from './index';
import BlockPrice, { Price } from './descripton-price';
import Modal from '../components/modal';


type DescriptionSegmentProps = {
    item: ItemProduct
    nameComponent?: React.ReactNode 
}

const DotRow = ({ label, value }: { label: string; value: string }) => {
    return (
      <Box
        sx={{
          display: "flex",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
          component="span"
          sx={{
            pr: 1,
          }}
        >
          {label}
        </Typography>
  
        <Box
          component="span"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            "&::before": {
              content: `'................................................................................................................'`,
              color: "#999",
              fontFamily: "monospace",
              letterSpacing: "1px",
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
            },
          }}
        />
  
        <Typography
          component="span"
          sx={{
            pl: 1,
            flexShrink: 0,
          }}
        >
          {value}
        </Typography>
      </Box>
    );
}
const TopModal =({ item })=> {
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 3
            }}
        >
            <Box
                component="img"
                src={item.images[0]}
                alt={item.name}
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    border: (theme)=> `1px solid ${theme.palette.card.border}`,
                    backgroundColor: '#f5f6f8',
                    objectFit: 'cover',
                }}
            />
        </Box>
    );
}


export default function DescriptionSegment ({ item, nameComponent }: DescriptionSegmentProps) {
    const theme = useTheme();
    const [openModal, setOpenModal] = React.useState(false);
    const stateTable = useHookstate(itemState.table);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    
    const handlerChangeInputs =(name: 'width'|'height'|'count', value: number)=> {
        // width - col, height: row
        console.log(name, value);
        stateTable[name].set(value);
    }
    const handleClick =()=> {
        
    }
    

    return(
        <div>
            <Modal 
                open={openModal}
                setOpen={setOpenModal}
            >
                <TopModal
                    item={item}
                />
                <Box
                    sx={{
                        width: 600,
                        p: 3
                    }}
                >
                    <DotRow
                        label='test'
                        value='test'
                    />
                </Box>
            </Modal>
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