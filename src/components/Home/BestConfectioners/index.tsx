import Image from 'next/image'
import React from 'react'
import ConfectionerCard from './ConfectionerCard'

import { Section, Content, Title, Confectioners, Cake, Coffee } from './styles'

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
            <Cake>
                <Image
                    width={1116}
                    height={894}
                    objectFit="cover"
                    src="/images/homemade-cake.png"
                    alt="Bolo caseiro"
                />
            </Cake>
            <Content>
                <Title>
                    Nossos melhores
                    <br />
                    confeiteiros
                </Title>

                <Confectioners>
                    {bestConfectioners.map(confectioner => (
                        <ConfectionerCard
                            key={confectioner.id}
                            confectioner={confectioner}
                        />
                    ))}
                </Confectioners>
            </Content>
            <Coffee>
                <Image
                    width={615}
                    height={557}
                    objectFit="cover"
                    src="/images/coffee.png"
                    alt="Xícara de Café"
                />
            </Coffee>
        </Section>
    )
}

export default BestConfectioners
