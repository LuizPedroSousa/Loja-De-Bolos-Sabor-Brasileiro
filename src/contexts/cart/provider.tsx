/* eslint-disable react/display-name */
import React, { useEffect, useMemo, useState } from 'react'
import { useToast } from '@chakra-ui/react'

import CartContext from './context'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import usePersistedState from '../../hooks/usePersistedState'
import useCake from '../../hooks/useCake'
import { v4 as uuid } from 'uuid'
const { Provider } = CartContext

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

const CartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = usePersistedState<CartItem[]>([], 'cart')
    const toast = useToast()
    const { cakes } = useCake()

    const [total, setTotal] = useState(0)
    useEffect(() => calcTotal(), [cartItems])

    const { hasItems, itemsLength } = useMemo(() => {
        const itemsLength = cartItems.length
        const hasItems = !!itemsLength
        return { hasItems, itemsLength }
    }, [cartItems])

    function addToCard(item: CartItem) {
        const toastId = uuid()
        function close() {
            toast.close(toastId)
        }

        if (!toast.isActive(toastId)) {
            toast({
                position: 'top-left',
                duration: 5000,
                isClosable: true,
                id: toastId,
                render: () => (
                    <div className="bg-orange-500 flex flex-col justify-center flex-start w-full p-4 text-white text-md font-sans font-medium rounded-xl shadow-2xl">
                        <header className="text-white w-full flex flex-col items-center justify-start">
                            <button
                                className="w-6 h-6 mb-2 p-1 flex text-white items-center  rounded-md ml-auto justify-center bg-orange-100"
                                type="button"
                                onClick={close}
                            >
                                <AiOutlineClose />
                            </button>

                            <div className="flex items-center w-full justify-start">
                                <span className="mr-2 flex items-center justify-center  bg-green-400 w-4 h-4 p-1 rounded-full">
                                    <FaCheck />
                                </span>
                                Bolo adicionado ao carrinho!!
                            </div>
                        </header>
                        <footer className="flex flex-col items-center w-full justify-start">
                            <div className="flex items-center w-full justify-start">
                                <div className="w-16 h-16 mt-4 overflow-hidden mr-4 rounded-xl">
                                    <Image
                                        objectFit="cover"
                                        src={item.cake.photo.url}
                                        alt={item.cake.name}
                                        width={500}
                                        height={600}
                                    />
                                </div>
                                <p>
                                    {item.cake.name}
                                    <br />
                                    <span>R$ {item.cake.price}</span>
                                </p>
                            </div>

                            <Link href="/meu-carrinho">
                                <a className="hover:bg-orange-700 text-sm focus:ring-2 transition-all bg-orange-100 flex items-center justify-center w-full px-2 ml-auto mt-4 rounded-md py-4">
                                    Ver meu carrinho
                                </a>
                            </Link>
                        </footer>
                    </div>
                )
            })
        }
        setCartItems([...cartItems, item])
    }

    function calcTotal() {
        let value = 0
        cartItems.forEach(({ cake: { price } }) => (value += Number(price)))
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
                addToCard
            }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider
