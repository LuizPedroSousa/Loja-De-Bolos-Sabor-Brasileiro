/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/react'

import CartContext from './context'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

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
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const toast = useToast()
    const [total, setTotal] = useState(0)
    useEffect(() => calcTotal(), [cartItems])

    function calcTotal() {
        let value = 0
        cartItems.forEach(({ cake: { price } }) => (value += Number(price)))
        setTotal(value)
    }

    const itemsLength = cartItems.length

    function addToCard(item: CartItem) {
        toast({
            position: 'top-right',
            isClosable: true,
            duration: 99999,
            render: () => (
                <div className="bg-orange-500 flex flex-col justify-center flex-start w-full p-4 text-white text-md font-sans font-medium rounded-xl shadow-2xl">
                    <header className="text-white mr-4 flex items-center justify-center">
                        <span className="mr-4 bg-green-400 w-4 h-4 p-1 rounded-full">
                            <FaCheck />
                        </span>
                        Bolo adicionado ao carrinho!!
                    </header>
                    <footer className="flex items-center justify-center">
                        <div className="w-16 h-16 mt-4 overflow-hidden mr-2 rounded-xl">
                            <Image
                                objectFit="cover"
                                src={item.cake.photo.url}
                                alt={item.cake.name}
                                width={500}
                                height={600}
                            />
                        </div>
                        <p>{item.cake.name}</p>
                    </footer>
                </div>
            )
        })
        setCartItems([...cartItems, item])
    }

    return (
        <Provider value={{ total, itemsLength, cartItems, addToCard }}>
            {children}
        </Provider>
    )
}

export default CartProvider
