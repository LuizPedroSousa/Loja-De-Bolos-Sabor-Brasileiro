/* eslint-disable react/display-name */
import React, { useMemo, useState } from 'react'

import CartContext from './context'

import usePersistedState from '../../hooks/usePersistedState'
import { useCakes } from '../../hooks/useCake'
import AddCakeToast from '../../components/Toasts/AddCakeToast'
import { useToast } from '@chakra-ui/react'
const { Provider } = CartContext

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

const CartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = usePersistedState<CartItem[]>([], 'cart')
    const { cakes } = useCakes()

    const [total, setTotal] = useState(0)
    const toast = useToast()

    useMemo(() => calcTotal(), [cartItems])

    const { hasItems, itemsLength } = useMemo(() => {
        const itemsLength = cartItems.length
        const hasItems = !!itemsLength
        return { hasItems, itemsLength }
    }, [cartItems])

    function addToCart(item: CartItem) {
        AddCakeToast({ cake: item.cake, toast })
        setCartItems([...cartItems, item])
    }

    function calcTotal() {
        let value = 0
        cartItems.forEach(item => (value += Number(item.cake.price)))
        setTotal(value)
    }

    function removeItem(item: CartItem) {
        const oldItems = cartItems
        cartItems.forEach(
            (cartItem, i) =>
                item.cake.id === cartItem.cake.id && oldItems.splice(i, 1)
        )
        setCartItems([...oldItems])
    }

    function getCakePrice(item: CartItem) {
        let cakePrice: number
        cakes.forEach(cake => {
            if (item.cake.id === cake.id) {
                cakePrice = Number(cake.price)
            }
        })

        return cakePrice
    }

    function upAmount(item: CartItem) {
        const oldItems = cartItems

        const newItems = oldItems.map(cartItem => {
            if (item === cartItem) {
                const newAmount = item.amount + 1
                const newPrice = String(getCakePrice(cartItem) * newAmount)
                return {
                    cake: { ...item.cake, price: newPrice },
                    amount: newAmount
                }
            }

            return cartItem
        })
        setCartItems([...newItems])
    }

    function downAmount(item: CartItem) {
        const oldItems = cartItems

        const newItems = oldItems.map(cartItem => {
            if (item === cartItem) {
                const newAmount = item.amount - 1

                const newPrice = String(
                    newAmount === 1
                        ? getCakePrice(cartItem)
                        : Number(cartItem.cake.price) - getCakePrice(cartItem)
                )
                return {
                    cake: { ...item.cake, price: newPrice },
                    amount: newAmount
                }
            }

            return cartItem
        })
        setCartItems([...newItems])
    }

    function hasCakeInCart(cake: Cake) {
        let hasIn = false
        cartItems.forEach(
            cartItem => cake.id === cartItem.cake.id && (hasIn = true)
        )
        return hasIn
    }

    function toggleAddToCart(cake: Cake) {
        if (hasCakeInCart(cake)) {
            return removeItem({ cake, amount: 1 })
        }
        addToCart({ cake, amount: 1 })
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <Provider
            value={{
                total,
                itemsLength,
                cartItems,
                hasItems,
                removeItem,
                upAmount,
                downAmount,
                hasCakeInCart,
                toggleAddToCart,
                addToCart,
                clearCart
            }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider
