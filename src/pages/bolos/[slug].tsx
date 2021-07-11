import React, { useMemo, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Footer from 'components/Footer'
import Header from 'components/Header'
import DefaultLayout from 'components/Layout/DefaultLayout'
import Seo from 'components/Seo'
import { getCakes, getCake, getCakeQuery } from 'hooks/useCake'
import useBreakPoint from 'hooks/useBreakPoint'
import Zoom from 'react-img-zoom'
import CheckboxDot from 'components/CheckboxDot'
import { FaSearchPlus } from 'react-icons/fa'

import { AiFillStar, AiOutlineClose } from 'react-icons/ai'

import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'

import * as S from 'styles/pages/bolos/bolo'
import { useElementScroll } from 'framer-motion'
import Image from 'next/image'
import { theme } from 'twin.macro'
import { lighten } from 'polished'

type Photo = {
    id: string
    url: string
}
type CakeFromApi = {
    id: string
    price: string
    name: string
    slug: string
    description: string
    photos: Photo[]
    stars: number
}

type Item = Photo & {
    scroll: number
}

interface BoloProps {
    slug: string
}

export default function Bolo({ slug }: BoloProps) {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [currentScroll, setCurrentScroll] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [currentSlider, setCurrentSlider] = useState(0)
    const { scrollX } = useElementScroll(sliderRef)
    const { sm, xsDown } = useBreakPoint()

    const { cake } = getCakeQuery({ slug })

    scrollX.onChange(v => {
        setCurrentScroll(v)
    })

    const { items } = useMemo(() => {
        let items: Item[] | Photo[] = cake.photos
        if (typeof window !== 'undefined') {
            items = items.map((photo, i) => {
                const maxScroll = window.screen.width * (cake.photos.length - 1)
                let scroll = window.screen.width * i
                if (i === 0) {
                    scroll = 0
                }
                if (i === cake.photos.length - 1) {
                    scroll = maxScroll
                }
                return { ...photo, scroll }
            })
        }
        return { items }
    }, [typeof window !== 'undefined'])

    function calcItemScroll(index: number, oldIndex: number) {
        const maxScroll = window.screen.width * (cake.photos.length - 1)
        const scrollTo = { left: window?.screen.width * (oldIndex - index) }

        if (index === cake.photos.length - 1) {
            scrollTo.left = -maxScroll
        }
        if (index === 0) {
            scrollTo.left = maxScroll
        }

        scrollTo.left = -scrollTo.left
        return { scrollTo, scroll }
    }

    function handleCheckDot(i: number) {
        const oldIndex = currentSlider

        if (oldIndex === i) {
            return
        }
        const { scrollTo } = calcItemScroll(i, oldIndex)

        setCurrentSlider(i)

        sliderRef.current.scrollBy(scrollTo)
    }

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
                    <Drawer
                        isOpen={isOpen}
                        placement="bottom"
                        onClose={onClose}
                        isFullHeight
                    >
                        <DrawerOverlay />
                        <S.DrawerContent>
                            <DrawerHeader>
                                <S.ClosePhoto
                                    name="Fechar imagem do bolo"
                                    type="button"
                                    onClick={onClose}
                                >
                                    <AiOutlineClose />
                                </S.ClosePhoto>
                            </DrawerHeader>

                            <DrawerBody>
                                <Zoom
                                    width={600}
                                    height={600}
                                    objectFit="cover"
                                    zoomScale={3}
                                    img={cake.photos[currentSlider].url}
                                />
                            </DrawerBody>
                        </S.DrawerContent>
                    </Drawer>
                    <S.CakePhotosSection>
                        {!sm && xsDown && (
                            <>
                                <S.ExpandPhoto onClick={onOpen}>
                                    <FaSearchPlus />
                                </S.ExpandPhoto>
                                <S.MobalSlider ref={sliderRef}>
                                    {cake.photos.map(photo => {
                                        return (
                                            <S.SlideItem
                                                key={photo.id}
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: [null, 1]
                                                }}
                                                transition={{ duration: 1 }}
                                            >
                                                <Image
                                                    width={600}
                                                    objectFit="cover"
                                                    height={600}
                                                    src={photo.url}
                                                    alt={cake.name}
                                                />
                                            </S.SlideItem>
                                        )
                                    })}
                                </S.MobalSlider>
                                <S.DotSlider>
                                    {items?.map(
                                        ({ id, scroll }: Item, i: number) => {
                                            return (
                                                <CheckboxDot
                                                    onCheckedChange={() =>
                                                        setCurrentSlider(i)
                                                    }
                                                    onChange={() =>
                                                        handleCheckDot(i)
                                                    }
                                                    isChecked={
                                                        scroll === currentScroll
                                                    }
                                                    key={id + i + '_dot'}
                                                />
                                            )
                                        }
                                    )}
                                </S.DotSlider>
                            </>
                        )}
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
                    </S.CakeInfoSection>
                    <Divider my="4" w="94%" mx="auto" />
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
