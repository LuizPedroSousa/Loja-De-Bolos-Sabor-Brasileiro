import React, { useMemo, useState } from 'react'
import Image from 'next/image'

import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import ArrowLeft from '../../../../public/images/arrow-left-carousel.svg'
import ArrowRight from '../../../../public/images/arrow-right-carousel.svg'

import {
    Section,
    SearchLocals,
    InputGroup,
    LocalContact,
    CarouselOverlay,
    CarouselItem,
    CarouselBackground,
    CarouselContent,
    Arrows
} from './styles'

interface ItemsProps {
    src: string
    alt: string
    width: number
    height: number
    className: string
}

const Introduction: React.FC = () => {
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

    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)

    const { hasPrevious, hasNext } = useMemo(() => {
        const hasPrevious = !(currentCarouselIndex < 1)
        const hasNext = !(currentCarouselIndex === items.length - 1)

        return { hasPrevious, hasNext }
    }, [currentCarouselIndex])
    const nextSlide = () => {
        if (!hasNext) {
            return
        }
        setCurrentCarouselIndex(currentCarouselIndex + 1)
    }
    const previousSlide = () => {
        if (!hasPrevious) {
            return
        }
        setCurrentCarouselIndex(currentCarouselIndex - 1)
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

                <InputGroup>
                    <input
                        placeholder="Veja se entregamos em sua casa"
                        type="text"
                    />
                    <button>Go</button>
                </InputGroup>
            </SearchLocals>
            <LocalContact>
                <a href="#">
                    <span>
                        <FaMapMarkerAlt size={20} />
                    </span>{' '}
                    Av. Parada pinto, São paulo
                </a>
                <button type="button">
                    <FaWhatsapp size={40} />
                </button>
            </LocalContact>
            <CarouselOverlay>
                <CarouselBackground />
                <CarouselContent>
                    {items.map(
                        ({ src, alt, height, width, className }, index) => (
                            <CarouselItem
                                className={
                                    currentCarouselIndex === index
                                        ? 'active'
                                        : ''
                                }
                                key={index}
                            >
                                {currentCarouselIndex === index && (
                                    <Image
                                        className={className}
                                        src={src}
                                        alt={alt}
                                        width={width}
                                        height={height}
                                    />
                                )}
                            </CarouselItem>
                        )
                    )}

                    <Arrows hasNext={hasNext} hasPrevious={hasPrevious}>
                        <button onClick={previousSlide} type="button">
                            <ArrowLeft />
                        </button>
                        <button onClick={nextSlide} type="button">
                            <ArrowRight />
                        </button>
                    </Arrows>
                </CarouselContent>
            </CarouselOverlay>
        </Section>
    )
}

export default Introduction
