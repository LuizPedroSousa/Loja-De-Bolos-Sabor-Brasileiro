import React from 'react'

import { Box, ListContainer, Controls, Info } from './styles'
import Image from 'next/image'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '../../../../hooks/useCart'
import { BiX } from 'react-icons/bi'
import { theme } from 'twin.macro'
import NextLink from 'next/link'
import { FaSearchPlus } from 'react-icons/fa'
type Photos = {
    url: string
}

type Cake = {
    id: string
    price: string
    name: string
    description: string
    slug: string
    photos: Photos[]
}

interface CakeListProps {
    cake: Cake
}
const CakeRow: React.FC<CakeListProps> = ({ cake }) => {
    const { toggleAddToCart, hasCakeInCart } = useCart()
    return (
        <ListContainer>
            <Box>
                <Image
                    objectFit="cover"
                    src={cake.photos[0].url}
                    width={600}
                    height={700}
                    alt={cake.name}
                />
            </Box>
            <Controls>
                <button
                    onClick={() => toggleAddToCart(cake)}
                    type="button"
                    name="Adicionar ao carrinho"
                >
                    <span>
                        {hasCakeInCart(cake) ? (
                            <BiX size={20} color={theme`colors.pink.400`} />
                        ) : (
                            <AiOutlineShoppingCart
                                size={20}
                                color={theme`colors.blue.400`}
                            />
                        )}
                    </span>
                </button>
                <button type="button" name="Favoritar">
                    <span>
                        <AiOutlineHeart
                            size={18}
                            color={theme`colors.red.400`}
                        />
                    </span>
                </button>
                <button type="button" name="Visualizar">
                    <span>
                        <FaSearchPlus
                            size={18}
                            color={theme`colors.blue.400`}
                        />
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
