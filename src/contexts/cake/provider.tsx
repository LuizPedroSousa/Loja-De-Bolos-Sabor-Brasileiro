import React, { useState } from 'react'

import CakeContext from './context'
const { Provider } = CakeContext

type Cake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

const CakeProvider: React.FC = ({ children }) => {
    const [cakes, setCakes] = useState<Cake[]>([])
    return <Provider value={{ cakes, setCakes }}>{children}</Provider>
}

export default CakeProvider
