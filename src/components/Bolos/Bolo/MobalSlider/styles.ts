import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Slider = styled.div`
    ${tw`relative overflow-x-auto flex transition-transform`};
    width: 100vw;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
`

export const DotSlider = styled.div`
    ${tw`
        absolute bottom-4
        flex items-center justify-center
        right-4
    `}
`

export const ExpandPhoto = styled.button`
    ${tw`
        absolute top-2 left-2 w-8 h-8 z-10
        border-orange-500 border-2 flex items-center justify-center
        rounded-full text-md text-orange-500
        opacity-75 transition-colors duration-300
        hover:(border-orange-100)
        focus:(border-0 ring-2 ring-orange-100)
    `};
    :hover,
    :focus {
        ${tw`bg-orange-500 text-white`}
    }
`

export const SlideItem = styled(motion.div)`
    ${tw`min-w-full h-full relative`};

    scroll-snap-align: start;
`
