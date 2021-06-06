import { createContext, Dispatch, SetStateAction } from 'react'

type Cake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

interface CakeContextProps {
    cakes: Cake[]
    setCakes: Dispatch<SetStateAction<Cake[]>>
}

const CakeContext = createContext({} as CakeContextProps)

export default CakeContext
