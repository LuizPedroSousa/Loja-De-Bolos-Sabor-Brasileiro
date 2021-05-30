import Image from 'next/image'
import React from 'react'

import WaveSvg from '../../../../../public/images/confectioner-background.svg'
import Ripple from '../../../Ripple'
import { Container, Content, Avatar, SeeProfile, Wave } from './styles'

type Confectioner = {
    id: string
    name: string
    photo: {
        url: string
    }
}

interface ConfectionerCardProps {
    confectioner: Confectioner
}

const ConfectionerCard: React.FC<ConfectionerCardProps> = ({
    confectioner: {
        name,
        photo: { url }
    }
}) => {
    return (
        <Container>
            <Avatar>
                <Image
                    objectFit="cover"
                    width={500}
                    height={700}
                    src={url}
                    alt={name}
                />
            </Avatar>
            <Content>
                <strong>{name}</strong>
                <Wave>
                    <WaveSvg />
                </Wave>
            </Content>
            <SeeProfile>
                <Ripple>Ver Perfil</Ripple>
            </SeeProfile>
        </Container>
    )
}

export default ConfectionerCard
