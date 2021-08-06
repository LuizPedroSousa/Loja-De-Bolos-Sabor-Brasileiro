import React, { useMemo } from 'react'
import CakeCard from './CakeCard'

import NextLink from 'next/link'

import SeeMoreIcon from '../../../../public/images/see-more.svg'

import {
    Section,
    TitleContainer,
    Title,
    Description,
    CakesContainer,
    Cakes,
    BackgroundTop,
    BackgroundBottom,
    SeeMore
} from './styles'
import { formatCakes } from 'utils/formatCakes'
import { getCakes } from 'hooks/useCake'
import { useQuery } from 'react-query'

const SomeFlavors: React.FC = () => {
    const { data: cakesData } = useQuery(['bestCakes', 2], () =>
        getCakes({ params: { stars: 4, _limit: 2 } })
    )
    const { bestCakes } = useMemo(() => {
        const bestCakes = formatCakes(cakesData)
        return { bestCakes }
    }, [])
    return (
        <Section>
            <TitleContainer>
                <Title>
                    Alguns dos nossos
                    <br />
                    melhores sabores
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing cursus auctor eget sed phasellus senectus.
                    Ut tellus donec vestibulum tristique leo bibendum in a,
                    tincidunt. Volutpat metus id amet, nam hac magna accumsan.
                    Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Est, adipiscing
                    cursus auctor eget sed.
                </Description>
            </TitleContainer>
            <CakesContainer>
                <Cakes>
                    <BackgroundTop />
                    {bestCakes?.map(cake => (
                        <CakeCard cake={cake} key={cake.id} />
                    ))}
                    <BackgroundBottom />
                </Cakes>
                <NextLink href="/bolos/melhores-sabores">
                    <SeeMore>
                        <span>
                            <SeeMoreIcon />
                        </span>
                        Ver mais
                    </SeeMore>
                </NextLink>
            </CakesContainer>
        </Section>
    )
}

export default SomeFlavors
