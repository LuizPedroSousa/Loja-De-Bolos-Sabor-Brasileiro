import { useQuery } from 'react-query'
import { AxiosRequestConfig } from 'axios'
import { useMemo } from 'react'
import api from 'services/api'
import { formatCakes, formatCake } from 'utils/formatCakes'
import { useContextSelector } from 'use-context-selector'
import CakeContext from 'contexts/cake/context'
type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type Avatar = Photo & {}
type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}

type CakeRatingFromApi = {
    id: string
    stars: number
    title: string
    description: string
    user: User
}
type CakeFromApi = {
    id: string
    price: string
    slug: string
    name: string
    ratings: CakeRatingFromApi[]
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    category: string
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: CakeFromApi[]
}

type CakeQueryFilters = {
    price: string
    search: string
    category: string
}

async function getCakes(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes', opts)

    return data.cakes as CakeFromApi[]
}

async function getCake({ slug }: { slug: string }) {
    const { data } = await api('/cakes/show/' + slug)

    return data.cake as CakeFromApi
}

async function getCakeCategories(opts?: AxiosRequestConfig) {
    const { data } = await api('/cakes/categories', opts)
    return data.categories as Category[]
}

function getCakeCategoriesQuery() {
    const {
        data: categoriesData,
        isLoading,
        isFetching,
        isError
    } = useQuery(['cakeCategories'], () => getCakeCategories())

    const { categories } = useMemo(() => {
        const categories = categoriesData.map(category => {
            return { ...category, cakes: formatCakes(category.cakes) }
        })
        return { categories }
    }, [categoriesData])

    return { categories, isLoading, isFetching, isError }
}

function getCakeQuery({ slug }: { slug: string }) {
    const {
        data: cakeData,
        isLoading,
        isFetching,
        isError
    } = useQuery(['cake', slug], () => getCake({ slug: slug as string }))

    const { cake } = useMemo(() => {
        const cake = formatCake(cakeData)
        return { cake }
    }, [cakeData])

    return { cake, isLoading, isFetching, isError }
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

function useCakes() {
    const cakes = useContextSelector(CakeContext, v => v.cakes)
    const setCakes = useContextSelector(CakeContext, v => v.setCakes)
    return { cakes, setCakes }
}

function useCakeCategories() {
    const categories = useContextSelector(CakeContext, v => v.categories)
    const setCategories = useContextSelector(CakeContext, v => v.setCategories)
    return { categories, setCategories }
}

export {
    getCakes,
    getCake,
    getCakeCategories,
    getCakesQueryWithFilter,
    getCakeQuery,
    getCakeCategoriesQuery,
    useCakes,
    useCakeCategories
}
