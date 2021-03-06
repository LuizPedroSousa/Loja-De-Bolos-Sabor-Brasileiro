import styled from 'styled-components'
import { shade, transparentize } from 'polished'
import { motion } from 'framer-motion'
import tw, { theme } from 'twin.macro'

interface AddToCardProps {
    price: string
    hasCakeInCart: boolean
}

export const Container = styled(motion.div)`
    ${tw`
        w-full overflow-hidden relative
        shadow-sm rounded-3xl transition-none
        border-2 border-white
        hover:shadow-2xl xs:w-96 xs:h-96
    `};

    height: 20.875rem;
    z-index: 5;
    img {
        ${tw`
            w-full h-full cursor-pointer
            transition-transform duration-700
        `};
    }
    & + & {
        ${tw`mt-8 xs:mt-0`};
    }

    :hover {
        img {
            transform: scale(1.1) !important;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 24.875rem;
        height: 24.875rem;
        & + & {
            margin-left: 1.063rem;
        }
    }
    @media ${({ theme: { bp } }) => bp.l} {
        width: 28.875rem;
        height: 28.875rem;
    }
    @media ${({ theme: { bp } }) => bp.xl} {
        width: 30.875rem;
        height: 30.875rem;
    }
`

export const CakeInfo = styled.div`
    ${tw`
        absolute pl-2 w-full bottom-0
        flex flex-col items-center justify-center
    `};
    background-color: ${transparentize(0.3, theme`colors.orange.500`)};
    height: 12.224rem;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-left: 1.875rem;
    }
`

export const Header = styled.div`
    ${tw`
        w-full
    `};
    strong {
        ${tw`
            text-2xl text-white capitalize
        `};
    }
    p {
        ${tw`
            text-white overflow-hidden overflow-ellipsis
        `};
        max-width: 18.063rem;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        line-height: 143%;
    }
`

export const Footer = styled.div`
    ${tw`
        flex w-full
        mt-4 justify-between
    `};
    a {
        font-size: calc(${theme`fontSize.sm`} - 0.25rem);

        ${tw`
            flex items-center justify-center text-white
            no-underline hover:underline transition-all
            xs:text-sm
        `};
        span {
            ${tw`mr-1 xs:mr-2`}
        }
    }
`

export const AddToCard = styled(motion.button)<AddToCardProps>`
    ${tw`
        bg-white text-brown-500
        font-normal font-sans py-2 px-4
        h-12 w-48
        relative outline-none focus:ring-2
        shadow-md hover:shadow-lg
    `};
    border-top-left-radius: 6.25rem;
    border-bottom-left-radius: 6.25rem;

    ${({ hasCakeInCart }) => hasCakeInCart && tw`w-48 font-medium py-0`};
    ::after {
        content: 'R$ ${({ price }) => price}';
        ${tw`
            absolute -top-6 text-white font-sans
            font-bold text-md left-2
        `};
    }
    :hover {
        background-color: ${shade(0.1, theme`colors.white`)};
    }
`
