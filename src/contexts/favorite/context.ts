import { createContext } from 'use-context-selector'

type Photos = {
    url: string
}

type Cake = {
    id: string
    price: string
    name: string
    photos: Photos[]
    description: string
    slug: string
}

export interface FavoriteContextProps {
    favoriteCakes: Cake[]
    addToFavoriteCakes: (cake: Cake) => void
    toggleFavoriteCake: (cake: Cake) => void
    removeToFavorites: (cake: Cake) => void
    hasCakeInFavorites: (cake: Cake) => boolean
}

const FavoriteContext = createContext({} as FavoriteContextProps)

export { FavoriteContext }
