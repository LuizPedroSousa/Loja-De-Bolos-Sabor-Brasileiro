import React from 'react'

import CartContext from './context'

const { Provider } = CartContext

const CartProvider: React.FC = ({ children }) => {
    return <Provider value={{}}>{children}</Provider>
}

export default CartProvider
