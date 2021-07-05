import Image from 'next/image'
import React, { useRef } from 'react'

import WaveSvg from '../../../../../public/images/confectioner-background.svg'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import { Container, Content, Avatar, SeeProfile, Wave } from './styles'

type Confectioner = {
    id: string
    name: string
    avatar: {
        url: string
    }
}

interface ConfectionerCardProps {
    confectioner: Confectioner
}

const ConfectionerCard: React.FC<ConfectionerCardProps> = ({
    confectioner: {
        name,
        avatar: { url }
    }
}) => {
    const seeProfileRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: seeProfileRef }])
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
            <SeeProfile ref={seeProfileRef}>Ver Perfil</SeeProfile>
        </Container>
    )
}

export default ConfectionerCard
