import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { getCakes, useCake } from '../../../hooks/useCake'
import Cake from './Cake'

import { Section, Title, Cakes } from './styles'

const ExploreOurFlavors: React.FC = () => {
    const { data: cakesData } = useQuery(
        ['cakes', 6],
        async () => await getCakes({ params: { _limit: 6 } })
    )
    const { formatCakes } = useCake()
    const { cakes } = useMemo(() => {
        const cakes = formatCakes(cakesData)
        return { cakes }
    }, [cakesData])

    return (
        <Section>
            <Title>
                <strong>
                    Explore alguns dos
                    <br />
                    nossos sabores
                </strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing cursus auctor eget sed phasellus senectus.
                    Ut tellus donec vestibulum tristique leo bibendum in a,
                    tincidunt. Volutpat metus id amet.
                </p>
            </Title>
            <Cakes>
                {cakes?.map((cake, i) => (
                    <Cake key={cake.id + i} cake={cake} />
                ))}
            </Cakes>
        </Section>
    )
}

export default ExploreOurFlavors
