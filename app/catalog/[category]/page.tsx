"use client"
import React from "react";
import { useParams } from 'next/navigation';


type Catalog = {
    id: string
    image: string 
    title: string
}


// страница с карточками товаров и фильтрами
export default function() {
    const [meta, setMeta] = React.useState<Catalog>();
    const { category } = useParams();
    

    React.useEffect(()=> {
        fetch('/api/category')
            .then((response) => response.json())
            .then((data) => {
                const find = data.find(el => el.id === category);
                setMeta(find);
            })
            .catch((error) => {
                console.error('error server: ', error);
            });
    }, []);
    

    return(
        <React.Fragment>

        </React.Fragment>
    );
}