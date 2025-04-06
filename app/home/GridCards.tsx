import React from "react";
import { Box, Grid2, BoxProps } from "@mui/material";
import { LabelPrimary, LabelSecondary, LabelHome } from '../components/Text';
import { Quality, Job, Production, Delivery, Dialog } from './icons';
import Button from "../components/Buttons";


const CardInfo =({ primary, secondary, type })=> {
    const icons = {
        Quality,
        Job,
        Production,
        Delivery,
        Dialog,
    }
    const Icon = icons[type] || Job;


    return(
        <Box
            sx={{
                p: 5,
                borderRadius: 5,
                border: (theme)=> `1px solid ${theme.palette.card.border}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Icon sx={{ fontSize: 60 }} />
            <LabelPrimary sx={{mt: 3}} >
                { primary }
            </LabelPrimary>
            <LabelSecondary>
                { secondary }
            </LabelSecondary>
        </Box>
    );
}
const FeedBack =({ onClick })=> {
    return(
        <Box
            sx={{
                p: 6,
                backgroundColor: (theme) => theme.palette.background.card,
                borderRadius: 5,
                border: (theme)=> `1px solid ${theme.palette.card.border}`,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Dialog sx={{ fontSize: 60 }} />
            <LabelPrimary sx={{mt: 2}}>
                Получить консультацию
            </LabelPrimary>
            <LabelSecondary>
                Оставьте ваши контактные данные, и наши специалисты обязательно свяжутся с вами!
            </LabelSecondary>
            <Button
                id="feed-back"
                onClick={onClick}
                sx={{
                    mt: 4,
                    //height: 50,
                    width: 200,
                    borderRadius: 5
                }}
            >
                заказать
            </Button>
        </Box>
    );
}


export default function InfoGrid({ ...props }: BoxProps) {
    const labels = {
        Production: `Большой выбор продукции`,
        Job: `15 лет опыта работы`,
        Delivery: `Доставка по всей России`,
        Quality: `Гарантия качества`,
    }
    const descr = {
        Production: `Мы поддерживаем значительные товарные запасы на складе в Подмосковье, чтобы оперативно исполнять заказы и не заставлять наших покупателей ждать доставки.`,
        Job: `За это время мы накопили глубокие знания и отточили свои навыки, что позволяет нам предлагать нашим клиентам только лучшие решения и высококачественную продукцию`,
        Delivery: `Наши пункты выдачи расположены в 165 городах. Мы предлагаем бесплатную доставку по всей России при покупке от 6500 Р, а по Москве — при заказе от 2500 Р.`,
        Quality: `Мы тщательно отбираем товары для продажи, сотрудничая только с брендами, имеющими надежную репутацию. В нашем каталоге представлены позиции с заводской гарантией до 5 лет.`,
    }

    const handlerClickCallBack =()=> {
        console.log('click feed back')
    }


    return(
        <Box { ...props }>
            <LabelHome>
                почему выбирают нас
            </LabelHome>
            <Grid2 
                sx={{ py: 5 }}
                container
                spacing={2}
            >
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <CardInfo
                        primary={labels.Production}
                        secondary={descr.Production}
                        type='Production'
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <CardInfo
                        primary={labels.Job}
                        secondary={descr.Job}
                        type='Job'
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <CardInfo
                        primary={labels.Delivery}
                        secondary={descr.Delivery}
                        type='Delivery'
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }}>
                    <CardInfo
                        primary={labels.Quality}
                        secondary={descr.Quality}
                        type='Quality'
                    />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <FeedBack onClick={handlerClickCallBack} />
                </Grid2>
            </Grid2>
        </Box>
    );
}