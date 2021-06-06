import { createContext } from 'react'

type Cake = {
    id: string
    name: string
    price: string
    photo: {
        url: string
    }
}

interface CartItem {
    cake: Cake
    amount: number
}

interface CartContextProps {
    total: number
    itemsLength: number
    hasItems: boolean
    cartItems: CartItem[]
    addToCard: (item: CartItem) => void
    upAmount: (item: CartItem) => void
    downAmount: (item: CartItem) => void
    removeItem: (item: CartItem) => void
    hasCakeInCart: (cake: Cake) => boolean
}

const CartContext = createContext({} as CartContextProps)

export default CartContext
