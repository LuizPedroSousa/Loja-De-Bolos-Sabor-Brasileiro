import styled from 'styled-components'
import { lighten, shade } from 'polished'
import tw, { theme } from 'twin.macro'

interface ListProps {
    hasActivePage: boolean
}

interface ItemInfoProps {
    hasDownAmount: boolean
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

export const Cart = styled.button`
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
        color: ${shade(0.05, theme`colors.white`)};

        p {
            ${tw`
                    absolute -bottom-2
                    flex items-center justify-center
                    font-normal font-sans text-md
                    text-gray-400 left-0 rounded-full
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

export const CartContent = styled.div`
    header {
        ${tw`
            w-full
        `};
        strong {
            ${tw`
                text-orange-500 text-xl capitalize
            `};
        }
    }
    footer {
        ${tw`
            rounded-b-md pb-0
            flex flex-col pt-2 w-full bg-orange-100
        `};

        p {
            ${tw`
                flex justify-between items-center
                pb-4 pt-2
                px-4 text-white font-medium
            `};
            span {
                ${tw`ml-auto`}
            }
        }
        a {
            ${tw`
                rounded-b-md
                w-full text-white
                font-medium text-lg flex items-center
                justify-center h-16 bg-orange-500
                hover:bg-orange-700 focus:ring-2
            `};
        }
    }
`

export const CartItem = styled.div`
    ${tw`
        flex items-start justify-start w-full
    `};
    img {
        ${tw`
            w-20 h-20 rounded-3xl
        `};
    }

    & + & {
        ${tw`mt-6`};
    }
`

export const ItemInfo = styled.div<ItemInfoProps>`
    ${tw`ml-4 h-full`};
    p {
        span {
            ${tw`text-blue-100`};
        }
        ${tw`text-blue-400`};
    }
    div {
        ${tw`
            w-max mt-2
            flex
            items-center justify-between
        `};
        span {
            ${tw`mx-2 font-medium text-blue-400`};
        }
        button {
            ${tw`
                bg-orange-500 hover:bg-orange-700 focus:ring-2
                outline-none text-white rounded-md p-1
            `};
            :last-of-type {
                ${({ hasDownAmount }) => !hasDownAmount && tw`opacity-20`};
            }
        }
    }
`

export const AnyItems = styled.div`
    ${tw`
        w-full py-10 flex items-center justify-center
    `};
    p {
        ${tw`
            text-blue-100 text-md
        `};
    }
`

export const CartRemoveItem = styled.button`
    font-size: 0;
    ${tw`
        w-5 h-5 p-1 overflow-hidden rounded-md bg-red-400 text-white
        flex items-center justify-center outline-none
        focus:ring-2 ml-auto
    `};
    svg {
        outline: none;
    }
`
