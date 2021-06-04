import { motion } from 'framer-motion'
import { shade } from 'polished'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import Background from '../../../../public/images/carousel-background.svg'

interface ArrowsProps {
    hasNext: boolean
    hasPrevious: boolean
}
export const Section = styled.section`
    ${tw`w-full flex flex-col`};

    @media ${({ theme: { bp } }) => bp['3md']} {
        display: grid;
        ${tw`grid grid-cols-max-2`};
        grid-template-rows: 1fr max-content;
        grid-template-areas:
            'search carousel'
            'contact carousel';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 1fr max-content 1fr max-content 1fr;
        grid-template-areas:
            '. search . carousel .'
            'contact contact . carousel .';
    }
`
export const SearchLocals = styled.div`
    ${tw`mx-5 md:mx-8 md-3:ml-10 l:px-0 l:mx-0 xl:ml-20`};
    grid-area: search;
    span {
        font-size: 6.25rem;
        line-height: 48px;
        ${tw`text-blue-700 font-black sm:text-10xl md:text-11xl l:text-14xl xl:text-15xl`};
        opacity: 5%;
    }

    h2 {
        font-size: calc(${theme`fontSize.4xl`} - 0.25rem);
        margin-top: 1.625rem;
        ${tw`font-bold capitalize sm:text-5xl md:mt-5 md:text-6xl`};
        color: ${({ theme: { colors } }) => colors.blue[700]};
        line-height: 40px;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        h2 {
            line-height: 48px;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        h2 {
            line-height: 70px;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        h2 {
            margin-top: 1.875rem;
            font-size: 3.875rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        h2 {
            margin-top: 1.875rem;
            font-size: 4.375rem;
        }
    }
`
export const Form = styled.form`
    ${tw`
        shadow-md
        h-20 w-full flex
        items-center justify-between
        bg-white
    `};
    padding: 0.688rem;
    margin-top: 2.188rem;
    :focus-within {
        border-radius: 8px;
        ${tw`
            border-2
            border-orange-500
        `};
    }
    input {
        width: 70%;
        ${tw`
            h-full py-2.5
            pl-2 border-0
            text-orange-500
            placeholder:text-blue-700
            placeholder:font-normal
            placeholder:font-sans
            outline-none
            l:pl-7
            l:text-xl
        `};
        ::placeholder {
            ${tw`
                xs:text-md
                l:text-lg
            `};
            opacity: 60%;
            font-size: calc(${theme`fontSize.sm`} - 0.2rem);
        }
    }
    button {
        ${tw`
            h-full text-white flex items-center
            justify-center
            font-semibold text-lg bg-orange-500
            shadow-md
            focus:ring-2
            outline-none
            l:text-3xl
        `};
        border-top-left-radius: 2.25rem;
        width: 30%;
        :hover {
            background-color: ${shade(0.2, theme`colors.orange[500]`)};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 80%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 33.188rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 40rem;
        height: 5.625rem;
        button {
            div {
                border-top-left-radius: 3.75rem;
            }
            border-top-left-radius: 3.75rem;
            width: 12.5rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        width: 41.875rem;
        input {
            padding-left: 3.125rem;
        }
    }
`

export const LocalContact = styled.div`
    ${tw`
        h-16 w-full flex
        items-center l:mt-24
    `};
    margin-top: 3.125rem;
    grid-area: contact;

    a {
        ${tw`
            focus:ring-4
            text-white bg-orange-500
            no-underline font-medium capitalize
            shadow-sm
            h-full flex px-4 items-center justify-start
            l:mr-12 l:w-max l:text-xl
            xl:text-3xl
        `};
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        transition: 0.25s;
        span {
            ${tw`mr-4`};
            font-size: 0;
        }

        :hover {
            text-decoration: underline;
            background-color: ${shade(0.2, theme`colors.orange.500`)};
        }
    }
    button {
        ${tw`
            h-full text-white bg-green-400
            rounded-full
            ml-4 shadow-sm
            focus:ring-2
            outline-none
            w-full flex items-center justify-center
        `};
        width: 4.063rem;
        font-size: 0;

        :hover {
            background-color: ${shade(0.2, theme`colors.green.400`)};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        a {
            width: 61%;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 11.188rem;
    }
`
export const CarouselOverlay = styled.div`
    ${tw`
        my-8 relative w-full h-80
        flex items-center justify-center
        md:m-0
    `};
    grid-area: carousel;
`

export const CarouselContent = styled.div`
    ${tw`h-full w-max relative flex items-center justify-center`};
`

export const CarouselItem = styled(motion.div)`
    ${tw`
        h-full flex items-center justify-center
    `};
    z-index: 1;
    img {
        width: 33.563rem;
        border-radius: 2rem;
        padding: 0.5rem !important;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        img {
            width: 35.688rem;
        }
    }
`

export const CarouselBackground = styled(Background as any)`
    ${tw`
        top-0 left-0 absolute
        md:-top-20
    `};
    width: 18.813rem;
    height: 22.125rem;
    z-index: -2;

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 19.5rem;
        height: 28.063rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        height: 30rem;
    }
`

export const CarouselFooter = styled.footer`
    ${tw`
        w-full flex items-center
        justify-between absolute z-50
        -bottom-16 right-0
    `};

    @media ${({ theme: { bp } }) => bp.l} {
        bottom: -6.5rem;
    }
`

export const CarouselDots = styled.div`
    ${tw`
        flex items-center justify-center
    `};
    .active {
        ${tw`bg-orange-500 opacity-100`};
    }
`

export const Dot = styled.span`
    ${tw`
        w-2 h-2 bg-orange-100
        transform rotate-45 opacity-60
    `};
    & + & {
        ${tw`ml-4`};
    }
`

export const Arrows = styled.div<ArrowsProps>`
    ${tw`
        flex items-center justify-center
    `};
    button {
        ${tw`
            items-center bg-transparent
            h-16 w-16 flex justify-center
            rounded-full outline-none focus:ring-2 focus:ring-orange-500
        `};
        & + button {
            ${tw`ml-4`};
        }
        transition: 0.25s;
        :first-of-type {
            cursor: ${({ hasPrevious }) =>
                !hasPrevious ? 'no-drop' : 'pointer'};
            opacity: ${({ hasPrevious }) => (!hasPrevious ? 0.5 : 1)};
        }
        :last-of-type {
            cursor: ${({ hasNext }) => (!hasNext ? 'no-drop' : 'pointer')};
            opacity: ${({ hasNext }) => (!hasNext ? 0.5 : 1)};
        }
        :hover {
            svg {
                circle {
                    transition: 0.25s;
                    stroke: ${({ theme: { colors } }) =>
                        shade(0.2, colors.white)};
                }
                path {
                    transition: 0.25s;

                    fill: ${({ theme: { colors } }) =>
                        shade(0.2, colors.white)};
                }
            }
        }
    }
`
