import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled.div`
    ${tw`
        flex justify-end
        items-center flex-col relative
        bg-white shadow-md
        md:h-full transition-colors
        hover:shadow-lg focus-within:(border-2 border-orange-100)
    `};
    height: 16.125rem;
    border-top-left-radius: 1.063rem;
    border-top-right-radius: 1.063rem;
    border-bottom-left-radius: 2.188rem;
    border-bottom-right-radius: 2.188rem;

    :focus-within {
        img {
            ${tw`ring-2 ring-orange-100`};
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        :nth-of-type(1),
        :nth-of-type(2) {
            img {
                width: 11.375rem;
                height: 11.375rem;
            }
        }

        :nth-of-type(3),
        :nth-of-type(4) {
            bottom: 4.5em;
            img {
                width: 10.625rem;
                height: 10.625rem;
            }
        }

        :nth-of-type(1) {
            grid-area: first;
        }
        :nth-of-type(2) {
            grid-area: second;
        }
        :nth-of-type(3) {
            grid-area: third;
        }
        :nth-of-type(4) {
            grid-area: four;
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        :nth-of-type(1),
        :nth-of-type(2) {
            strong {
                font-size: calc(${theme`fontSize.2xl`} + 0.25rem);
            }
            img {
                width: 14.375rem;
                height: 14.375rem;
            }
        }
        :nth-of-type(3),
        :nth-of-type(4) {
            bottom: 6em;
            strong {
                font-size: calc(${theme`fontSize.2xl`} + 0.2rem);
            }
            img {
                width: 13.625rem;
                height: 13.625rem;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        :nth-of-type(1),
        :nth-of-type(2) {
            strong {
                font-size: calc(${theme`fontSize.2xl`} + 0.3rem);
            }
        }
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        :nth-of-type(1),
        :nth-of-type(2) {
            img {
                width: 19.375rem;
                height: 19.375rem;
            }
        }
        :nth-of-type(3),
        :nth-of-type(4) {
            img {
                width: 15rem;
                height: 15rem;
            }
        }
    }
`

export const Content = styled.div`
    ${tw`
        bg-orange-500 w-full h-full
        flex border-white justify-end items-center
        flex-col relative overflow-hidden pb-4
        md:pb-6
    `};

    border-width: 6px;

    border-top-left-radius: 1.063rem;
    border-top-right-radius: 1.063rem;

    strong {
        ${tw`
            font-medium text-2xl text-white
        `};
    }
`

export const Avatar = styled.div`
    ${tw`
        absolute -top-20 overflow-hidden

    `};
    z-index: 1;
    img {
        border: 2px solid ${({ theme: { colors } }) => colors.white} !important;
        width: 11.625rem;
        height: 11.625rem;
        border-radius: 50%;
        ${tw`transition-colors`};
    }
`

export const SeeProfile = styled.button`
    ${tw`
        w-full h-20 font-sans text-2xl font-medium
        flex items-center justify-center
        text-blue-700 bg-white
        overflow-hidden
        outline-none transition-colors
        focus:(ring-2 ring-orange-100 text-orange-100)
        md-3:h-24 hover:(border-2 border-orange-100 bg-orange-500 text-white)
    `};

    border-bottom-left-radius: 2.188rem;
    border-bottom-right-radius: 2.188rem;
`
