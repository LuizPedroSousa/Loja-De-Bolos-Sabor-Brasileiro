import styled from 'styled-components'
import { lighten } from 'polished'
import { motion } from 'framer-motion'
import tw from 'twin.macro'

interface LinkListProps {
    hasActivePage: boolean
}

export const Container = styled(motion.header)`
    ${tw`
        w-full flex justify-between
        items-center relative top-0
        left-0 p-5 md:px-0 md:mx-auto
    `};
    z-index: 1000;
    transition: 0.25s;

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 88%;
        padding: 1.25rem 0;
    }
`

export const Nav = styled.nav`
    ${tw`
        l:w-full l:flex
        l:items-center l:justify-center
    `};
`

export const Logo = styled.a`
    ${tw`cursor-pointer relative l:bottom-2`};
    img {
        ${tw`w-20 l:w-36`};
    }
`

export const LinkList = styled.li<LinkListProps>`
    ${tw`
        w-full h-12 flex items-center
        justify-center
    `};
    background-color: shade(0.8, ${({ theme: { colors } }) => colors.bg});
    a {
        ${tw`
            py-4 flex items-center
            justify-center relative
            text-center h-full text-blue-700
            no-underline text-md font-medium
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
`
