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
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: Cake[]
}

interface CakeContextProps {
    cakes: Cake[]
    bestCakes: Cake[]
    categories: Category[]
    formatCakes: (cakes: any) => Cake[]
}

const CakeContext = createContext({} as CakeContextProps)

export default CakeContext
