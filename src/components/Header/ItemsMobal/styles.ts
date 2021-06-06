import styled from 'styled-components'
import { lighten } from 'polished'
import tw, { theme } from 'twin.macro'
import { ModalContent as ChakraModalContent } from '@chakra-ui/react'
interface LinkListProps {
    hasActivePage: boolean
}

export const HamburgerButton = styled.button`
    ${tw`
        w-20 h-16 p-6 bg-transparent
        flex items-center justify-center
    `};

    :hover {
        .MuiButton-label {
            svg {
                fill: shade(0.2, ${({ theme: { colors } }) => colors.white});
            }
        }
    }
`

export const LinkList = styled.li<LinkListProps>`
    ${tw`
        w-full h-16
        flex items-center justify-center
    `};
    a {
        ${tw`
            py-4 flex items-center
            relative justify-center
            text-center h-full text-blue-700
            no-underline
            w-full text-md font-medium
            hover:underline
        `};

        transition: 0.25s;
        ::after {
            ${({ hasActivePage }) =>
                hasActivePage &&
                `
                content: '';
                position: absolute;
                bottom: 0.25rem;
                background: ${theme`colors.orange.500`};
                width: 0.625rem;
                height: 0.625rem;
                border-radius: 50%;
            `};
        }
        :hover {
            color: ${lighten(0.2, theme`colors.blue.700`)};
        }
    }
`

export const CartMobal = styled.button`
    ${tw`
        w-full
        flex flex-col items-center justify-center
        py-1.5 mt-4 text-md font-medium text-blue-700
    `};
    span {
        ${tw`
            text-orange-500
            flex items-center justify-center relative
        `};
        p {
            ${tw`
                absolute left-0 bottom-0 rounded-full
                w-4 h-4 bg-yellow-400
                flex items-center text-center
                justify-center
                text-gray-400
            `};
        }
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-16 flex ml-auto bg-orange-500 rounded-xl
        text-white items-center py-4 justify-center h-16
        outline-none focus:ring-2
    `};
`

export const ModalContent = styled(ChakraModalContent).attrs({
    bg: 'white',
    mx: [2, 4],
    pb: [2, 4]
})`
    header {
        ${tw`
            flex items-center justify-between
            text-orange-500 border-b-2 border-gray-100
        `};
        button {
            ${tw`
                bg-orange-500 text-white rounded-md p-1
                w-10 h-10 flex items-center justify-center
                outline-none focus:ring-2 hover:bg-orange-700
            `};
        }
    }
    > div {
        ${tw`mt-4 py-4 xs:py-6`};
    }

    footer {
        ${tw`
            w-full flex flex-col
        `};
        div {
            ${tw`
                rounded-t-md
                bg-orange-500 w-full flex items-center justify-center
                h-16
            `};
            p {
                ${tw`
                    text-white font-medium text-md
                `};
            }
        }
        a {
            ${tw`
                w-full h-20 bg-orange-500 flex items-center
                justify-center text-white font-medium text-lg
                no-underline
                rounded-b-xl focus:ring-2 hover:bg-orange-700
            `};
        }
    }
`

export const CartItem = styled.div`
    ${tw`
        border-2 border-gray-100
        p-2 pr-2 rounded-md
        w-full flex items-center justify-start
    `};

    img {
        ${tw`
            w-16 h-16
            rounded-md
        `};
    }

    & + & {
        ${tw`
            mt-4
        `};
    }
`

export const ItemInfo = styled.div`
    ${tw`
        flex items-start justify-center ml-2
        flex-col
    `};
    p {
        ${tw`text-blue-700 justify-center flex flex-col font-medium `};
        span {
            ${tw`
                text-blue-400
            `};
        }
    }
    div {
        ${tw`flex w-max items-center justify-between`};
        button {
            ${tw`
                w-6 h-6 bg-orange-500 focus:ring-2 hover:bg-orange-700
                flex items-center justify-center text-white rounded-lg
            `};
        }
        span {
            ${tw`mx-1 font-sans font-medium text-blue-100`};
        }
    }
`

export const CartRemoveItem = styled.button`
    ${tw`
        ml-auto mb-auto bg-red-400 w-6 h-6
        flex items-center justify-center text-white
        rounded-lg
    `};
`

export const AnyItems = styled.div`
    ${tw`
        w-full flex items-center justify-center
        flex-col mt-4 py-4
    `};
    p {
        ${tw`
            text-gray-400
            text-lg capitalize font-medium
        `};
    }

    span {
        ${tw`mt-2`};
    }
`
