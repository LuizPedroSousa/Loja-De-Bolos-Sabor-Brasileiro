import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Container, Thumb, Info, AddToCart, Stars } from './styles'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'
import { ImCart } from 'react-icons/im'
import { FiShoppingCart } from 'react-icons/fi'
import useCart from '../../../../hooks/useCart'
import { useRouter } from 'next/router'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import CakeDrawer from 'components/Drawers/CakeDrawer'
import useBreakPoint from 'hooks/useBreakPoint'
import Rating from '@material-ui/lab/Rating'

type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type Avatar = Photo & {}
type User = {
    id: string
    name: string
    surname: string
    avatar: Avatar
}

type CakeRating = {
    id: string
    title: string
    description: string
    user: User
    stars: number
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    ratings: CakeRating[]
    category: string
    starsAverage: number
}

interface CakeHideInfoProps {
    cake: Cake
}

const CakeHideInfo: React.FC<CakeHideInfoProps> = ({ cake }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { hasCakeInCart, addToCart, cartItems } = useCart()
    const addToCartRef = useRef<HTMLButtonElement>(null)
    const [hasInCart, setHasInCart] = useState(false)

    const { md } = useBreakPoint()
    useEffect(() => {
        setHasInCart(hasCakeInCart(cake))
    }, [cartItems])

    useCustomRipple([{ ref: addToCartRef }])
    const router = useRouter()
    const handleAddToCart = () => {
        if (hasInCart) {
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
            {!md && (
                <CakeDrawer isOpen={isOpen} onClose={onClose} cake={cake} />
            )}

            {md && <CakeModal isOpen={isOpen} onClose={onClose} cake={cake} />}
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
                    <Rating readOnly value={cake.starsAverage} />
                    <p>({cake.ratings.length})</p>
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
                        {hasInCart ? (
                            <ImCart size={20} />
                        ) : (
                            <FiShoppingCart size={20} />
                        )}
                    </span>
                    {hasInCart ? 'Ver meu carrinho' : 'Adicionar ao carrinho'}
                </AddToCart>
            </footer>
        </Container>
    )
}

export default CakeHideInfo
