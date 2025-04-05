'use client'
import React from "react";
import { ItemPromoBaner, ItemProduct, NavLinkItem } from './global.d.ts';
import PromoBaner from './components/PromoBaner';
import Proposition from './components/Proposition';
import Catalog from './catalog';



/*
	export async function getServerSideProps({ req }) {
		return {
			props: {
				data: db
			}
		}
	}
*/
const testData: ItemPromoBaner[] = [
    {
        title: 'ЧЕРДАЧНАЯ ЛЕСТНИЦА ECON',
        buttonText: "ПОДРОБНЕЕ",
        description: 'Лучшее решение для вашего дома!',
        images: [
			"https://lesenka-market.ru/upload/iblock/ca2/5rmqmnanoek18isp3oyi1u5ixkkgmrze.jpeg",
            "https://i.pinimg.com/736x/c7/28/d8/c728d805149bad291e3cbc307d544e38.jpg",
            "https://lesenka-market.ru/upload/iblock/ca2/5rmqmnanoek18isp3oyi1u5ixkkgmrze.jpeg",
            'https://titanremont.ru/assets/img/fornews/konsolnaya-lestnica.jpg',
            'https://lestnicy-minsk.by/upload/medialibrary/0e8/0e8bcb456f274f4457870a058929f340.jpg',
        ]
    },
    {
        title: 'СТИЛЬНЫЙ ДИЗАЙН',
        buttonText: "ПОДРОБНЕЕ",
        description: 'Идеально впишется в интерьер!',
        images: [
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
			"https://lesenka-market.ru/upload/iblock/ca2/5rmqmnanoek18isp3oyi1u5ixkkgmrze.jpeg",
            'https://titanremont.ru/assets/img/fornews/konsolnaya-lestnica.jpg',
            'https://titanremont.ru/assets/img/fornews/konsolnaya-lestnica.jpg',
            'https://lestnicy-minsk.by/upload/medialibrary/0e8/0e8bcb456f274f4457870a058929f340.jpg',
            "https://lesenka-market.ru/upload/iblock/ca2/5rmqmnanoek18isp3oyi1u5ixkkgmrze.jpeg",
        ]
    },
    {},{}
];
const testTovars: ItemProduct[] = [
    {
        id: 1,
        name: 'Чердачная лестница Econ ЧЛ-11 H=280 см, 60 x 87.5 см',
        description: '',
        images: [
            'https://kordodesign.com/wp-content/uploads/2022/05/MNOLM-escalier-bois-droit-pas-cher-KORDO-768x768.jpg',
        ],
        price: {
            old: 10000,
            current: 8888
        }
    }
];


// главная страница
export default function Home({ data }: { data: any }) {
	
	return (
		<React.Fragment>
			<PromoBaner 
				items={testData} 
			/>
            <Proposition 

            />
		</React.Fragment>
	);
}
