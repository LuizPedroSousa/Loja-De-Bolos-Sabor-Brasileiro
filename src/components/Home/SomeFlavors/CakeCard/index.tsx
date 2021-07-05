import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { Container, CakeInfo, Header, Footer, AddToCard } from './styles'
import { FaMapMarkerAlt } from 'react-icons/fa'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import useCart from '../../../../hooks/useCart'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'

type Photo = {
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type CakeType = {
    id: string
    price: string
    name: string
    description: string
    photos: Photo[]
    slug: string
    stars: Star
}

interface CakeCardProps {
    cake: CakeType
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
    const addToCardRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: addToCardRef }])
    const { addToCart, hasCakeInCart, cartItems } = useCart()

    const { isOpen, onClose, onOpen } = useDisclosure()
    const [hasInCart, setHasInCart] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setHasInCart(hasCakeInCart(cake))
    }, [cartItems])
    function handleAddToCart() {
        if (!hasInCart) {
            return addToCart({ cake, amount: 1 })
        }
        router.push('/meu-carrinho')
    }

    return (
        <Container
            whileHover={{
                scale: [1, 0.99, 1.03],
                zIndex: 10
            }}
        >
            <CakeModal cake={cake} isOpen={isOpen} onClose={onClose} />
            <Image
                onClick={onOpen}
                objectFit="cover"
                width={800}
                height={700}
                src={cake.photos[0].url}
                alt={cake.name}
            />
            <CakeInfo>
                <Header>
                    <strong>{cake.name}</strong>
                    <p>{cake.description}</p>
                </Header>
                <Footer>
                    <a href="#">
                        <span>
                            <FaMapMarkerAlt size={20} />
                        </span>{' '}
                        Av. Parada pinto
                    </a>
                    <AddToCard
                        hasCakeInCart={hasInCart}
                        price={cake.price}
                        ref={addToCardRef}
                        whileHover={{
                            scale: [1, 0.98],
                            transition: { duration: 0.25 },
                            x: 5
                        }}
                        type="button"
                        name="Adicionar"
                        onClick={handleAddToCart}
                    >
                        {hasInCart ? 'Ver Carrinho' : 'Adicionar ao carrinho'}
                    </AddToCard>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default CakeCard
