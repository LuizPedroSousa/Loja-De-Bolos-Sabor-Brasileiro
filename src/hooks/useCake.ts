import { useQuery } from 'react-query'
import { AxiosRequestConfig } from 'axios'
import { useContext, useMemo } from 'react'
import CakeContext from '../contexts/cake/context'
import api from '../services/api'
import formatCakes from '../utils/formatCakes'
type Photo = {
    id: string
    url: string
}

type Cake = {
    id: string
    price: string
    name: string
    slug: string
    description: string
    photos: Photo[]
    stars: number
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: Cake[]
}

type CakeQueryFilters = {
    price: string
    search: string
    category: string
}

async function getCakes(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes', opts)

    return data.cakes as Cake[]
}

async function getCake({ slug }: { slug: string }) {
    const { data } = await api('/cakes/show/' + slug)

    return data.cake as Cake
}

async function getCakeCategories(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes/categories', opts)
    return data.categories as Category[]
}

function getCakesQueryWithFilter({
    search,
    category,
    price
}: CakeQueryFilters) {
    const {
        data: cakesData,
        isLoading,
        isError,
        isFetching
    } = useQuery(
        [
            'cakes',
            {
                search: search || '',
                category: category || '',
                price: price || ''
            }
        ],
        () => getCakes({ params: { name: search, category, price } })
    )

    const { cakes } = useMemo(() => {
        const cakes = formatCakes(cakesData)
        return { cakes }
    }, [cakesData])

    return { cakes, isLoading, isFetching, isError }
}

function useCake() {
    const cakeContext = useContext(CakeContext)

    return { ...cakeContext }
}

export {
    useCake,
    getCakes,
    getCake,
    getCakeCategories,
    getCakesQueryWithFilter
}
