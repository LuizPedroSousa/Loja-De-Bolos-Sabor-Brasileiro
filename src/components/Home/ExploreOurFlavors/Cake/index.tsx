import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { createRipples } from 'react-ripples'
import { useTheme } from 'styled-components'
import useBreakPoint from '../../../../hooks/useBreakPoint'
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
    const {
        colors: { orange }
    } = useTheme()

    const MyRipples = createRipples({
        color: orange[500],
        during: 2200
    })

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
                    '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
                    '0 22.3px 17.9px rgba(0, 0, 0, 0.072)',
                    '0 41.8px 33.4px rgba(0, 0, 0, 0.086)'
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
                        <MyRipples>Adicionar ao carrinho</MyRipples>
                    </motion.button>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default Cake
