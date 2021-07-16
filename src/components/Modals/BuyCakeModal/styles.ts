import styled from 'styled-components'
import { ModalContent as ChakraModalContent } from '@chakra-ui/react'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const ModalContent = styled(ChakraModalContent).attrs({
    px: 0,
    pb: 4,
    mx: { base: 2 }
})`
    header {
        ${tw`
            flex items-center justify-start
        `}
    }

    > div {
        ${tw`
            flex flex-col justify-center items-center
        `}
    }

    footer {
        ${tw`
            w-full grid gap-y-2 items-center
            grid-cols-1 sm:(gap-y-0 gap-x-2)
        `}

        a {
            ${tw`
                w-full h-14 rounded-md border-2
                text-md font-medium font-inter duration-200
                flex items-center justify-center
                bg-orange-500 text-white
                hover:(border-orange-100 bg-orange-700)
                focus:(border-0 ring-2 ring-orange-500 text-orange-500 bg-white)
                cursor-pointer
            `}
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        footer {
            grid-template-columns: 1fr 1fr;
        }
    }
`

export const CloseButton = styled(motion.button)`
    ${tw`
        w-8 h-8 border-2 border-red-500
        rounded-md text-red-500 duration-200
        hover:(bg-red-500 border-red-100 text-white)
        ml-auto flex items-center justify-center
    `};
`

export const CakeThumb = styled(motion.div)`
    ${tw`
        w-48 h-52 rounded-md overflow-hidden
        sm:(w-52 h-56)
    `};
    img {
        ${tw`w-full h-full`};
    }
`

export const Info = styled.div`
    ${tw`
        mt-6 text-center
    `};

    strong {
        ${tw`
            text-xl capitalize
            font-sans text-gray-800
        `};
    }

    p {
        ${tw`
            font-medium font-sans text-gray-700
        `}
    }
`
