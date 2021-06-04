import styled from 'styled-components'
import { lighten, shade } from 'polished'
import tw, { theme } from 'twin.macro'

interface ListProps {
    hasActivePage: boolean
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
                    text-blue-700 left-0 rounded-full
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

export const CartFooter = styled.footer`
    ${tw`
        flex flex-col  w-full bg-orange-100
    `};

    p {
        ${tw`
            flex justify-between
            mb-4
            px-4 text-white font-medium
        `};
        span {
            ${tw`ml-auto`}
        }
    }
    a {
        ${tw`w-full text-white font-medium text-lg flex items-center justify-center h-14 bg-orange-500`};
    }
`

export const CartItem = styled.div`
    ${tw`
        flex items-center justify-between w-full

    `};
`
