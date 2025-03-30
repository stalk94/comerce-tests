import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { hookstate, useHookstate } from '@hookstate/core';
import TopSegment from './top';
import CenterSegment from './center';
import BottomSegment from './bottom';
import { ItemProduct } from '../index';

export const itemState = hookstate({
    table: {
        height: 0, 
        width: 0, 
        sum: 0,
        count: 0
    }
});


/** рендер страницы товара */
export default function({ item }: { item: ItemProduct }) {
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