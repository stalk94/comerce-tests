import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Item from './item';
import { items } from './index';



export default function() {
    const { id } = useParams();
    const itemId = Number(id);

    
    const item = items.find((item) => item.id === itemId);

    if (!item) {
        return <div>Товар не найден</div>;
    }

    return <Item item={item} />;
}