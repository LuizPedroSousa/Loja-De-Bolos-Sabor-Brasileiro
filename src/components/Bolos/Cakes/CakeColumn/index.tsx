import React from 'react'
import Image from 'next/image'

import { Container } from './styles'
import useCart from '../../../../hooks/useCart'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { theme } from 'twin.macro'
import { FaCartArrowDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { lighten } from 'polished'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'

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

interface CakeColumnProps {
    cake: Cake
}

const CakeColumn: React.FC<CakeColumnProps> = ({ cake }) => {
    const { addToCart, hasCakeInCart } = useCart()

    const { onClose, onOpen, isOpen } = useDisclosure()

    const router = useRouter()
    const handleAddToCart = () => {
        if (hasCakeInCart(cake)) {
            return router.push('/meu-carrinho')
        }
        addToCart({ cake, amount: 1 })
    }

    return (
        <Container onClick={onOpen} hasCakeInCart={hasCakeInCart(cake)}>
            <CakeModal cake={cake} isOpen={isOpen} onClose={onClose} />
            <header>
                <Image
                    src={cake.photos[0].url}
                    alt={cake.name}
                    width={600}
                    objectFit="cover"
                    height={600}
                />
            </header>

            <p>{cake.name}</p>
            <strong>R$ {cake.price}</strong>
            <p>{cake.description}</p>

            <footer>
                <div>
                    {cake.stars.toMap.map(({ key, hasStar }) => {
                        return (
                            <AiFillStar
                                key={key}
                                size={12}
                                color={
                                    hasStar
                                        ? theme`colors.orange.500`
                                        : lighten(0.1, theme`colors.orange.100`)
                                }
                            />
                        )
                    })}
                </div>

                <button type="button" onClick={handleAddToCart}>
                    <span>
                        {hasCakeInCart(cake) ? (
                            <FaCartArrowDown
                                size={20}
                                color={theme`colors.orange.500`}
                            />
                        ) : (
                            <FiShoppingCart size={20} />
                        )}
                    </span>
                    {hasCakeInCart(cake)
                        ? 'Ver meu carrinho'
                        : 'Adicionar ao carrinho'}
                </button>
            </footer>
        </Container>
    )
}

export default CakeColumn
