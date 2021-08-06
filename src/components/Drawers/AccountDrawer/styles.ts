import styled from 'styled-components'
import {
    DrawerContent as ChakraDrawerContent,
    Avatar as ChakraAvatar
} from '@chakra-ui/react'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

export const DrawerContent = styled(ChakraDrawerContent)`
    ${tw`

    `};
`

export const UserNotLogged = styled.div``

export const Avatar = styled(ChakraAvatar).attrs({
    size: 'lg'
})``

export const UserNotLoggedHeader = styled.header`
    ${tw`
        flex items-center justify-start
        w-full mt-3
    `};
    p {
        ${tw`ml-3 text-lg leading-6`};
    }
`

export const UserNotLoggedFooter = styled.footer`
    ${tw`
        grid grid-cols-2 gap-x-3 mt-6
    `};

    button {
        ${tw`
            text-center w-full h-12
            border-2 rounded-md font-medium
            text-md
            border-orange-500 text-orange-500
            hover:(bg-orange-500 border-orange-100 text-white)
            focus:(border-0 ring-2 ring-orange-100)
        `};
    }
`

export const ServiceList = styled.ul`
    ${tw`
        flex flex-col mt-4
    `};
`
export const ServiceListItem = styled(motion.li)`
    ${tw`
        w-full h-14 hover:(text-orange-500 border-orange-100)
        cursor-pointer
    `};

    :first-of-type {
        ${tw`bg-orange-100 cursor-default h-12`};
        strong {
            ${tw`
                text-white text-lg w-full h-full flex
                items-center justify-start pl-4
            `};
        }
    }
    & + & {
        ${tw`border-t-2 border-gray-500`};
        border-top-width: 1px;
    }
    a {
        ${tw`
            flex items-center w-full h-full
            justify-start text-lg
        `};
        span {
            ${tw`
                mr-2 flex items-center justify-center
                text-2xl
            `};
        }
    }
`

export const UserLogged = styled.div`
    ${tw`mt-2 flex justify-start items-center`};
    div {
        ${tw`ml-3 flex items-start justify-start flex-col mb-auto mt-1`};
        strong {
            ${tw`text-xl font-semibold leading-6`};
        }
    }
`

export const AccountServices = styled(ServiceList)`
    height: max-content;
`
export const AccountServiceListItem = styled(ServiceListItem)``
