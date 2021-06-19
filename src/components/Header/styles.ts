import styled from 'styled-components'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { ActiveHrefType } from '.'

interface ContainerProps {
    activePage: ActiveHrefType
}

export const Container = styled(motion.header)<ContainerProps>`
    ${tw`
        w-full relative top-0 left-0
    `};
    z-index: 1000;

    ${({ activePage }) =>
        activePage !== '/'
            ? tw`
                bg-white
                shadow-md
            `
            : tw`bg-transparent`};
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
        padding: 1rem 0;
    }
`

export const Logo = styled.a`
    ${tw`cursor-pointer w-20 l:w-36`};
`

export const PageLinks = styled.div`
    ${tw`
        l:w-full l:flex
        l:items-center l:justify-center
    `};
`
