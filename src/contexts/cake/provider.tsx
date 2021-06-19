import React, { useMemo } from 'react'
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

const CakeProvider: React.FC = ({ children }) => {
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

    const { cakes } = useMemo(() => {
        const cakes: Cake[] = formatCakes(cakesData)

        return { cakes }
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
        <Provider value={{ cakes, bestCakes, categories }}>{children}</Provider>
    )
}

export default CakeProvider
