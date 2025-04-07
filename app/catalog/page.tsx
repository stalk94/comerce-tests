"use client"
import React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { Grid2, useMediaQuery, Box } from '@mui/material';
import { Desktop, Mobail } from '../components/CatalogCart';


// тестовый источник данных
const catalogs = [
    { id: 'luki', image: 'images/4.png', title: 'Люки выхода на кровлю' },
    { id: 'luki2', image: 'images/3.png', title: 'Люки выхода на кровлю' }
];



// роутинг подключить
export default function Catalog({ items }) {
    const router = useRouter();
    const isMobile = useMediaQuery('(max-width:600px)');

    const handleClick =(product)=> {
        router.push(`/catalog/${product.id}`);
    }


    return (
        <Grid2 
            container 
            spacing={2}
        >
            {( items ?? catalogs).map((product, id) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={id}>
                    <Box
                        onClick={()=> handleClick(product)}
                        sx={{
                            cursor: 'pointer',
                            height: '100%',
                        }}
                    >
                        { isMobile
                            ? <Mobail
                                image={product.image}
                                title={product.title}
                            />
                            : <Desktop
                                image={product.image}
                                title={product.title}
                            />
                        }
                    </Box>
                </Grid2>
            ))}
        </Grid2>
    );
}