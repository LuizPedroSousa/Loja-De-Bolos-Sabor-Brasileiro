import React, { useState } from 'react'

import CakeContext from './context'

const { Provider } = CakeContext
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
    stars: Star
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
    starsAverage: Star
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: Cake[]
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

const CakeProvider: React.FC = ({ children }) => {
    const [cakes, setCakes] = useState<Cake[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    return (
        <Provider
            value={{
                cakes,
                categories,
                setCakes,
                setCategories
            }}
        >
            {children}
        </Provider>
    )
}

export default CakeProvider
