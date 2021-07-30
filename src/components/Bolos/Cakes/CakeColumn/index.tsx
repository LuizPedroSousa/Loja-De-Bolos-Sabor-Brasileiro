import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Container } from './styles'
import useCart from '../../../../hooks/useCart'
import { FiShoppingCart } from 'react-icons/fi'
import { FaCartArrowDown } from 'react-icons/fa'
import { useRouter } from 'next/router'
import CakeModal from '../../../Modals/CakeModal'
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
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

interface CakeColumnProps {
    cake: Cake
}

const CakeColumn: React.FC<CakeColumnProps> = ({ cake }) => {
    const { addToCart, hasCakeInCart, cartItems } = useCart()

    const { onClose, onOpen, isOpen } = useDisclosure()

    const { md } = useBreakPoint()
    const router = useRouter()
    const addToCartRef = useRef<HTMLButtonElement>(null)
    const [hasInCart, setHasInCart] = useState(false)

    useEffect(() => {
        setHasInCart(hasCakeInCart(cake))
    }, [cartItems])
    useCustomRipple([{ ref: addToCartRef }])
    const handleAddToCart = () => {
        if (hasInCart) {
            return router.push('/meu-carrinho')
        }
        addToCart({ cake, amount: 1 })
    }

    return (
        <Container
            initial={{ opacity: 0, y: 60 }}
            animate={{
                opacity: [null, 0.5, 1],
                y: [null, 0]
            }}
            whileHover={{ scale: [1, 1.05], transition: { duration: 0.25 } }}
            hasCakeInCart={hasInCart}
        >
            {!md && (
                <CakeDrawer isOpen={isOpen} onClose={onClose} cake={cake} />
            )}

            {md && <CakeModal isOpen={isOpen} onClose={onClose} cake={cake} />}
            <header onClick={onOpen}>
                <Image
                    src={cake.photos[0].url}
                    alt={cake.name}
                    width={600}
                    objectFit="cover"
                    height={600}
                />
            </header>

            <div>
                <p>{cake.name}</p>
                <strong>R$ {cake.price}</strong>
                <p>{cake.description}</p>
            </div>

            <footer>
                <div>
                    <Rating readOnly value={cake.starsAverage} />
                </div>

                <motion.button
                    whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                    type="button"
                    ref={addToCartRef}
                    onClick={handleAddToCart}
                >
                    <span>
                        {hasInCart ? (
                            <FaCartArrowDown size={20} />
                        ) : (
                            <FiShoppingCart size={20} />
                        )}
                    </span>
                    {hasInCart ? 'Ver meu carrinho' : 'Adicionar ao carrinho'}
                </motion.button>
            </footer>
        </Container>
    )
}

export default CakeColumn
