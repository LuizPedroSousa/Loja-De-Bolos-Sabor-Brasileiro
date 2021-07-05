import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import useCart from '../../../../hooks/useCart'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import CakeModal from '../../../Modals/CakeModal'
import { Container, CakeInfo, Header, Footer } from './styles'

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

const Cake: React.FC<CakeCardProps> = ({ cake }) => {
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const addToCardRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: addToCardRef }])
    const router = useRouter()
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { addToCart, hasCakeInCart, cartItems } = useCart()
    const [hasInCart, setHasInCart] = useState(false)

    useEffect(() => {
        setHasInCart(hasCakeInCart(cake))
    }, [cartItems])

    function handleAddToCart() {
        if (hasInCart) {
            return router.push('/meu-carrinho')
        }
        addToCart({ cake, amount: 1 })
    }

    return (
        <Container
            whileHover={{
                transition: { duration: 0.5 },
                scale: [1, 1.1],
                zIndex: 10
            }}
        >
            <Image
                objectFit="cover"
                width={700}
                onClick={onOpen}
                height={800}
                src={cake.photos[0].url}
                alt={cake.name}
            />
            <CakeModal cake={cake} isOpen={isOpen} onClose={onClose} />
            <CakeInfo>
                <Header>
                    <p>{cake.name}</p>
                    <strong>R$ {cake.price}</strong>
                </Header>
                <Footer>
                    <p ref={descriptionRef}>{cake.description}</p>
                    <motion.button
                        whileHover={{
                            scale: [1, 0.9],
                            transition: { duration: 0.25 },
                            x: 10
                        }}
                        onClick={handleAddToCart}
                        type="button"
                        name="Adicionar"
                        ref={addToCardRef}
                    >
                        {hasInCart ? 'Ver carrinho' : 'Adicionar ao carrinho'}
                    </motion.button>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default Cake
