import React from 'react'
import Cake from './Cake'

import { Section, Title, Cakes } from './styles'

type CakeType = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

interface ExploreOurFlavorsProps {
    cakes: CakeType[]
}

const ExploreOurFlavors: React.FC<ExploreOurFlavorsProps> = ({ cakes }) => {
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
                {cakes.map(
                    ({ id, description, name, photo: { url }, price }) => (
                        <Cake
                            key={id}
                            description={description}
                            name={name}
                            image={{ src: url, alt: name }}
                            price={price}
                        />
                    )
                )}
            </Cakes>
        </Section>
    )
}

export default ExploreOurFlavors
