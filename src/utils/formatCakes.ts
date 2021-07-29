import { v4 as uuid } from 'uuid'

type Photo = {
    id: string
    url: string
}

type Avatar = Photo & {}

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
    photos: Photo[]
    ingredients: Ingredient[]
    ratings: CakeRating[]
    category: string
    starsAverage: Star
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
}

type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    stars: Star
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

function formatStars(stars: number): { stars: Star } {
    const starsArr = []
    if (stars) {
        for (let i = 0; i < stars; i++) {
            starsArr.push({ haStar: true, key: uuid() })
        }
    }
    if (stars < 5) {
        for (let i = starsArr.length; i < 5; i++) {
            starsArr.push({ hasStar: false, key: uuid() })
        }
    }

    return { stars: { length: stars, toMap: starsArr } }
}

function formatCake(cake: CakeFromApi): Cake {
    const ratings = cake.ratings.map(rating => {
        const { stars } = formatStars(rating.stars)
        return { ...rating, stars }
    })
    let ratingStars = 0
    ratings.forEach(rating => (ratingStars += rating.stars.length))

    let starsAverage = 0
    if (ratingStars && ratings.length) {
        starsAverage = ratingStars / ratings.length
    }

    const { stars } = formatStars(starsAverage)

    return { ...cake, starsAverage: stars, ratings }
}

function formatCakes(cakes: CakeFromApi[]): Cake[] {
    return cakes?.map(cake => {
        const cakeFormatted = formatCake(cake)
        return { ...cakeFormatted }
    })
}

export { formatCakes, formatCake }
