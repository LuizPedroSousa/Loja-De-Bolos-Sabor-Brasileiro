import styled from 'styled-components'
import { lighten, shade } from 'polished'
import tw, { theme } from 'twin.macro'
import { ActiveHrefType } from '.'
interface ListProps {
    hasActivePage: boolean
}
interface CartProps {
    activePage: ActiveHrefType
}

type UserAccountProps = CartProps & {}
type UnorderedListProps = CartProps & {}

export const UnorderedList = styled.ul<UnorderedListProps>`
    ${tw`
        flex w-max flex-row relative
        items-center justify-center bg-transparent
        ml-48
    `};
    z-index: 9999;
    ${({ activePage }) => activePage !== '/' && tw`ml-auto`}
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
                width: 10px;
                height: 10px;
                background-color: ${colors.orange[500]};
                border-radius: 80%;
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

export const ButtonDrawersContainer = styled.div`
    ${tw`
        flex items-center justify-center
        ml-auto
    `};
`

export const UserAccount = styled.button<UserAccountProps>`
    ${tw`
       flex items-center justify-start
       hover:(opacity-50)
    `};

    p {
        ${tw`
            text-left leading-4 transition-colors
        `};

        color: ${({ activePage }) =>
            activePage !== '/' ? theme`colors.gray.700` : theme`colors.white`};
    }

    span {
        ${tw`
            text-md w-12 h-12 transition-colors
            flex items-center justify-center
        `};
        color: ${({ activePage }) =>
            activePage !== '/'
                ? theme`colors.orange.100`
                : shade(0.05, theme`colors.white`)};
    }

    :hover {
        span {
            color: ${shade(0.2, theme`colors.white`)};
        }
    }
`

export const Cart = styled.button<CartProps>`
    color: ${shade(0.05, theme`colors.white`)};
    ${tw`
        font-sans text-md flex
        items-center justify-center
        bg-transparent mb-3 ml-4
    `};
    span {
        ${tw`
            w-14 h-14 relative transition-colors
        `};
        color: ${({ activePage }) =>
            activePage !== '/'
                ? theme`colors.orange.100`
                : shade(0.05, theme`colors.white`)};

        ${({ activePage }) => activePage !== '/' && tw`mt-1`}
        p {
            ${tw`
                    absolute -bottom-2
                    flex items-center justify-center
                    font-normal font-sans text-md
                    text-gray-100 left-0 rounded-full
                    bg-yellow-400
            `};
            ${({ activePage }) => activePage !== '/' && tw`bottom-0.5 left-0.5`}

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

export const SendSolicitation = styled.a`
    ${tw`
        ml-auto bg-orange-500 h-11
        flex items-center justify-center
        text-white font-roboto font-semibold
        px-6 rounded-md uppercase cursor-pointer
        transition-colors select-none
        hover:(bg-orange-700 border-2 border-orange-100)
        focus:(ring-2 border-0 ring-orange-100)
    `}
`
