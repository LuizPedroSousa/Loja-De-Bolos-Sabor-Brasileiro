import usePersistedState from 'hooks/usePersistedState'
import React, { useCallback } from 'react'

import { FavoriteContext } from './context'
const { Provider } = FavoriteContext

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

const FavoriteProvider: React.FC = ({ children }) => {
    const [favoriteCakes, setFavoriteCakes] = usePersistedState<Cake[]>(
        [],
        'favoriteCakes'
    )
    function hasCakeInFavorites(cake: Cake) {
        let hasIn = false
        favoriteCakes.forEach(
            favoriteCake => cake.id === favoriteCake.id && (hasIn = true)
        )
        return hasIn
    }
    const toggleFavoriteCake = (cake: Cake) => {
        if (hasCakeInFavorites(cake)) {
            return removeToFavorites(cake)
        }
        addToFavoriteCakes(cake)
    }

    const removeToFavorites = useCallback((cake: Cake) => {
        const oldItems = favoriteCakes
        favoriteCakes.forEach(
            (favoriteCake, i) =>
                cake.id === favoriteCake.id && oldItems.splice(i, 1)
        )
        setFavoriteCakes([...oldItems])
    }, [])

    function addToFavoriteCakes(cake: Cake) {
        setFavoriteCakes([...favoriteCakes, cake])
    }
    return (
        <Provider
            value={{
                toggleFavoriteCake,
                hasCakeInFavorites,
                favoriteCakes,
                addToFavoriteCakes,
                removeToFavorites
            }}
        >
            {children}
        </Provider>
    )
}

export { FavoriteProvider }
