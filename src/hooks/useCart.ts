import { useEffect, useState } from 'react'
import { useContext, useContextSelector } from 'use-context-selector'

import CartContext from '../contexts/cart/context'

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

export default function useCart() {
    const cartContext = useContext(CartContext)

    return { ...cartContext }
}
function useAddToCart(cake: Cake) {
    const addToCart = useContextSelector(CartContext, v => v.addToCart)
    const hasCakeInCart = useContextSelector(CartContext, v => v.hasCakeInCart)
    const cartItems = useContextSelector(CartContext, v => v.cartItems)
    const [hasInCart, setHasInCart] = useState(false)

    useEffect(() => setHasInCart(hasCakeInCart(cake)), [cartItems])

    return { addToCart, hasInCart }
}

export { useAddToCart }
