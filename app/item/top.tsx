import React from "react";
import { VerticalCarousel, HorizontalCarousel } from '../../src/component/galery';
import { ItemProduct } from '../global.d.ts';
import DescriptionSegment from './description';
import { Name } from './atomize';
import { Box, useTheme, useMediaQuery } from "@mui/material";



export default function ({ item }: { item: ItemProduct }) {
    const [currentImage, setCurrentImage] = React.useState<string>();
    const isMobile = useMediaQuery('(max-width:600px)');

    
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row' 
            }}
        >
            {/* ANCHOR: имя в mobail */}
            { isMobile &&
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
				    }}
                >
                    <svg width="16" height="16" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.34828 5L7 1.57074L5.32736 0L1.67564 3.42926L1.67264 3.42644L0 4.99719L0.00299883 5L0 5.00281L1.67264 6.57356L1.67564 6.57074L5.32736 10L7 8.42926L3.34828 5Z" fill="#415878"/>
                    </svg>

                    <Name 
                        sx={{ ml: 1 }} 
                        name={item.name}
                    /> 
                    
                </Box>
            }  

            {/* ANCHOR: карусели */}
            { !isMobile 
                ? <VerticalCarousel
                    item={item}
                    currentSelect={currentImage}
                    onChange={setCurrentImage}
                 />
                : <HorizontalCarousel
                    item={item}
                    currentSelect={currentImage}
                    onChange={setCurrentImage}
                 />
            }

            {/* ANCHOR: картинка только */}
            { !isMobile &&
                <div className="PreviewImage">
                    <img
                        style={{
                            margin: 'auto',
                            borderRadius: 5,
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover'
                        }}
                        src={currentImage ?? item.images[0]}
                    />
                </div>
            }

            <DescriptionSegment
                item={item}
                nameComponent={ 
                    !isMobile && <Name name={item.name}/> 
                }
            />

            <style>
                {`
                    .CatalogItem {
                        height: 100%;
                    }
                    .CenterCatalogItem {
                        display: flex;
                        flex-direction: column;
                    }

                    .PreviewImage {
                        display: flex;
                        border-radius: 30px;
                        border: 1px solid #EBEBEB;
                        margin: 25px;
                        margin-left: 2%;
                        min-width: 400px;
                    }
                `}
            </style>
        </Box>
    );
}