import Image from 'next/image'
import React from 'react'
import ConfectionerCard from './ConfectionerCard'

import { Section, Title, Confectioners, Cake, Coffee } from './styles'

type BestConfectioner = {
    id: string
    name: string
    photo: {
        url: string
    }
}

interface BestConfectionersProps {
    bestConfectioners: BestConfectioner[]
}

const BestConfectioners: React.FC<BestConfectionersProps> = ({
    bestConfectioners
}) => {
    return (
        <Section>
            <Title>
                Nossos melhores
                <br />
                confeiteiros
            </Title>
            <Cake>
                <Image
                    width={1116}
                    height={894}
                    objectFit="cover"
                    src="/images/homemade-cake.png"
                    alt="Bolo caseiro"
                />
            </Cake>
            <Confectioners>
                {bestConfectioners.map(confectioner => (
                    <ConfectionerCard
                        key={confectioner.id}
                        confectioner={confectioner}
                    />
                ))}
            </Confectioners>
            <Coffee>
                <Image
                    width={1230}
                    height={1040}
                    objectFit="cover"
                    src="/images/coffee.png"
                    alt="Xícara de Café"
                />
            </Coffee>
        </Section>
    )
}

export default BestConfectioners
