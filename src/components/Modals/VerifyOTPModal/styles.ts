import styled from 'styled-components'

import {
    ModalContent as ChakraModalContent,
    PinInputField as ChakraPinInputField,
    CircularProgress as ChakraCircularProgress
} from '@chakra-ui/react'
import tw from 'twin.macro'
import ErrorMessage from '../SignAndSignupModal/ErrorMessage'
export const ModalContent = styled(ChakraModalContent).attrs({
    py: '6',
    maxW: 'md'
})`
    form {
        ${tw`h-full w-full`};
        > div {
            h2 {
                ${tw`
                text-md font-bold
                font-roboto
            `};
            }
            p {
                ${tw`mt-2 text-md font-medium font-roboto leading-5`};
                max-width: 90%;
                b {
                    ${tw`text-sm font-bold`};
                }
            }
            a {
                ${tw`
                text-orange-500 font-medium mt-1
                block font-roboto w-max text-sm
                hover:(underline text-orange-700)
            `};
            }
            button[type='button'] {
                ${tw`
                border-0 bg-transparent text-sm
                mt-2 font-medium text-orange-500 font-roboto
                hover:(text-orange-700 underline)
            `};
            }
        }

        footer {
            ${tw`
            w-full flex items-center
            justify-end mt-2
        `};
            button {
                ${tw`
                w-20 h-10 flex items-center justify-center
                rounded-md font-medium font-roboto relative
                bg-orange-500 text-white
                hover:(border-2 border-orange-100)
                focus:(border-0 ring-2 ring-orange-500 bg-white text-orange-500)
            `};
            }
        }
    }
`

export const Title = styled.div`
    ${tw`
        flex items-center justify-center
    `};
    span {
        ${tw`
            w-14
            mr-2
        `};
    }
    h2 {
        ${tw`
            mt-auto text-xl
        `};
    }
`

export const PinGroup = styled.div`
    ${tw`
        grid grid-cols-6 items-center
        mt-3 gap-x-3
    `};
`

export const PinInputField = styled(ChakraPinInputField).attrs({
    borderColor: 'orange.500',
    focusBorderColor: 'none'
})`
    ${tw`
        w-full! text-orange-500!
        rounded-md! flex items-center justify-center
        hover:(border-orange-100)!
        focus:(border-0! ring-2 ring-orange-500)!
        placeholder:(text-orange-500)!
    `};
    height: 2.8rem !important;
`

export const CircularProgress = styled(ChakraCircularProgress).attrs({
    isIndeterminate: true,
    bg: 'none',
    size: '18px',
    trackColor: 'none',
    color: 'indigo.200'
})`
    ${tw`
        justify-center!
    `};
`

export const CustomErrorMessage = styled(ErrorMessage)`
    ${tw`
        bottom-3!
    `};
    p {
        ${tw`m-0! max-w-full!`};
    }
`
