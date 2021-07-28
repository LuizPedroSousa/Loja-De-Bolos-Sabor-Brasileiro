import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'
import Background from '../../../../../public/images/carousel-background.svg'
import { shade } from 'polished'

interface ArrowsProps {
    hasNext: boolean
    hasPrevious: boolean
}

export const Wrapper = styled.div`
    ${tw`
        relative w-full h-80
        flex items-center justify-center

    `};
    grid-area: carousel;

    @media ${({ theme: { bp } }) => bp.sm} {
        height: 24rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        height: 28rem;
    }
`

export const CarouselContent = styled.div`
    ${tw`w-max relative flex items-center justify-center`};
`

export const CarouselItem = styled(motion.div)`
    ${tw`
        flex items-center justify-center
        overflow-hidden relative h-56
        sm:(mx-auto h-72)
        md:(max-w-sm)
    `};
    z-index: 1;
    width: 100vw;
    border-radius: 2rem;

    img {
        border-radius: 2rem;
        padding: 0.5rem !important;
        ${tw`w-full h-full absolute`};
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        max-width: 32rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 42rem;
        height: 22rem;
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        width: 35.688rem;
    }
    @media ${({ theme: { bp } }) => bp.l} {
        width: 35.688rem;
    }
`

export const CarouselBackground = styled(Background as any)`
    ${tw`
        top-4 left-0 absolute
        h-72 sm:top-10 md-3:(-left-5)
        l:(-top-2.5 -left-16)
    `};
    width: 100vw;
    z-index: -10;

    @media ${({ theme: { bp } }) => bp.sm} {
        height: 19rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        height: 25rem;
    }

    @media ${({ theme: { bp } }) => bp['md-3']} {
        width: 25vw;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        height: 30rem;
    }
`

export const CarouselFooter = styled.footer`
    ${tw`
        w-full flex items-center
        justify-between absolute z-50
        -bottom-20 right-0 px-4
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        right: 50%;
        transform: translateX(50%);
    }

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

export const Dot = styled.button`
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
            h-12 w-12 flex justify-center
            rounded-full outline-none focus:ring-2 focus:ring-orange-500
        `};
        & + button {
            ${tw`ml-4 l:ml-6`};
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
                        shade(0.1, colors.white)};
                }
                path {
                    transition: 0.25s;

                    fill: ${({ theme: { colors } }) =>
                        shade(0.1, colors.white)};
                }
            }
        }
    }
`
