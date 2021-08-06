import React from 'react'
import { useCakes } from '../../../hooks/useCake'
import Cake from './Cake'

import { Section, Title, Cakes } from './styles'

const ExploreOurFlavors: React.FC = () => {
    const { cakes } = useCakes()

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
