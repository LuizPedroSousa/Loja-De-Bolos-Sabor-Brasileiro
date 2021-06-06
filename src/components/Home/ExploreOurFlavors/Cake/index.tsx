import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import useBreakPoint from '../../../../hooks/useBreakPoint'
import useCart from '../../../../hooks/useCart'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import { Container, CakeInfo, Header, Footer } from './styles'

type CakeType = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

interface CakeCardProps {
    cake: CakeType
}

const Cake: React.FC<CakeCardProps> = ({ cake }) => {
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const addToCardRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: addToCardRef }])

    const { addToCard, hasCakeInCart } = useCart()

    const { xs, sm, md } = useBreakPoint()

    useEffect(() => {
        setMaxDescriptionLength()
    }, [xs, sm])

    function setMaxDescriptionLength() {
        const words = descriptionRef.current?.textContent
        let maxWords = 30
        if (xs && !sm) {
            maxWords = 60
        } else if (sm && !md) {
            maxWords = 90
        } else if (md) {
            maxWords = 100
        }

        if (words.length > maxWords) {
            return innerText()
        }

        function innerText() {
            descriptionRef.current.innerHTML = ''
            for (let i = 0; i <= maxWords; i++) {
                descriptionRef.current.innerHTML += words[i]
            }
            return (descriptionRef.current.innerHTML += '...')
        }
    }

    function handleAddToCart() {
        addToCard({ cake, amount: 1 })
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
                height={800}
                src={cake.photo.url}
                alt={cake.name}
            />
            <CakeInfo>
                <Header>
                    <p>{cake.name}</p>
                    <strong>R$ {cake.price}</strong>
                </Header>
                <Footer>
                    <p ref={descriptionRef}>{cake.description}</p>
                    {hasCakeInCart(cake) ? (
                        <Link href="/meu-carrinho">
                            <a>Ver Carrinho</a>
                        </Link>
                    ) : (
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
                            Adicionar ao carrinho
                        </motion.button>
                    )}
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default Cake
