import React from "react";
import { VerticalCarousel, HorizontalCarousel } from '../../src/component/galery';
import { ItemProduct } from '../global.d.ts';
import DescriptionSegment from './description';
import { Name } from './atomize';
import { Box, useTheme, useMediaQuery, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function ({ item }: { item: ItemProduct }) {
    const [currentImage, setCurrentImage] = React.useState<string>();
    const isMobile = useMediaQuery('(max-width:600px)');

    
    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row' ,
                mx: 1
            }}
        >
            {/* ANCHOR: имя в mobail */}
            { isMobile &&
                <Box 
                    onClick={()=> console.log('ss')}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
				    }}
                >
                    <ArrowBackIcon />
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