import { FavoriteContext } from 'contexts/favorite/context'
import { useContextSelector } from 'use-context-selector'

function useHasInFavorite() {
    const hasCakeInFavorites = useContextSelector(
        FavoriteContext,
        v => v.hasCakeInFavorites
    )
    return { hasCakeInFavorites }
}

function useFavorites() {
    const favoriteCakes = useContextSelector(
        FavoriteContext,
        v => v.favoriteCakes
    )
    return { favoriteCakes }
}

function useToggleFavoriteCake() {
    const toggleFavoriteCake = useContextSelector(
        FavoriteContext,
        v => v.toggleFavoriteCake
    )
    return { toggleFavoriteCake }
}

export { useHasInFavorite, useToggleFavoriteCake, useFavorites }
