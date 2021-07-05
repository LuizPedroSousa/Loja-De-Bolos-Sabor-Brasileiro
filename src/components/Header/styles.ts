import styled from 'styled-components'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { ActiveHrefType } from '.'

interface ContainerProps {
    activePage: ActiveHrefType
}

type LogoProps = ContainerProps & {}
export const Container = styled(motion.header)<ContainerProps>`
    ${tw`
        w-full relative top-0 left-0
    `};
    z-index: 1000;

    ${({ activePage }) =>
        activePage !== '/'
            ? tw`
                bg-white
                border-b-2 brightness-200
            `
            : tw`bg-transparent`};
    ${({ activePage }) => activePage !== '/' && 'height: 80px;'};
    nav {
        @media ${({ theme: { bp } }) => bp.l} {
            ${({ activePage }) =>
                activePage !== '/'
                    ? tw`
                    py-4
                    `
                    : tw`py-4`};
        }
    }
`

export const Nav = styled.nav`
    transition: 0.25s;
    ${tw`
        w-full flex justify-between items-center
         p-5 md:px-0 md:mx-auto
        h-full
    `};

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 88%;
    }
`

export const Logo = styled.a<LogoProps>`
    ${tw`cursor-pointer w-20 l:w-36`};

    ${({ activePage }) => activePage !== '/' && tw`l:w-32`};
`

export const PageLinks = styled.div`
    ${tw`
        l:w-full l:flex
        l:items-center l:justify-center
    `};
`
