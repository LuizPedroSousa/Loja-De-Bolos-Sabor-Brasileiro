import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Section, Title, Dots, Cake } from './styles'

const Map = dynamic(() => import('./Map'), { ssr: true })

const SeeDelivery: React.FC = () => {
    return (
        <Section>
            <Title>
                <strong>
                    Veja a rota
                    <br />
                    mais proxima
                </strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing cursus auctor eget sed phasellus senectus.
                </p>
            </Title>
            <Map />
            <Dots></Dots>
            <Cake>
                <Image
                    objectFit="cover"
                    src="/images/icon-lg.png"
                    alt="Sabor brasileiro"
                    width={693}
                    height={468}
                />
            </Cake>
        </Section>
    )
}

export default SeeDelivery
