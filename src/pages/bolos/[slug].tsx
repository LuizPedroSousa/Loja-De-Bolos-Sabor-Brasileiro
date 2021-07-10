import React, { useMemo, useRef, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import Seo from '../../components/Seo'
import { getCakes, getCake } from '../../hooks/useCake'
import Zoom from 'react-img-zoom'
import CheckboxDot from 'components/CheckboxDot'
import { FaSearchPlus } from 'react-icons/fa'

import { AiOutlineClose } from 'react-icons/ai'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'

import {
    Container,
    CakePhotosSection,
    MobalSlider,
    DotSlider,
    ExpandPhoto,
    DrawerContent,
    ClosePhoto
} from 'styles/pages/bolos/bolo'
import SlideItem from 'components/Bolos/SlideItem'
import { useElementScroll } from 'framer-motion'

type Photo = {
    url: string
    id: string
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
    const { data: cake } = useQuery(['cake', slug], () =>
        getCake({ slug: slug as string })
    )

    const { isOpen, onClose, onOpen } = useDisclosure()
    const [currentScroll, setCurrentScroll] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [currentSlider, setCurrentSlider] = useState(0)
    const { scrollX } = useElementScroll(sliderRef)

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
                <Container>
                    <Drawer
                        isOpen={isOpen}
                        placement="bottom"
                        onClose={onClose}
                        isFullHeight
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader>
                                <ClosePhoto
                                    name="Fechar imagem do bolo"
                                    type="button"
                                    onClick={onClose}
                                >
                                    <AiOutlineClose />
                                </ClosePhoto>
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
                        </DrawerContent>
                    </Drawer>
                    <CakePhotosSection>
                        <ExpandPhoto onClick={onOpen}>
                            <FaSearchPlus />
                        </ExpandPhoto>
                        <MobalSlider ref={sliderRef}>
                            {cake.photos.map(photo => {
                                return (
                                    <SlideItem
                                        key={photo.id}
                                        photo={photo}
                                        cake={cake}
                                    />
                                )
                            })}
                        </MobalSlider>
                        <DotSlider>
                            {items?.map(({ id, scroll }: Item, i: number) => {
                                return (
                                    <CheckboxDot
                                        onCheckedChange={() =>
                                            setCurrentSlider(i)
                                        }
                                        onChange={() => handleCheckDot(i)}
                                        isChecked={scroll === currentScroll}
                                        key={id + i + '_dot'}
                                    />
                                )
                            })}
                        </DotSlider>
                    </CakePhotosSection>
                </Container>
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
