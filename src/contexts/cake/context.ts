import { Dispatch, SetStateAction } from 'react'
import { createContext } from 'use-context-selector'

type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type Avatar = Photo & {}
type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}
type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    stars: number
    insertedAt: string
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    ratings: CakeRating[]
    category: string
    starsAverage: number
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: Cake[]
}

interface CakeContextProps {
    cakes: Cake[]
    categories: Category[]
    setCakes: Dispatch<SetStateAction<Cake[]>>
    setCategories: Dispatch<SetStateAction<Category[]>>
}

const CakeContext = createContext({} as CakeContextProps)

export default CakeContext
