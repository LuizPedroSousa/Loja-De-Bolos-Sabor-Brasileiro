import { AxiosRequestConfig } from 'axios'
import { useContext } from 'react'
import CakeContext from '../contexts/cake/context'
import api from '../services/api'
type Photos = {
    url: string
}

type Cake = {
    id: string
    price: string
    name: string
    slug: string
    description: string
    photos: Photos[]
    stars: number
    isBest: true
}

type Category = {
    id: string
    name: string
    cakes: Cake[]
}

async function getCakes(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes', opts)

    return data.cakes as Cake[]
}

async function getCakeCategories(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes/categories', opts)
    return data.categories as Category[]
}

function useCake() {
    const cakeContext = useContext(CakeContext)

    return { ...cakeContext }
}

export { useCake, getCakes, getCakeCategories }
