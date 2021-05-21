import React from 'react'
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

type BestCake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}
interface SomeFlavorsProps {
    bestCakes: BestCake[]
}
const SomeFlavors: React.FC<SomeFlavorsProps> = ({ bestCakes }) => {
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
                    {bestCakes.map(
                        ({ photo: { url }, id, name, description, price }) => (
                            <CakeCard
                                description={description}
                                name={name}
                                price={price}
                                key={id}
                                image={{ src: url, alt: name }}
                            />
                        )
                    )}
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
