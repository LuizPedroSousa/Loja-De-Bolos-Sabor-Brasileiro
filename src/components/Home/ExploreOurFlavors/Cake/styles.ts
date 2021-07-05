import styled from 'styled-components'
import { shade } from 'polished'
import { motion } from 'framer-motion'
import tw, { theme } from 'twin.macro'

export const Container = styled(motion.div)`
    ${tw`
        relative shadow-md-bg
        overflow-hidden hover:shadow-xl rounded-3xl
    `};
    & + & {
        ${tw`
            mt-7 md:m-0
        `};
    }
    img {
        transition: 0.25s;
        border-radius: 1.563rem;
        ${tw`
            w-full h-full cursor-pointer
            transition-transform duration-500
        `};

        border-bottom-left-radius: 20%;
        border-bottom-right-radius: 20%;
    }
    height: 20%;

    :hover {
        img {
            transform: scale(1.1) !important;
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        height: 25.5rem;
        width: 27rem;
        img {
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        height: 34.5rem;
        width: 32.063rem;
        img {
            border-bottom-left-radius: 30%;
            border-bottom-right-radius: 30%;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        height: 30.5rem;
        ${tw`w-auto`};
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        height: 26.5rem;
    }
`

export const CakeInfo = styled.div`
    ${tw`
        flex flex-col items-start
        justify-center w-full absolute bg-white
        shadow-md-bg h-36
        bottom-0 xs:h-40 l:h-44
    `};
`

export const Header = styled.header`
    ${tw`
        flex justify-between
        items-center px-4 w-full
    `};

    p {
        ${tw`
            text-xl text-blue-700
            font-medium capitalize
        `};
    }
    strong {
        ${tw`
            text-2xl text-orange-500 whitespace-nowrap
        `};
    }
`

export const Footer = styled.footer`
    ${tw`
        mt-4 flex justify-between
        items-center w-full pl-4
    `};
    p {
        ${tw`w-max overflow-hidden overflow-ellipsis`};
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        line-height: 143%;
    }
    button {
        ${tw`
            w-80 text-orange-500 font-sans font-normal text-sm
            bg-beige-400 overflow-hidden
            flex items-center justify-center
            outline-none focus:ring-2
        `};
    }
    button,
    a {
        border-top-left-radius: 6.25rem;
        border-bottom-left-radius: 6.25rem;
        height: 2.813rem;
        :hover {
            background-color: ${shade(0.05, theme`colors.beige.400`)};
        }
    }

    a {
        ${tw`
            w-40 text-orange-500 font-sans font-normal text-sm
            bg-beige-400 overflow-hidden
            flex items-center justify-center
            outline-none focus:ring-2
        `};
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        margin-top: 0.875rem;
        button {
            width: 48%;
        }
        p {
            width: 48%;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        p {
            width: 58%;
        }
    }
`
