import React, { useRef } from 'react'
import Image from 'next/image'

import { Container, Thumb, Info, AddToCart, Stars } from './styles'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { theme } from 'twin.macro'
import { lighten } from 'polished'
import { ImCart } from 'react-icons/im'
import { FiShoppingCart } from 'react-icons/fi'
import useCart from '../../../../hooks/useCart'
import { useRouter } from 'next/router'
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

interface CakeHideInfoProps {
    cake: Cake
}

const CakeHideInfo: React.FC<CakeHideInfoProps> = ({ cake }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { hasCakeInCart, addToCart } = useCart()
    const addToCartRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([{ ref: addToCartRef }])
    const router = useRouter()
    const handleAddToCart = () => {
        if (hasCakeInCart(cake)) {
            return router.push('/meu-carrinho')
        }
        addToCart({ cake, amount: 1 })
    }

    return (
        <Container
            initial={{ opacity: 0, y: -60, scale: 1, zIndex: 1 }}
            animate={{
                opacity: [null, 0.5, 1],
                y: [null, 0],
                scale: [null, 0.99, 1.02]
            }}
            whileHover={{
                scale: [1, 1.05],
                zIndex: 999,
                position: 'relative',
                transition: { duration: 0.5 }
            }}
        >
            <CakeModal cake={cake} onClose={onClose} isOpen={isOpen} />
            <header onClick={onOpen}>
                <Thumb>
                    <Image
                        objectFit="cover"
                        width={600}
                        height={600}
                        src={cake.photos[0].url}
                        alt={cake.name}
                    />
                </Thumb>
                <Stars>
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
                    <span>({cake.stars.length})</span>
                </Stars>
            </header>

            <Info onClick={onOpen}>
                <strong>{cake.name}</strong>
                <span>R$ {cake.price}</span>
            </Info>
            <footer>
                <AddToCart
                    ref={addToCartRef}
                    type="button"
                    onClick={handleAddToCart}
                >
                    <span>
                        {hasCakeInCart(cake) ? (
                            <ImCart size={20} />
                        ) : (
                            <FiShoppingCart size={20} />
                        )}
                    </span>
                    {hasCakeInCart(cake)
                        ? 'Ver meu carrinho'
                        : 'Adicionar ao carrinho'}
                </AddToCart>
            </footer>
        </Container>
    )
}

export default CakeHideInfo
