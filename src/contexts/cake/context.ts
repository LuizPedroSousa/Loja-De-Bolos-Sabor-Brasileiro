import { createContext, Dispatch, SetStateAction } from 'react'
type Photos = {
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Cake = {
    id: string
    price: string
    name: string
    description: string
    slug: string
    photos: Photos[]
    stars: Star
    isBest: boolean
}

type Category = {
    id: string
    name: string
    cakes: Cake[]
}

type Filter = {
    search: string
    category: string
}

interface CakeContextProps {
    cakes: Cake[]
    filter: Filter
    setFilter: Dispatch<SetStateAction<Filter>>
    bestCakes: Cake[]
    categories: Category[]
    formatCakes: (cakes: any) => Cake[]
}

const CakeContext = createContext({} as CakeContextProps)

export default CakeContext
