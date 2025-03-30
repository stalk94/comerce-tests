import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import o1 from '../images/1.png';
import o2 from '../images/2.png';
import o3 from '../images/3.png';
import o4 from '../images/4.png';
import o5 from '../images/5.png';
import '../styles/item-catalog.css';


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
// * тестовый источник данных
export const items: ItemProduct[] = [
    { 
        id: 0, 
        images: [o1, o2, o3, o4, o5], 
        name: 'Люк сантехнический на магните ЛММ белый 0.8мм',
        description: 'Люк из окрашенного металла сантехнический на магнитах (ЛММ) – экономичный способ перекрыть технологические окна в стенах вспомогательных помещений, коридоров, мест общего пользования.',
        price: {
            old: 334,
            current: 301
        }
    },
    {
        id: 1,
        images: [o1, o2, o3, o4, o5],
        name: 'Люк сантехнический на магните ЛММ серый 1.0мм',
        description: 'Серый люк с улучшенной магнитной системой. ',
        price: {
            old: 40,
            current: 350
        }
    }
];



/**
 * Реализован (только) компонент предмета в каталоге
 * Сама реализация каталога не известна
 * 
 */
export default function Catalog({  }) {
    const navigate = useNavigate();
    
    

    return (
        <React.Fragment>
            {items.map((item, index)=> 
                <div 
                    key={index}
                    onClick={()=> navigate(`/catalog/item/${item.id}`)}
                >
                    { item.name }
                </div>
            )}
        </React.Fragment>
    );
}