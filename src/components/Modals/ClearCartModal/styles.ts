import styled from 'styled-components'
import tw from 'twin.macro'

import { ModalContent as ChakraModalContent } from '@chakra-ui/react'

export const ModalContent = styled(ChakraModalContent).attrs({})`
    header {
        ${tw`
            pb-0
        `}
    }

    > div {
        ${tw`
            px-8 text-center
        `};
        strong {
            ${tw`
                text-2xl font-sans
            `};
        }
        p {
            ${tw`
                text-md
            `};
        }
    }
    footer {
        ${tw`
            grid grid-cols-2 mt-4
            h-12 py-0 mb-5
            gap-2
        `};
        button {
            ${tw`
                w-full h-full border-2
                font-sans text-md font-medium
                rounded-md transition-colors
            `};
            outline: none !important;
            :first-of-type {
                ${tw`
                    border-red-300 text-red-400 hover:text-white
                    hover:bg-red-400 hover:border-red-200 focus:border-0
                    focus:ring-2
                `};
            }
            :last-of-type {
                ${tw`
                    bg-green-400 border-2 text-white
                    border-green-100 hover:bg-green-600 hover:border-green-300
                    focus:border-0 focus:ring-2
                `};
            }
        }
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-10 h-10 border-2
        flex items-center justify-center
        text-white bg-orange-500 hover:border-red-100
        focus:border-0 focus:ring-2 ml-auto
        rounded-lg transition-colors text-2xl
        hover:bg-red-500
    `};
    outline: none !important;
`
