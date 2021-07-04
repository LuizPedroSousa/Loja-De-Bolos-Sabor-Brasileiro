import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { getCakeCategories, getCakes } from '../../hooks/useCake'

import { v4 as uuid } from 'uuid'
import CakeContext from './context'

const { Provider } = CakeContext

type Photos = {
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: Star
    isBest: boolean
}

type Category = {
    id: string
    name: string
    cakes: Cake[]
}

type Filter = {
    search: string
    category: string
}

const CakeProvider: React.FC = ({ children }) => {
    const [filter, setFilter] = useState<Filter>({} as Filter)
    const [cakes, setCakes] = useState<Cake[]>([])
    const { data: bestCakesData } = useQuery(
        ['bestCakes', 2],
        async () =>
            await getCakes({
                params: {
                    isBest: true,
                    _limit: 2
                }
            })
    )

    function formatCakes(cakes: typeof cakesData): Cake[] {
        return cakes?.map(cake => {
            const stars = []
            for (let i = 0; i < cake.stars; i++) {
                stars.push({ hasStar: true, key: uuid() })
            }
            if (cake.stars < 5) {
                for (let i = stars.length; i < 5; i++) {
                    stars.push({ hasStar: false, key: uuid() })
                }
            }
            return { ...cake, stars: { length: cake.stars, toMap: stars } }
        })
    }

    const { data: cakesData } = useQuery('cakes', async () => await getCakes())

    const { data: categoriesData } = useQuery('cakeCategories', () =>
        getCakeCategories()
    )

    useMemo(() => {
        setCakes(formatCakes(cakesData))
    }, [cakesData])

    useMemo(() => {
        if (filter.search) {
            ;(async () => {
                const data = await getCakes({
                    params: { name: filter.search }
                })
                setCakes(formatCakes(data as any))
            })()
        }
    }, [filter.search])

    const { bestCakes } = useMemo(() => {
        const bestCakes: Cake[] = formatCakes(bestCakesData)

        return { bestCakes }
    }, [bestCakesData])

    const { categories } = useMemo(() => {
        const categories: Category[] = categoriesData?.map(category => {
            return { ...category, cakes: formatCakes(category.cakes) }
        })

        return { categories }
    }, [categoriesData])

    return (
        <Provider
            value={{
                filter,
                setFilter,
                cakes,
                bestCakes,
                categories,
                formatCakes
            }}
        >
            {children}
        </Provider>
    )
}

export default CakeProvider
