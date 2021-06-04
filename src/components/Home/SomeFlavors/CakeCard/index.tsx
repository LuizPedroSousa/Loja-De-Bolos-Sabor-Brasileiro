import React, { useRef } from 'react'
import Image from 'next/image'

import { Container, CakeInfo, Header, Footer, AddToCard } from './styles'
import { FaMapMarkerAlt } from 'react-icons/fa'
import useCustomRipple from '../../../../hooks/useCustomRipple'

interface CakeCardProps {
    image: {
        src: string
        alt: string
    }
    name: string
    description: string
    price: string
}
const CakeCard: React.FC<CakeCardProps> = ({
    name,
    image: { src, alt },
    description,
    price
}) => {
    const addToCardRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: addToCardRef }])
    return (
        <Container
            whileHover={{
                scale: [1, 0.98, 1.05],
                zIndex: 10
            }}
        >
            <Image width={700} height={800} src={src} alt={alt} />
            <CakeInfo>
                <Header>
                    <strong>{name}</strong>
                    <p>{description}</p>
                </Header>
                <Footer>
                    <a href="#">
                        <span>
                            <FaMapMarkerAlt size={20} />
                        </span>{' '}
                        Av. Parada pinto
                    </a>
                    <AddToCard
                        price={price}
                        ref={addToCardRef}
                        whileHover={{
                            scale: [1, 0.98],
                            transition: { duration: 0.25 },
                            x: 5
                        }}
                        type="button"
                        name="Adicionar"
                    >
                        Adicionar ao carrinho
                    </AddToCard>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default CakeCard
