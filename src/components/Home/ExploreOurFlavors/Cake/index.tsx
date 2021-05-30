import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import useBreakPoint from '../../../../hooks/useBreakPoint'
import Ripple from '../../../Ripple'
import { Container, CakeInfo, Header, Footer } from './styles'

interface CakeCardProps {
    image: {
        src: string
        alt: string
    }
    name: string
    description: string
    price: string
}

const Cake: React.FC<CakeCardProps> = ({
    image: { src, alt },
    description,
    name,
    price
}) => {
    const descriptionRef = useRef<HTMLParagraphElement>(null)

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

    return (
        <Container
            whileHover={{
                boxShadow: [
                    '0px 2px 4px rgba(0, 0, 0, 0.04),',
                    ' 0px 8px 16px rgba(0, 0, 0, 0.32)'
                ],
                transition: { duration: 0.5 },
                scale: [1, 1.1],
                zIndex: 10
            }}
        >
            <Image
                objectFit="cover"
                width={700}
                height={800}
                src={src}
                alt={alt}
            />
            <CakeInfo>
                <Header>
                    <p>{name}</p>
                    <strong>R$ {price}</strong>
                </Header>
                <Footer>
                    <p ref={descriptionRef}>{description}</p>
                    <motion.button
                        whileHover={{
                            scale: [1, 0.9],
                            transition: { duration: 0.25 },
                            x: 10
                        }}
                        type="button"
                        name="Adicionar"
                    >
                        <Ripple>Adicionar ao carrinho</Ripple>
                    </motion.button>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default Cake
