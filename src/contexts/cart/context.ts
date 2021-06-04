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
    cartItems: CartItem[]
    addToCard: (item: CartItem) => void
}

const CartContext = createContext({} as CartContextProps)

export default CartContext
