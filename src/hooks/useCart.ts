import { useContext } from 'react'
import CartContext from '../contexts/cart/context'

export default function useCart() {
    const cartContext = useContext(CartContext)

    return { ...cartContext }
}
