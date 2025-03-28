import React from "react";
import TopSegment from './item/top';
import CenterSegment from './item/center';
import BottomSegment from './item/bottom';
import { Container } from "@mui/material";
import '../styles/item-catalog.css';
import o1 from '../images/1.png';
import o2 from '../images/2.png';
import o3 from '../images/3.png';
import o4 from '../images/4.png';
import o5 from '../images/5.png';




/**
 * !Интерфейс точно не известен
 */
export interface ItemProduct {
    id: number
    name: string
    description: string
    images: string[]
    price?: {
        old: number
        current: number
    }
    property?: {
        width: number
        height: number
        count: number
    }
}
const items: ItemProduct[] = [
    { 
        id: 1, 
        images: [o1, o2, o3, o4, o5], 
        name: 'Люк сантехнический на магните ЛММ белый 0.8мм',
        description: 'Люк из окрашенного металла сантехнический на магнитах (ЛММ) – экономичный способ перекрыть технологические окна в стенах вспомогательных помещений, коридоров, мест общего пользования.',
        price: {
            old: 334,
            current: 301
        }
    },
];



/**
 * Реализован (только) компонент предмета в каталоге
 * Сама реализация каталога не известна
 * 
 */
export default function({  }) {
    
    return (
        <Container className="CatalogItem">
            <TopSegment
                item={items[0]}
            />
            <CenterSegment 
                item={items[0]}
            />
            <BottomSegment
                item={items[0]}
            />
        </Container>
    );
}