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

interface CartItem {
    cake: Cake
    amount: number
}

interface CartContextProps {
    total: number
    itemsLength: number
    hasItems: boolean
    cartItems: CartItem[]
    addToCart: (item: CartItem) => void
    toggleAddToCart: (cake: Cake) => void
    upAmount: (item: CartItem) => void
    downAmount: (item: CartItem) => void
    removeItem: (item: CartItem) => void
    hasCakeInCart: (cake: Cake) => boolean
    clearCart: () => void
}

const CartContext = createContext({} as CartContextProps)

export default CartContext
