'use client'
import React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { ItemPromoBaner } from './global.d.ts';
import PromoBaner from './home/PromoBaner';
import GridCards from './home/GridCards';
import Proposition from './components/Proposition';
import CompanyBlock from './home/CompanyBlock';
import { useMediaQuery, useTheme } from "@mui/material";
window.test = false

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

console.log(window.test)

/** главная страница */
export default function Home() {
    const theme = useTheme();
    const router = useRouter();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const handlerClickCompanyDetail =()=> {
        console.log('ClickCompanyDetail');
    }
    //! временный телепорт к предмету
    React.useEffect(()=> {
        if(!window.test) {
            window.test = true;
            router.push('/catalog/luki/1');
        }
    }, []);


	return (
		<React.Fragment>
            {/* банер */}
			<PromoBaner 
				items={testData} 
			/>
            {/* выгодные предложения */}
            <Proposition 
                sx={{
                    mt: 5
                }}
                countRow={isMobile ? 2 : 4}
            />
            {/* карточка компании */}
            <CompanyBlock 
                sx={{
                    mt: 7,
                }}
                onClick={handlerClickCompanyDetail}
            />
            {/* почему выбирают нас */}
            <GridCards 
                sx={{ 
                    mt: 7 
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
