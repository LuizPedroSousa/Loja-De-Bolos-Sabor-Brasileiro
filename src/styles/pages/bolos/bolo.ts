import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DrawerContent as ChakraDrawerContent } from '@chakra-ui/react'
export const Container = styled.div`
    ${tw`
        relative mb-10 w-full mt-8 l:mt-4
        xs:px-4 md-3:px-0 grid
    `};

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        ${tw`
            mx-auto
        `};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1360px;

        ${tw`
            px-5
        `};
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const CakePhotosSection = styled.section`
    ${tw`
        flex items-start relative w-full
    `};
`
export const MobalSlider = styled.div`
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

export const DrawerContent = styled(ChakraDrawerContent).attrs({
    p: 0,
    overflow: 'hidden'
})`
    > div,
    header {
        ${tw`p-0! m-0! relative`}
    }
    > div {
        ${tw`w-full h-full overflow-scroll`}
        div {
            ${tw`object-cover`}
        }
    }
`

export const ClosePhoto = styled.button`
    ${tw`
        w-8 h-8 flex items-center justify-center
        ml-auto text-pink-400 border-2 border-pink-400
        rounded-md right-3 top-3 absolute z-10
        transition-colors duration-500
        hover:(bg-red-500 border-red-300 text-white)
        focus:(ring-2 ring-red-300 border-0)
    `}
`
