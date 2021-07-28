import React, { useEffect, useRef, useState } from 'react'

import ArrowLeft from '../../../../../public/images/arrow-left-carousel.svg'
import ArrowRight from '../../../../../public/images/arrow-right-carousel.svg'
import * as S from './styles'
import useCustomRipple from 'hooks/useCustomRipple'
import { AnimatePresence, motion } from 'framer-motion'

import { wrap } from 'popmotion'

interface ItemsProps {
    src: string
    alt: string
    width: number
    height: number
    className: string
    objectFit: 'cover' | 'contain'
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? [0, 100] : [0, -100],
            opacity: 0
        }
    },
    center: {
        zIndex: 1,
        x: [100, 0],
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? [0, 100] : [0, -100],
            opacity: 0
        }
    }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}

const IntroductionCarousel: React.FC = () => {
    const items: ItemsProps[] = [
        {
            src: '/images/logo.png',
            alt: 'Logo',
            width: 800,
            height: 700,
            className: 'logo',
            objectFit: 'contain'
        },
        {
            src: '/images/store_front.jpg',
            alt: 'Frente da loja',
            width: 800,
            height: 700,
            className: 'store-front',
            objectFit: 'cover'
        },
        {
            src: '/images/store_inside.jpg',
            alt: 'Por Dentro da loja',
            width: 800,
            height: 800,
            className: '',
            objectFit: 'cover'
        },
        {
            src: '/images/store_inside_2.jpg',
            alt: 'Por Dentro da loja',
            width: 800,
            height: 800,
            className: '',
            objectFit: 'cover'
        }
    ]

    const nextRef = useRef<HTMLButtonElement>(null)
    const previousRef = useRef<HTMLButtonElement>(null)

    const [hasPrevious, setHasPrevious] = useState(false)
    const [hasNext, setHasNext] = useState(false)

    const [[page, direction], setPage] = useState([0, 0])
    const currentItemIndex = wrap(0, items.length, page)

    useEffect(() => {
        setHasPrevious(!(currentItemIndex < 1))
        setHasNext(!(currentItemIndex === items.length - 1))
    }, [currentItemIndex])

    useCustomRipple([{ ref: previousRef }, { ref: nextRef }])

    const paginate = (newDirection: number) => {
        console.log(newDirection)
        setPage([page + newDirection, newDirection])
    }

    return (
        <S.Wrapper>
            <S.CarouselBackground />
            <S.CarouselContent>
                <S.CarouselItem className={items[currentItemIndex].className}>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={page}
                            src={items[currentItemIndex].src}
                            alt={items[currentItemIndex].alt}
                            custom={direction}
                            variants={variants}
                            style={{
                                objectFit: items[currentItemIndex].objectFit
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30
                                },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x)

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1)
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1)
                                }
                            }}
                        />
                    </AnimatePresence>
                </S.CarouselItem>
                <S.CarouselFooter>
                    <S.CarouselDots>
                        {items.map((item, i) => (
                            <S.Dot
                                name={'Avançar para a imagem' + i}
                                type="button"
                                key={item.src}
                                className={
                                    i === currentItemIndex ? 'active' : ''
                                }
                            />
                        ))}
                    </S.CarouselDots>
                    <S.Arrows hasNext={hasNext} hasPrevious={hasPrevious}>
                        <button
                            disabled={!hasPrevious}
                            ref={previousRef}
                            onClick={() => paginate(-1)}
                            name="Voltar imagem"
                            type="button"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            name="Avançar imagem"
                            disabled={!hasNext}
                            ref={nextRef}
                            onClick={() => paginate(1)}
                            type="button"
                        >
                            <ArrowRight />
                        </button>
                    </S.Arrows>
                </S.CarouselFooter>
            </S.CarouselContent>
        </S.Wrapper>
    )
}

export default IntroductionCarousel
