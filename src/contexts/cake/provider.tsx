import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { getCakeCategories, getCakes } from '../../hooks/useCake'
import formatCakes from '../../utils/formatCakes'

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
    name: string
    description: string
    slug: string
    photos: Photos[]
    stars: Star
}

type Category = {
    id: string
    name: string
    slug: string
    cakes: Cake[]
}

const CakeProvider: React.FC = ({ children }) => {
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

    const { data: cakesData } = useQuery('cakes', async () => await getCakes())

    const { data: categoriesData } = useQuery('cakeCategories', () =>
        getCakeCategories()
    )

    useMemo(() => {
        setCakes(formatCakes(cakesData))
    }, [cakesData])

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
