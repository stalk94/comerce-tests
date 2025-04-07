import React from "react";
import { ItemProduct } from '../global.d.ts';
import { hookstate, useHookstate } from '@hookstate/core';
import TopSegment from './top';
import CenterSegment from './center';
import BottomSegment from './bottom';


export const itemsTest: ItemProduct[] = [
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
export const itemState = hookstate({
    table: {
        height: 0, 
        width: 0, 
        sum: 0,
        count: 0
    }
});



export default function({ item }) {
    const state = useHookstate(itemState);

    const handlerTableChange =(row: number, col: number, sum: number)=> {
        state.table.set((prev)=> {
            prev.width = col;
            prev.height = row;
            prev.sum = sum;

            return prev;
        });
    }

    
    return(
        <React.Fragment>
            <TopSegment
                item={item}
            />
            <CenterSegment
                item={item}
            />
            <BottomSegment
                item={item}
                onTableChange={handlerTableChange}
            />
        </React.Fragment>
    );
}