import React, {
    FormEvent,
    Fragment,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import Image from 'next/image'

import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import ArrowLeft from '../../../../public/images/arrow-left-carousel.svg'
import ArrowRight from '../../../../public/images/arrow-right-carousel.svg'

import {
    Section,
    SearchLocals,
    Form,
    LocalContact,
    CarouselOverlay,
    CarouselItem,
    CarouselFooter,
    CarouselDots,
    Dot,
    CarouselBackground,
    CarouselContent,
    Arrows
} from './styles'
import { theme } from 'twin.macro'
import { lighten } from 'polished'
import useBreakPoint from '../../../hooks/useBreakPoint'
import useCustomRipple from '../../../hooks/useCustomRipple'
interface ItemsProps {
    src: string
    alt: string
    width: number
    height: number
    className: string
}

let carouselTimeout: NodeJS.Timeout

const Introduction: React.FC = () => {
    const { xs } = useBreakPoint()
    const nextRef = useRef<HTMLButtonElement>(null)
    const previousRef = useRef<HTMLButtonElement>(null)
    const goRef = useRef<HTMLButtonElement>(null)
    const addressRef = useRef<HTMLAnchorElement>(null)
    const whatsappRef = useRef<HTMLButtonElement>(null)

    const [viewOnNext, setViewOnNext] = useState(false)
    const [viewOnPrevious, setViewOnPrevious] = useState(false)

    useCustomRipple([
        { ref: previousRef },
        { ref: nextRef },
        { ref: goRef },
        { ref: addressRef },
        { ref: whatsappRef, color: lighten(0.1, theme`colors.green.400`) }
    ])
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

    const [hasCarouselLoop, setHasCarouselLoop] = useState(true)

    const { items } = useMemo(() => {
        const items: ItemsProps[] = [
            {
                src: '/images/logo.png',
                alt: 'Logo',
                width: 2931,
                height: 1755,
                className: 'logo'
            },
            {
                src: '/images/store_front.jpg',
                alt: 'Frente da loja',
                width: 2931,
                height: 1755,
                className: 'store-front'
            },
            {
                src: '/images/store_inside.jpg',
                alt: 'Por Dentro da loja',
                width: 2931,
                height: 1755,
                className: ''
            },
            {
                src: '/images/store_inside_2.jpg',
                alt: 'Por Dentro da loja',
                width: 2931,
                height: 1755,
                className: ''
            }
        ]
        return { items }
    }, [])

    const { currentItem, hasPrevious, hasNext } = useMemo(() => {
        const currentItem = items[currentCarouselIndex]
        const hasPrevious = !(currentCarouselIndex < 1)
        const hasNext = !(currentCarouselIndex === items.length - 1)

        return { hasPrevious, hasNext, currentItem }
    }, [currentCarouselIndex])

    useEffect(() => {
        setCurrentCarouselIndex(currentCarouselIndex + 1)
    }, [])

    useEffect(() => {
        if (hasCarouselLoop) {
            carouselTimeout = setTimeout(() => {
                if (!hasNext) {
                    return setCurrentCarouselIndex(0)
                }
                if (viewOnPrevious) {
                    setViewOnNext(true)
                    setViewOnPrevious(false)
                    clearTimeout(carouselTimeout)
                } else {
                    setViewOnNext(false)
                    setViewOnPrevious(true)
                }
                setCurrentCarouselIndex(currentCarouselIndex + 1)
            }, 5000)
        }
    }, [currentCarouselIndex])

    const nextSlide = () => {
        if (!hasNext) {
            return
        }
        setViewOnNext(true)
        setHasCarouselLoop(false)
        clearTimeout(carouselTimeout)

        setViewOnPrevious(false)
        setCurrentCarouselIndex(currentCarouselIndex + 1)
    }
    const previousSlide = () => {
        if (!hasPrevious) {
            return
        }
        setHasCarouselLoop(false)
        setViewOnNext(false)
        clearTimeout(carouselTimeout)
        setViewOnPrevious(true)
        setCurrentCarouselIndex(currentCarouselIndex - 1)
    }

    const handleSeeDelivery = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <Section>
            <SearchLocals>
                <span>Sabor</span>
                <h2>
                    Descubra os locais
                    <br />
                    de entrega
                </h2>

                <Form onSubmit={handleSeeDelivery}>
                    <input
                        placeholder="Veja se entregamos em sua casa"
                        type="text"
                    />
                    <button ref={goRef} name="GO" type="submit">
                        Go
                    </button>
                </Form>
            </SearchLocals>
            <LocalContact>
                <a href="#" ref={addressRef}>
                    <span>
                        <FaMapMarkerAlt size={20} />
                    </span>{' '}
                    Av. Parada pinto 1608{xs ? ', São Paulo' : '...'}
                </a>
                <button ref={whatsappRef} type="button">
                    <FaWhatsapp size={40} />
                </button>
            </LocalContact>
            <CarouselOverlay>
                <CarouselBackground />
                <CarouselContent>
                    {items.map(
                        ({ src, alt, height, width, className }, index) => {
                            return (
                                <Fragment key={index}>
                                    {currentCarouselIndex === index && (
                                        <CarouselItem
                                            className={className}
                                            animate={{
                                                scale: [0.5, 1],
                                                opacity: [0, 1],
                                                x: [!viewOnNext ? -120 : 120, 0]
                                            }}
                                        >
                                            <Image
                                                objectFit="cover"
                                                src={src}
                                                alt={alt}
                                                width={width}
                                                height={height}
                                            />
                                        </CarouselItem>
                                    )}
                                </Fragment>
                            )
                        }
                    )}
                    <CarouselFooter>
                        <CarouselDots>
                            {items.map(item => (
                                <Dot
                                    key={item.src}
                                    className={
                                        item === currentItem ? 'active' : ''
                                    }
                                />
                            ))}
                        </CarouselDots>
                        <Arrows hasNext={hasNext} hasPrevious={hasPrevious}>
                            <button
                                disabled={!hasPrevious}
                                ref={previousRef}
                                onClick={previousSlide}
                                name="Voltar imagem"
                                type="button"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                name="Avançar imagem"
                                disabled={!hasNext}
                                ref={nextRef}
                                onClick={nextSlide}
                                type="button"
                            >
                                <ArrowRight />
                            </button>
                        </Arrows>
                    </CarouselFooter>
                </CarouselContent>
            </CarouselOverlay>
        </Section>
    )
}

export default Introduction
