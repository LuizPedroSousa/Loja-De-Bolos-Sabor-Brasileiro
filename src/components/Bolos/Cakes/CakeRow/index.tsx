import React, { useEffect, useRef, useState } from 'react'

import { Box, ListContainer, Controls, Info } from './styles'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '../../../../hooks/useCart'
import { BiX } from 'react-icons/bi'
import NextLink from 'next/link'
import { FaSearchPlus } from 'react-icons/fa'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'
import useCustomRipple from '../../../../hooks/useCustomRipple'
type Photos = {
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Cake = {
    id: string
    price: string
    name: string
    description: string
    slug: string
    photos: Photos[]
    stars: Star
    isBest: boolean
}

interface CakeListProps {
    cake: Cake
}
const CakeRow: React.FC<CakeListProps> = ({ cake }) => {
    const { toggleAddToCart, hasCakeInCart, cartItems } = useCart()
    const { isOpen, onClose, onOpen } = useDisclosure()
    const addToCartRef = useRef<HTMLButtonElement>(null)
    const favoriteRef = useRef<HTMLButtonElement>(null)
    const viewRef = useRef<HTMLButtonElement>(null)
    const [hasInCart, setHasInCart] = useState(false)

    useEffect(() => {
        setHasInCart(hasCakeInCart(cake))
    }, [cartItems])

    useCustomRipple([
        { ref: addToCartRef },
        { ref: favoriteRef },
        { ref: viewRef }
    ])
    return (
        <ListContainer
            initial={{ opacity: 0, y: 60 }}
            animate={{
                opacity: [null, 0.5, 1],
                y: [null, 0]
            }}
        >
            <CakeModal isOpen={isOpen} onClose={onClose} cake={cake} />
            <Box onClick={onOpen}>
                <Image
                    objectFit="cover"
                    src={cake.photos[0].url}
                    width={600}
                    height={700}
                    alt={cake.name}
                />
            </Box>
            <Controls hasCakeInCart={hasInCart}>
                <button
                    onClick={() => toggleAddToCart(cake)}
                    type="button"
                    name="Adicionar ao carrinho"
                >
                    <span>
                        {hasInCart ? (
                            <BiX size={20} />
                        ) : (
                            <AiOutlineShoppingCart size={18} />
                        )}
                    </span>
                </button>
                <button type="button" name="Favoritar">
                    <span>
                        <AiOutlineHeart size={18} />
                    </span>
                </button>
                <button type="button" name="Visualizar">
                    <span>
                        <FaSearchPlus size={16} />
                    </span>
                </button>
            </Controls>
            <NextLink href={`/bolos/${cake.slug}`}>
                <Info>
                    <strong>{cake.name}</strong>
                    <span>R$ {cake.price}</span>
                    <p>{cake.description}</p>
                </Info>
            </NextLink>
        </ListContainer>
    )
}

export default CakeRow
