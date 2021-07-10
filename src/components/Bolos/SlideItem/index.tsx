import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { Container } from './styles'
import { useElementScroll, useViewportScroll } from 'framer-motion'

type Photo = {
    id: string
    url: string
}
type Cake = {
    name: string
}
interface SlideProps {
    cake: Cake
    photo: Photo
}

const SlideItem: React.FC<SlideProps> = ({ photo, cake }) => {
    const hiddenRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        hiddenRef.current.addEventListener('focus', () => console.log('asd'))
    }, [])

    return (
        <Container ref={hiddenRef} transition={{ duration: 1 }}>
            <Image
                width={600}
                objectFit="cover"
                height={600}
                src={photo.url}
                alt={cake.name}
            />
        </Container>
    )
}

export default SlideItem
