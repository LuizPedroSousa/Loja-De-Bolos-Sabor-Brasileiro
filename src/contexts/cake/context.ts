import { createContext } from 'react'

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
    category: string
    mostPrice: string
}

interface CakeContextProps {
    cakes: Cake[]
    // filter: Filter

    bestCakes: Cake[]
    categories: Category[]
}

const CakeContext = createContext({} as CakeContextProps)

export default CakeContext
