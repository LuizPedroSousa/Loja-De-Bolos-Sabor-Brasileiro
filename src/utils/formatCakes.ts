import { v4 as uuid } from 'uuid'

type Photos = {
    id: string
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Ingredient = {
    id: string
    name: string
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: Star
    ingredients: Ingredient[]
    category: string
}

type CakeFromApi = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: number
    ingredients: Ingredient[]
    category: string
}

function formatStars(cake: CakeFromApi): { stars: Star } {
    const stars = []
    for (let i = 0; i < cake.stars; i++) {
        stars.push({ hasStar: true, key: uuid() })
    }
    if (cake.stars < 5) {
        for (let i = stars.length; i < 5; i++) {
            stars.push({ hasStar: false, key: uuid() })
        }
    }

    return { stars: { length: cake.stars, toMap: stars } }
}

function formatCakes(cakes: CakeFromApi[]): Cake[] {
    return cakes?.map(cake => {
        const { stars } = formatStars(cake)
        return { ...cake, stars }
    })
}

function formatCake(cake: CakeFromApi): Cake {
    const { stars } = formatStars(cake)
    return { ...cake, stars }
}

export { formatCakes, formatCake }
