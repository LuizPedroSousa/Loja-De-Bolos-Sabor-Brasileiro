import styled from 'styled-components'
import { lighten } from 'polished'
import tw, { theme } from 'twin.macro'

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
                flex items-center
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
