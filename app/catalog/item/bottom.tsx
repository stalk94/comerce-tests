import React from "react";
import { ItemProduct } from '../index';
import { Box, Paper, Typography } from "@mui/material";
import NavigationTab from '../../component/navigation';
import Table from '../../component/table';


const Description =()=> {
    return(
        <React.Fragment>
            <Typography color="black"
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 800,
                    fontSize: '20px',
                    lineHeight: '1',
                    textAlign: 'left',
                    my: 'auto',
                }}
            >
                Описание товара
            </Typography>
            <Typography color="black"
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 100,
                    fontSize: '16px',
                    lineHeight: '1',
                    textAlign: 'left',
                    my: 'auto',
                    mt: 2
                }}
            >
                Мансардные окна FTP-V (CH) со среднеповоротным типом открывания – упрощенная модель мансардных окон класса PROFI. Центрально-поворотные шарниры, выполненные из стали с применением технологии topSafe, обеспечивают необходимую прочность конструкции.
            </Typography>
            <Typography color="black"
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 800,
                    fontSize: '20px',
                    lineHeight: '1',
                    textAlign: 'left',
                    my: 'auto',
                    mt: 4
                }}
            >
                Особенности модели
            </Typography>
            <Typography color="black"
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 100,
                    fontSize: '16px',
                    lineHeight: '1',
                    textAlign: 'left',
                    my: 'auto',
                    mt: 2
                }}
            >
                Мансардные окна FTP-V (CH) со среднеповоротным типом открывания – упрощенная модель мансардных окон класса PROFI. Центрально-поворотные шарниры, выполненные из стали с применением технологии topSafe, обеспечивают необходимую прочность конструкции.
            </Typography>
    </React.Fragment>
    );
}


/**
 * 
 * 
 */
export default function ({ item, onTableChange }: { item: ItemProduct }) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handlerChangeNavigationTab =(index: number)=> {
        setActiveIndex(index);
        console.log(index);
    }


    return (
        <section className="CenterCatalogItem">
            {/* табличка размеров и цен */}
            <Table 
                onChange={onTableChange}
            />

            {/* навигатор по доп инофрмации товара */}
            <NavigationTab 
                sx={{
                    mt: 5
                }}
                activeIndex={activeIndex} 
                onChange={handlerChangeNavigationTab}
            />

            {/* доп инофрмация товара */}
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '30px',
                    mt: 3
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box 
                        sx={{ 
                            p: {
                                xs: 3, // padding для экранов xs (меньше 600px)
                                sm: 3, // padding для экранов sm (600px и больше)
                                md: 3, // padding для экранов md (960px и больше)
                                lg: 4, // padding для экранов lg (1280px и больше)
                                xl: 5, // padding для экранов xl (1920px и больше)
                            },
                            mt: 2, 
                            display: 'flex', 
                            flexDirection: 'column' 
                        }}
                    >
                        { activeIndex === 0 && <Description /> }
                    </Box>
                </Box>
            </Paper>
            
        </section>
    );
}