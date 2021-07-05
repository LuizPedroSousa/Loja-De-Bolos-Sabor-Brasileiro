import { v4 as uuid } from 'uuid'

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
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: Star
}

type CakeFromApi = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: number
}
export default function formatCakes(cakes: CakeFromApi[]): Cake[] {
    return cakes?.map(cake => {
        const stars = []
        for (let i = 0; i < cake.stars; i++) {
            stars.push({ hasStar: true, key: uuid() })
        }
        if (cake.stars < 5) {
            for (let i = stars.length; i < 5; i++) {
                stars.push({ hasStar: false, key: uuid() })
            }
        }
        return { ...cake, stars: { length: cake.stars, toMap: stars } }
    })
}
