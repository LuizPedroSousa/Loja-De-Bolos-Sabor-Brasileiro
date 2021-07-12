import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Footer from 'components/Footer'
import Header from 'components/Header'
import DefaultLayout from 'components/Layout/DefaultLayout'
import Seo from 'components/Seo'
import { getCakes, getCake, getCakeQuery } from 'hooks/useCake'
import useBreakPoint from 'hooks/useBreakPoint'

import { AiFillStar } from 'react-icons/ai'

import { Divider } from '@chakra-ui/react'

import * as S from 'styles/pages/bolos/bolo'
import { theme } from 'twin.macro'
import { lighten } from 'polished'
import MobalSlider from 'components/Bolos/Bolo/MobalSlider'
import DesktopImagesPreview from 'components/Bolos/Bolo/DesktopImagesPreview'
import { motion } from 'framer-motion'

type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type CakeFromApi = {
    id: string
    price: string
    name: string
    slug: string
    description: string
    photos: Photo[]
    ingredients: Ingredient[]
    stars: number
}

interface BoloProps {
    slug: string
}

export default function Bolo({ slug }: BoloProps) {
    const { sm, xsDown } = useBreakPoint()

    const { cake } = getCakeQuery({ slug })

    return (
        <DefaultLayout>
            <Seo
                description={cake.description}
                thumb={cake.photos[0].url}
                title={cake.name}
            />
            <main>
                <Header activePage="/bolos/bolo" />
                <S.Container>
                    <S.CakePhotosSection>
                        {!sm && xsDown && <MobalSlider cake={cake} />}
                        {sm && <DesktopImagesPreview cake={cake} />}
                    </S.CakePhotosSection>
                    <S.CakeInfoSection>
                        <S.CakeInfoTitle>
                            <strong>{cake.name}</strong>
                            <S.Stars>
                                {cake.stars.toMap.map(({ key, hasStar }) => {
                                    return (
                                        <AiFillStar
                                            key={key}
                                            color={
                                                hasStar
                                                    ? theme`colors.orange.500`
                                                    : lighten(
                                                          0.1,
                                                          theme`colors.orange.100`
                                                      )
                                            }
                                        />
                                    )
                                })}{' '}
                                <span>({cake.stars.length})</span>
                            </S.Stars>
                            <S.CakeInfoBest>
                                <strong>Prove o melhor Sabor</strong>
                            </S.CakeInfoBest>
                            <S.CakeInfoPrice>
                                <p>
                                    por <strong>R$ {cake.price}</strong>
                                </p>
                            </S.CakeInfoPrice>
                        </S.CakeInfoTitle>
                        <S.CakeInfoIngredients>

                        </S.CakeInfoIngredients>
                    </S.CakeInfoSection>
                </S.Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['cakes', { star: 4 }], () =>
        getCakes({ params: { star: 4 } })
    )

    const cakes = queryClient.getQueryData<CakeFromApi[]>([
        'cakes',
        { star: 4 }
    ])

    const paths = []

    cakes.forEach(({ slug }) => paths.push({ params: { slug } }))

    return {
        fallback: 'blocking',
        paths
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['cake', slug], () =>
        getCake({ slug: slug as string })
    )
    await queryClient.refetchQueries({ active: true })
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            slug
        },
        revalidate: 60 * 60 * 10
    }
}
