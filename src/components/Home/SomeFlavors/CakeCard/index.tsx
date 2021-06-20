import React, { useRef } from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { Container, CakeInfo, Header, Footer, AddToCard } from './styles'
import { FaMapMarkerAlt } from 'react-icons/fa'
import useCustomRipple from '../../../../hooks/useCustomRipple'
import useCart from '../../../../hooks/useCart'

type Photo = {
    url: string
}

type CakeType = {
    id: string
    price: string
    name: string
    description: string
    photos: Photo[]
}

interface CakeCardProps {
    cake: CakeType
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
    const addToCardRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: addToCardRef }])
    const { addToCart, hasCakeInCart } = useCart()

    const router = useRouter()

    function handleAddToCart() {
        if (!hasCakeInCart(cake)) {
            return addToCart({ cake, amount: 1 })
        }
        router.push('/meu-carrinho')
    }
    return (
        <Container
            whileHover={{
                scale: [1, 0.98, 1.05],
                zIndex: 10
            }}
        >
            <Image
                width={700}
                height={800}
                src={cake.photos[0].url}
                alt={cake.name}
            />
            <CakeInfo>
                <Header>
                    <strong>{cake.name}</strong>
                    <p>{cake.description}</p>
                </Header>
                <Footer>
                    <a href="#">
                        <span>
                            <FaMapMarkerAlt size={20} />
                        </span>{' '}
                        Av. Parada pinto
                    </a>
                    <AddToCard
                        hasCakeInCart={hasCakeInCart(cake)}
                        price={cake.price}
                        ref={addToCardRef}
                        whileHover={{
                            scale: [1, 0.98],
                            transition: { duration: 0.25 },
                            x: 5
                        }}
                        type="button"
                        name="Adicionar"
                        onClick={handleAddToCart}
                    >
                        {hasCakeInCart(cake)
                            ? 'Ver Carrinho'
                            : 'Adicionar ao carrinho'}
                    </AddToCard>
                </Footer>
            </CakeInfo>
        </Container>
    )
}

export default CakeCard
