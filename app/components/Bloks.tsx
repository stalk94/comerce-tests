import React from "react";
import { Box, Grid2 } from "@mui/material";
import { LabelPromo, LabelSecondary } from './Text';
import Button from './Buttons';


export function CompanyBlock({ onClick }) {
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
                    flexDirection: 'row'
                }}
            >
                <img
                    src='mps.png'
                    style={{
                        maxHeight: '260px',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        px: 5
                    }}
                >
                    <LabelPromo
                        sx={{
                            fontSize: {
                                xs: "1rem", // Для мобильных устройств
                                sm: "1.5rem",   // Для маленьких экранов
                                md: "2rem", // Для средних и больших экранов
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
                            mr: 50,
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


