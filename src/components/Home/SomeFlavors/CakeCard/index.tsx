import React from 'react'
import Image from 'next/image'

import { Container, CakeInfo, Header, Footer, AddToCard } from './styles'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
    return (
        <Container
            whileHover={{
                boxShadow: '1px 10px 22px 5px rgba(0, 0, 0, 0.5)',
                scale: [1, 1.1],
                transition: { duration: 0.5 },
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
                        whileHover={{
                            scale: [1, 0.9],
                            transition: { duration: 0.25 },
                            x: 10
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
