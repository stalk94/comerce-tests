import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TopSegment from './top';
import CenterSegment from './center';
import BottomSegment from './bottom';
import { ItemProduct } from '../index';



export default function({ item }: { item: ItemProduct }) {
 

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
            />
        </React.Fragment>
    );
}