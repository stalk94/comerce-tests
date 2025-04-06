import React from "react";
import { Box, Grid2 } from "@mui/material";
import { LabelPromo, LabelSecondary } from '../components/Text';
import Button from "../components/Buttons";


// todo: доработать
export default function CompanyBlock({ onClick }) {
    return(
        <Box
            sx={{
                mt: 5,
                p: 5,
                borderRadius: 5,
                backgroundColor: (theme)=> theme.palette.background.card
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}
            >
                <Box 
                    component='img'
                    src='mps.png'
                    sx={{
                        maxHeight: {
                            xs: 160,
                            md: 260,
                        },
                        maxWidth: {
                            xs: 160,
                            md: 260,
                        }
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        px: {
                            xs: 0,
                            md: 5
                        }
                    }}
                >
                    <LabelPromo
                        sx={{
                            fontSize: {
                                xs: "1rem", // Для мобильных устройств
                                sm: "1.5rem",   // Для маленьких экранов
                                md: "2rem", // Для средних и больших экранов
                            },
                            my: {
                                xs: 3,
                                md: 0
                            }
                        }}
                    >
                        КОМПАНИЯ МЕТПРОМСНАБ
                    </LabelPromo>
                    <LabelSecondary>
                        Московская компания специализируемся на производстве и продаже товаров для систем вентиляции и ревизионных люков.
                        С 2004 года мы уверенно занимаем лидирующие позиции в отрасли. В нашем интернет-магазине вы найдёте широкий ассортимент продукции с возможностью доставки по всей стране.
                    </LabelSecondary>
                    <Button
                        onClick={onClick}
                        sx={{
                            mt: 3,
                            mr: {
                                xs: 5,
                                md: 50,
                            },
                            height: 50,
                            borderRadius: 5
                        }}
                    >
                        подробнее о нас
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}


