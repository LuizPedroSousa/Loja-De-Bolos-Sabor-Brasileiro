import React from 'react'
import Image from 'next/image'

import * as S from './styles'
import Rating from '@material-ui/lab/Rating'

type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}
type CakeRating = {
    id: string
    title: string
    description: string
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

interface RelatedCakeProps {
    cake: Cake
}

const RelatedCake: React.FC<RelatedCakeProps> = ({ cake }) => {
    return (
        <S.Container>
            <header>
                <S.CakeThumb>
                    <Image
                        src={cake.photos[0].url}
                        alt={cake.name}
                        objectFit="cover"
                        width={400}
                        height={500}
                    />
                </S.CakeThumb>
                <S.CakeName>{cake.name}</S.CakeName>
            </header>
            <footer>
                <p>
                    por <strong>R$45.00</strong>
                    <br />
                    em dinheiro ou avista <span>sem juros</span>
                    no cartão
                </p>
                <Rating value={cake.starsAverage} />
            </footer>
        </S.Container>
    )
}

export default RelatedCake
