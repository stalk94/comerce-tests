import React from "react";
import { Box, Button, Typography, Grid2, IconButton } from "@mui/material";
import { LabelPromo, LabelSecondary } from '../components/Text';


const LinkList =({ items, label, onClick })=> {
    return(
        <>
            { label &&
                <Typography
                    data-edit='text'        //!
                    id='primary-linkList'
                    color="primary"
                    sx={{
                        fontFamily: 'Kinetika, sans-serif',
                        fontWeight: 800,
                        textAlign: "left",
                        textTransform: 'uppercase',
                        mb: 2
                    }}
                    variant='body1'
                >
                    { label }
                </Typography>
            }
            {items.map((elem, index)=>
                <LabelSecondary
                    key={index}
                    sx={{
                        cursor: 'pointer',
                        ":hover": {
                            color: "primary.main", // Изменение цвета при наведении
                        }
                    }}
                    onClick={()=> onClick(elem.id)}
                >
                    { elem.label }
                </LabelSecondary>
            )}
        </>
    );
}
const FooterContacts =({ onClick })=> {
    const data = [
        "8 (495) 984-33-93",
        "8 (901) 586-80-11",
        "8 (800) 100-91-18",
        "metpromsnab@mail.ru"
    ];

    return (
        <>
            <Typography
                data-edit='text'        //!
                id='primary-linkList'
                color="primary"
                sx={{
                    fontFamily: 'Kinetika, sans-serif',
                    fontWeight: 800,
                    textAlign: "left",
                    textTransform: 'uppercase',
                    mb: 2
                }}
                variant='body1'
            >
                контакты
            </Typography>
            {data.map((text, index)=>
                <LabelSecondary key={index}>
                    { text }
                </LabelSecondary>
            )}
            <Button
                color='error'
                variant='contained'
                onClick={onClick}
                sx={{
                    mt: 2,
                    height: 40,
                    borderRadius: 5
                }}
            >
                заказать звонок
            </Button>
        </>
    )
}


export default function() {
    // 'company' 'services' 'payInfo'
    const company = [
        { label: 'Акции', id: 'action' },
        { label: 'О компании', id: 'info' },
        { label: 'Сертификаты', id: 'sertificate' },
        { label: 'Отзывы', id: 'reviews' },
        { label: 'Сотрудничество', id: 'partner' },
        { label: 'Контакты', id: 'contacts' }
    ];
    const services = [
        { label: 'Установка и монтаж', id: 'install' },
        { label: 'Замеры и регулировка', id: 'size' },
        { label: 'Сервисный центр', id: 'center' }
    ];
    const payInfo = [
        { label: 'Оплата', id: 'pay' },
        { label: 'Возврат и обмен', id: 'back' },
        { label: 'Доставка', id: 'delivery' },
        { label: 'Kак заказать', id: 'info' },
        { label: 'Гарантия', id: 'garant' },
        { label: 'Пункты выдачи', id: 'extradition' }
    ];


    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: {
                    xs: '1200px',           // todo: донастроить под все размеры
                },
                margin: '0 auto', 
            }}
        >
            <Grid2 
                sx={{py: 5}} 
                container 
                spacing={2}
            >
                <Grid2 size={{md: 3}}>
                    <LinkList
                        items={company}
                        label='Компания'
                        onClick={(id)=> console.log('/company/'+id)}
                    />
                </Grid2>
                <Grid2 size={{md: 3}}>
                    <LinkList
                        items={services}
                        label='Услуги'
                        onClick={(id)=> console.log('/services/'+id)}
                    />
                </Grid2>
                <Grid2 size={{md: 3}}>
                    <LinkList
                        items={payInfo}
                        label='Kак купить'
                        onClick={(id)=> console.log('/payInfo/'+id)}
                    />
                </Grid2>
                <Grid2 size={{md: 3}}>
                    <FooterContacts 
                        onClick={console.log}
                    />
                </Grid2>
            </Grid2>

            <Box
                sx={{
                    display:'flex',
                    flexDirection: 'row'
                }}
            >
                <Typography>
                    Copyright © Метпромснаб, 2016-2025
                </Typography>
                <Typography>
                    Политика конфиденциальности
                </Typography>
                <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'row',
                        marginLeft: 'auto'
                    }}
                >
                    Мессенджеры: 
                    📞 📞
                </Box>
            </Box>
        </Box>
    );
}