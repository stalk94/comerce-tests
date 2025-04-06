'use client'
import React from "react";
import { ItemPromoBaner, ItemProduct, NavLinkItem } from './global.d.ts';
import PromoBaner from './home/PromoBaner';
import GridCards from './home/GridCards';
import Proposition from './components/Proposition';
import Catalog from './catalog';
import { CompanyBlock } from './components/Bloks';


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



/** главная страница */
export default function Home({ data }: { data: any }) {
	const handlerClickCompanyDetail =()=> {
        console.log('ClickCompanyDetail');
    }


	return (
		<React.Fragment>
            {/* банер */}
			<PromoBaner 
				items={testData} 
			/>
            {/* выгодные предложения */}
            <Proposition />
            {/* карточка компании */}
            <CompanyBlock 
                onClick={handlerClickCompanyDetail}
            />
            {/* почему выбирают нас */}
            <GridCards 
                sx={{ 
                    mt: 5 
                }} 
            />

            {/* scroller style */}
            <style>
                {`
                    ::-webkit-scrollbar-track {
                        background-color:#2a2a2b85
                    }
                    ::-webkit-scrollbar-thumb {
                        -webkit-border-radius: 3px;
                        border-radius: 3px;
                        background-color:#dedfdf;
                        border: #333 1px solid;
                    }
                    ::-webkit-scrollbar-thumb {
                        -webkit-border-radius: 10px;
                        border-radius: 10px;
                        background-color:#adadad;
                    }
                    ::-webkit-scrollbar {
                        width: 10px;
                    }
                `}
            </style>
		</React.Fragment>
	);
}
