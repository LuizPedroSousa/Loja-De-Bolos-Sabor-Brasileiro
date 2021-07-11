import { useDisclosure } from '@chakra-ui/react'
import CakePhotoExpandedDrawer from 'components/Drawers/CakePhotoExpandedDrawer'
import { useElementScroll } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo, useRef, useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import CheckboxDot from './CheckboxDot'

import * as S from './styles'

type Photo = {
    id: string
    url: string
}

type Item = Photo & {
    scroll: number
}

type Cake = {
    name: string
    photos: Photo[]
}

interface MobalSliderProps {
    cake: Cake
}

const MobalSlider: React.FC<MobalSliderProps> = ({ cake }) => {
    const [currentScroll, setCurrentScroll] = useState(0)
    const [currentSlider, setCurrentSlider] = useState(0)
    const sliderRef = useRef<HTMLDivElement>(null)
    const { scrollX } = useElementScroll(sliderRef)

    scrollX.onChange(v => {
        setCurrentScroll(v)
    })

    const { isOpen, onClose, onOpen } = useDisclosure()
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

    function handleCheckDot(i: number) {
        const oldIndex = currentSlider

        if (oldIndex === i) {
            return
        }
        const { scrollTo } = calcItemScroll(i, oldIndex)

        setCurrentSlider(i)

        sliderRef.current.scrollBy(scrollTo)
    }

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

    return (
        <>
            <CakePhotoExpandedDrawer
                isOpen={isOpen}
                onClose={onClose}
                photo={cake.photos[currentSlider].url}
            />
            <S.ExpandPhoto onClick={onOpen}>
                <FaSearchPlus />
            </S.ExpandPhoto>
            <S.Slider ref={sliderRef}>
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
            </S.Slider>
            <S.DotSlider>
                {items?.map(({ id, scroll }: Item, i: number) => {
                    return (
                        <CheckboxDot
                            onCheckedChange={() => setCurrentSlider(i)}
                            onChange={() => handleCheckDot(i)}
                            isChecked={scroll === currentScroll}
                            key={id + i + '_dot'}
                        />
                    )
                })}
            </S.DotSlider>
        </>
    )
}

export default MobalSlider
