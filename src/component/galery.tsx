import React from 'react';
import { useTheme } from '@mui/material';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Carousel } from 'primereact/carousel';
import { ItemProduct } from '../catalog';



type CarouselProps = {
    item: ItemProduct
    onChange: (currentSrc: string)=> void 
    currentSelect?: string
}


export const VerticalCarousel: React.FC =({ item, onChange, currentSelect }: CarouselProps)=> {
    const itemTemplate =(src: string)=> {
        return (
            <div 
                className={`carousel-item ${currentSelect===src && 'select'}`}
                onClick={()=> onChange(src)}
            >
                <img
                    style={{
                        margin: 'auto',
                        borderRadius: 5,
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover'
                    }}
                    src={src}
                />
            </div>
        );
    }

   

    return (
        <div className="vertical-carousel">
            <Carousel 
                //style={{width: '7%'}}
                value={item.images}
                numVisible={4}
                orientation="vertical"
                itemTemplate={itemTemplate}
                verticalViewPortHeight="340px"
                circular
                autoplayInterval={6000}
            />
            <style>
            {`
                .p-carousel-indicators {
                    display: none;
                }
            `}
        </style>
      </div>
    );
}


export const HorizontalCarousel: React.FC =({ item, onChange, currentSelect }: CarouselProps)=> {
    const theme = useTheme();

    const itemTemplate =(src: string)=> {
        return (
            <div 
                style={{
                    display: 'flex',
                    padding: 'auto',
                }}
                onClick={()=> onChange(src)}
            >
                <img
                    style={{
                        margin: 'auto',
                        borderRadius: 5,
                        width: 250,
                        height: 250,
                        objectFit: 'cover'
                    }}
                    src={src}
                />
            </div>
        );
    }

   

    return (
        <div 
            style={{
                margin: 'auto',
                marginTop: '3%',
                minWidth: 350,
                minHeight: 350,
                width: '50%',
                height: '100%',
                border: '1px solid #EBEBEB',
                borderRadius: '15px'
            }}
        >
            <Carousel style={{marginTop:'10%'}}
                value={item.images}
                numVisible={1}
                orientation="horizontal"
                itemTemplate={itemTemplate}
                verticalViewPortHeight="340px"
                circular
                autoplayInterval={6000}
            />
            
            <style>
                {`
                    .p-link[aria-current="page"] {
                        background-color: ${theme.palette.error.main} !important;
                    }

                    .p-link[data-pc-section="indicatorbutton"] {
                        background-color: #CCCCCC;
                    }
                `}
            </style>
      </div>
    );
}