'use client'
import React from 'react';
import PromoBaner from '../components/PromoBaner';
import { Editor, Frame, Element, useEditor, useNode, Canvas } from '@craftjs/core';
import { Button, TextField } from '@mui/material';




const Template =({ selectedComponent })=> {
    const { actions } = useEditor();
    const [color, setColor] = React.useState('#add8e6');
    
    const applyStyles = () => {
        actions.setProp(selectedComponent, {
            style: {
                color
            }
        });
    }
    React.useEffect(() => {
        // Добавление компонента только при изменении selectedComponent
        if (selectedComponent === 'test') {
            actions.addNodeTree({
                nodes: {
                  'promo-banner-id': {
                        id: 'promo-banner-id',
                    },
                },
                rootNodeId: 'promo-banner-id'
            });
        }
    }, [selectedComponent, actions]);


    return(
        <>
        <TextField
            label="Цвет"
            value={color}
            onChange={(e) => {
                setColor(e.target.value);
                setTimeout(applyStyles, 100)
            }}
            fullWidth
        />
        <Frame>
            <Element is='div' canvas>
                
            </Element>
        </Frame>
        </>
    );
}

export default function () {
    const [selectedComponent, setSelectedComponent] = React.useState(null);
    

    const handleElementClick = (e) => {
        const componentType = e.target.dataset.component;
        setSelectedComponent(componentType);
    }

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleElementClick}
                style={{ margin: '10px' }}
                data-component="test"
            >
                Карточка MUI
            </Button>

            <Editor resolver={{ PromoBaner }}>
                <Template
                    selectedComponent={selectedComponent}
                />
            </Editor>
        </div>
    );
}