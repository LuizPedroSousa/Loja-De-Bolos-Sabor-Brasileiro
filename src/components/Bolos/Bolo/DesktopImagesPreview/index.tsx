import Image from 'next/image'
import React, { useState } from 'react'
import SwiperCore, { Pagination, Thumbs, Zoom } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './styles'
import 'swiper/swiper.min.css'
import 'swiper/components/thumbs/thumbs.min.css'
import 'swiper/components/zoom/zoom.min.css'

type Photo = {
    id: string
    url: string
}

type Cake = {
    name: string
    photos: Photo[]
}

interface DesktopImagesPreviewPros {
    cake: Cake
}

SwiperCore.use([Pagination, Thumbs, Zoom])

const DesktopImagesPreview: React.FC<DesktopImagesPreviewPros> = ({ cake }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <S.SmallCakeThumbs>
                <Swiper
                    direction="vertical"
                    spaceBetween={0}
                    draggable={false}
                    slidesPerView="auto"
                    slideToClickedSlide={true}
                    onSwiper={setThumbsSwiper}
                >
                    {cake.photos.map((photo, i) => (
                        <SwiperSlide
                            key={'thumb_swiper_slide_' + photo.id + photo.url}
                        >
                            <Image
                                src={photo.url}
                                width={600}
                                height={600}
                                objectFit="cover"
                                alt={cake.name + i}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.SmallCakeThumbs>
            <S.LargeSlider>
                <Swiper
                    autoplay
                    zoom
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    slidesPerView={1}
                >
                    {cake.photos.map(photo => (
                        <SwiperSlide key={photo.id}>
                            <Image
                                alt={cake.name}
                                className="cake-slide-img"
                                width={1200}
                                height={1200}
                                objectFit="contain"
                                src={photo.url}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </S.LargeSlider>
        </>
    )
}

export default DesktopImagesPreview
