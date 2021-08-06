import { formatDistance, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
type Photo = {
    id: string
    url: string
}

type Avatar = Photo & {}

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
    photos: Photo[]
    ingredients: Ingredient[]
    ratings: CakeRating[]
    category: string
    starsAverage: number
}

type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}

type CakeRatingFromApi = {
    id: string
    stars: number
    title: string
    description: string
    user: User
    // eslint-disable-next-line camelcase
    inserted_at: string
}

type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    insertedAt: string
    stars: number
}

type CakeFromApi = {
    id: string
    price: string
    slug: string
    name: string
    ratings: CakeRatingFromApi[]
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    category: string
}

function formatCake(cake: CakeFromApi): Cake {
    let ratingStars = 0
    const ratings = cake.ratings.map(rating => {
        ratingStars += rating.stars
        return {
            ...rating,
            insertedAt: formatDistance(
                parseISO(rating.inserted_at),
                new Date(),
                {
                    locale: ptBR
                }
            )
        }
    })

    let starsAverage = 0
    if (ratingStars && cake.ratings.length) {
        starsAverage = ratingStars / cake.ratings.length
    }

    return { ...cake, starsAverage, ratings }
}

function formatCakes(cakes: CakeFromApi[]): Cake[] {
    return cakes?.map(cake => {
        const cakeFormatted = formatCake(cake)
        return { ...cakeFormatted }
    })
}

export { formatCakes, formatCake }
