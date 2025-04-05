import React from "react";
import { ItemProduct } from '../global.d.ts';
import o1 from '../images/1.png';
import o2 from '../images/2.png';
import o3 from '../images/3.png';
import o4 from '../images/4.png';
import o5 from '../images/5.png';



// тестовый источник данных
export const itemsTest: ItemProduct[] = [
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
export default function Catalog({ items, useNavigate }) {

    return (
        <React.Fragment>
            {( items ?? itemsTest).map((item, index)=> 
                <div 
                    style={{cursor: 'pointer'}}
                    key={index}
                    onClick={()=> useNavigate(`/catalog/item/${item.id}`)}
                >
                    { item.name }
                </div>
            )}
        </React.Fragment>
    );
}