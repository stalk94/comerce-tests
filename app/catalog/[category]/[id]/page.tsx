"use client"
import React from "react";
import Item from '../../../item/index';
import { useParams } from 'next/navigation';


export const itemsTest = [
    { 
        id: 0, 
        images: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png'], 
        name: 'Люк сантехнический на магните ЛММ белый 0.8мм',
        description: 'Люк из окрашенного металла сантехнический на магнитах (ЛММ) – экономичный способ перекрыть технологические окна в стенах вспомогательных помещений, коридоров, мест общего пользования.',
        price: {
            old: 334,
            current: 301
        }
    },
    {
        id: 1,
        images: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png'],
        name: 'Люк сантехнический на магните ЛММ серый 1.0мм',
        description: 'Серый люк с улучшенной магнитной системой. ',
        price: {
            old: 40,
            current: 350
        }
    }
];


// настроить роутинг
export default function() {
    const { id } = useParams();
    
    
    return(
        <Item 
            item={itemsTest[0]} 
        />
    );
}