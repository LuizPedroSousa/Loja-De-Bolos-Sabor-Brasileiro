import styled from 'styled-components'
import { lighten, shade } from 'polished'
import tw, { theme } from 'twin.macro'
import { ActiveHrefType } from '.'
import {
    DrawerContent as ChakraDrawerContent,
    DrawerBody as ChakraDrawerBody,
    DrawerFooter as ChakraDrawerFooter
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ListProps {
    hasActivePage: boolean
}

interface DrawerFooterProps {
    hasItems: boolean
}

interface AmountControlsProps {
    hasDownAmount: boolean
}

interface CartProps {
    activePage: ActiveHrefType
}

export const UnorderedList = styled.ul`
    ${tw`
        flex w-max flex-row relative
        items-center justify-center bg-transparent
        ml-48
    `};
    z-index: 9999;
`

export const List = styled.li<ListProps>`
    ${tw`
        h-12
        flex items-center w-max
        px-4 justify-center
    `};
    background-color: shade(0.8, ${({ theme: { colors } }) => colors.bg});
    a {
        ${tw`
            flex items-center justify-center
            relative text-center h-full text-blue-700
            text-md font-medium no-underline
            hover:underline
        `};
        width: 90%;
        transition: 0.25s;
        ::after {
            ${({ hasActivePage, theme: { colors } }) =>
                hasActivePage &&
                `
                content: '';
                position: absolute;
                bottom: 0;
                width: 0.625rem;
                height: 0.625rem;
                background-color: ${colors.orange[500]};
                border-radius: 50%;
            `};
        }
        :hover {
            color: ${({ theme: { colors } }) => lighten(0.2, colors.blue[700])};
        }
    }

    button {
        ${tw`py-4`};
    }

    & + li {
        ${tw`ml-4`};
    }
`

export const Cart = styled.button<CartProps>`
    color: ${shade(0.05, theme`colors.white`)};
    ${tw`
        font-sans text-md flex
        items-center justify-center ml-auto
        bg-transparent
    `};
    span {
        ${tw`
                w-16 h-16 relative
            `};
        transition: 0.25s;
        color: ${({ activePage }) =>
            activePage !== '/'
                ? theme`colors.orange.100`
                : shade(0.05, theme`colors.white`)};
        p {
            ${tw`
                    absolute -bottom-2
                    flex items-center justify-center
                    font-normal font-sans text-md
                    text-gray-100 left-0 rounded-full
                    bg-yellow-400
            `};
            width: 1.625rem;
            height: 1.625rem;
        }
    }
    :hover {
        span {
            color: ${shade(0.2, theme`colors.white`)};
        }
    }
`

export const DrawerContent = styled(ChakraDrawerContent)`
    header {
        ${tw`
            flex items-center justify-between
            w-full
        `};
        strong {
            ${tw`
                font-semibold
            `};
        }
    }
`

export const ExitButton = styled(motion.button)`
    ${tw`
        w-9 h-9 bg-orange-500
        border-2 hover:border-orange-100 focus:ring-2
        focus:border-0 flex items-center
        hover:bg-orange-700 justify-center
        text-white rounded-lg
    `};
`

export const DrawerBody = styled(ChakraDrawerBody)`
    ${tw`overflow-y-scroll`};
`

export const CakeItem = styled.div`
    ${tw`
        w-full flex items-center justify-between
        px-2 py-4 relative
    `};
    button {
        ${tw`
            p-0 w-6 h-6
            flex items-center justify-center
        `};
    }
`

export const Thumb = styled.div`
    ${tw`
        w-20 h-20 rounded-md
        overflow-hidden border-2 border-orange-100
    `};
`

export const Info = styled.div`
    ${tw`
        flex items-start justify-start
        flex-col mr-auto h-full
        ml-4
    `};
    strong {
        ${tw`
            capitalize whitespace-nowrap font-inter
            text-blue-400
        `};
    }
    p {
        ${tw`
            font-sans font-medium text-blue-100
            mb-auto
        `}
    }
`

export const AmountControls = styled.div<AmountControlsProps>`
    ${tw`
        flex items-center justify-between
        rounded-md h-6 mt-1
    `};
    span {
        ${tw`
            mx-2 font-roboto font-medium
        `};
    }
    button {
        :first-of-type {
            ${tw`
                text-red-400 hover:bg-red-400 hover:border-red-100
            `};
            ${({ hasDownAmount }) =>
                !hasDownAmount && tw`opacity-50 cursor-not-allowed`};
        }
        :last-of-type {
            ${tw`
                text-green-400 hover:bg-green-400 hover:border-green-100
            `};
        }
        ${tw`
            h-full w-6 border-2 rounded-md
            focus:ring-2 focus:border-0 hover:text-white
            focus:rounded-sm transition-colors
        `};
    }
`

export const CakeControls = styled.div`
    ${tw`
        flex flex-col h-full
        items-center justify-between
        absolute right-0 py-4
    `};

    button {
        :first-of-type {
            ${tw`
                rounded-md text-red-400 border-2
                border-red-100 mb-auto focus:ring-2
                hover:bg-red-400 hover:text-white
                hover:border-red-200
            `}
        }
    }
`

export const AnyItems = styled.div`
    ${tw`
        flex items-center justify-center
        flex-col h-full
    `};
    span {
        ${tw`mb-2`};
    }
    strong {
        ${tw`
            text-gray-700 text-xl
        `};
    }
    p {
        ${tw`
            text-center mt-1 font-medium
            text-gray-600
        `};
    }
`

export const DrawerFooter = styled(ChakraDrawerFooter).attrs({
    p: 0
})<DrawerFooterProps>`
    ${tw`
        flex flex-col
        items-center justify-center
    `};
    ${({ hasItems }) =>
        !hasItems &&
        tw`
            opacity-75
        `};
    div,
    button,
    a {
        ${({ hasItems }) =>
            !hasItems &&
            tw`
                cursor-not-allowed
            `};
        ${({ hasItems }) => !hasItems && 'pointer-events: none;'};
    }
`

export const CartOptions = styled.div`
    ${tw`
        px-6 grid items-center
        justify-center w-full h-14
        gap-x-2 mb-2
    `};
    grid-template-columns: 1.25fr 1fr;

    a,
    button {
        ${tw`
            flex items-center justify-center
            border-2 font-sans transition-colors
            rounded-md
            focus:border-0 focus:ring-2 h-full
        `};
    }
    button {
        ${tw`
             hover:border-red-100 hover:bg-red-400 hover:text-white
        `};
        span {
            ${tw`ml-1`};
        }
    }

    a {
        ${tw`
            bg-orange-500 text-white hover:border-orange-100
            hover:bg-orange-700 cursor-pointer focus:ring-2
        `};
    }
`

export const Total = styled.div`
    ${tw`
        grid items-center justify-center
        bg-orange-500 w-full
        px-6  h-20
    `};
    grid-template-columns: 1fr 1.25fr;
    a {
        ${tw`
            w-full h-14 bg-orange-100
            hover:bg-orange-700 flex font-inter
            items-center justify-center font-medium
            rounded-lg text-white text-md
            focus:ring-2 focus:border-0 hover:border-2
            hover:border-orange-100 transition-colors
        `};
    }
    strong {
        ${tw`
            mx-auto text-white font-inter
            text-md
        `};
    }
`
