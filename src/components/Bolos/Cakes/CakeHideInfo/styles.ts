import { motion } from 'framer-motion'
import { shade } from 'polished'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled(motion.div)`
    ${tw`
        flex items-center justify-center
        flex-col w-64 mx-auto
        rounded-t-lg border-2 rounded-b-lg
        z-10 transition-colors relative
        overflow-hidden sm:w-56 md:w-64
    `};

    header {
        ${tw`
            flex flex-col items-center
            px-4 pt-4 pb-2 transition-colors
            w-full bg-white cursor-pointer
        `};
    }
    footer {
        ${tw`
            w-full border-b-4 rounded-b-lg
            border-orange-500 overflow-hidden transition-colors
            hover:border-orange-700
        `};
    }

    :hover {
        ${tw`
            shadow-xl relative z-50!
            border-orange-100
        `};

        header {
            img {
                ${tw`transition-transform duration-1000`}
            }
            img {
                ${tw`
                    transform scale-110
                `};
            }
        }
        header,
        > div {
            background-color: ${shade(0.02, theme`colors.gray.100`)};
        }
    }
`

export const Thumb = styled.div`
    ${tw`
        w-full h-56 rounded-md
        overflow-hidden sm:h-48 md:h-56
    `};
`

export const Stars = styled.div`
    ${tw`
        flex items-center justify-between
        mt-2 mr-auto
    `};
    span {
        ${tw`
            text-gray-800 font-medium font-inter
            ml-1
        `};
    }
`

export const Info = styled.div`
    ${tw`
        w-full flex items-center bg-white
        justify-between py-3 flex-col
        font-cake-variant border-orange-100
        relative cursor-pointer transition-colors
    `};
    border-top-width: 1px;

    strong {
        ${tw`
            capitalize text-md
            text-blue-700 font-bold
        `};
    }
    span {
        ${tw`
            mt-2 font-normal text-blue-600
            text-md
        `};
    }
`
export const AddToCart = styled.button`
    ${tw`
        w-full h-16 flex
        items-center justify-center bg-orange-100
        text-white font-medium border-0
        transition-colors
        outline-none focus:ring-2 hover:bg-orange-500
    `};
    span {
        ${tw`
            mr-2
        `};
    }
`
