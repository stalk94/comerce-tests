export interface ItemProduct {
    id: number
    name: string
    description: string
    images: string[]
    price?: {
        old: number
        current: number
    }
    /** список навешанных отметок к примеру скидок, либо new отметки */
    badge?: [

    ]
    property?: {
        width: number
        height: number
        count: number
    }
}


export interface ItemPromoBaner {
    title: string
    buttonText: string
    description: string
    images: string[]
}


export interface NavLinkItem {
    id: string
    /** сформируется сам исходя из вложенности на основе `id` */
    path?: string
    label?: string
    icon?: React.ReactNode
    /** 🔥 кастомный параметр подсветит элемент как выбранный */
    select?: any
    comand?: (item: any) => void
    divider?: React.ReactNode | boolean
    children?: NavLinkItem[]
}