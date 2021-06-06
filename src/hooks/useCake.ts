import { useContext } from 'react'
import CakeContext from '../contexts/cake/context'

export default function useCake() {
    const cakeContext = useContext(CakeContext)
    return { ...cakeContext }
}
