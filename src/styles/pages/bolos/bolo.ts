import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
export const Container = styled.div`
    ${tw`
        relative mb-10 w-full mt-8
        sm:(grid items-baseline gap-x-4)
        xs:px-4 md-3:px-0 grid l:mt-10
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-columns: 1.25fr 1fr;
        grid-template-areas: 'cake-photos cake-info';
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-width: 94%;
        ${tw`
            mx-auto
        `};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 88%;

        ${tw`
            px-5
        `};
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 4.813rem;
    }
`

export const CakePhotosSection = styled.section`
    ${tw`
        flex items-start relative w-full
        sm:(grid gap-x-2 mb-auto)
    `};
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-photos;

        grid-template-columns: 0.2fr 1fr;
        grid-template-areas: 'small large';
    }
`

export const CakeInfoSection = styled.section`
    ${tw`
        w-full mx-auto
    `}
    max-width: 94%;
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: cake-info;
    }
`

export const CakeInfoTitle = styled.div`
    ${tw`
        flex flex-col items-start justify-center
        w-full mt-2 border-b-2 border-gray-400
        pb-2
    `}
    border-bottom-width: 1px;
    strong {
        ${tw`
            text-xl text-gray-800
        `}
    }
`
export const Stars = styled.div`
    ${tw`
        flex items-center justify-center my-1
    `}
    svg {
        ${tw`text-lg`}
    }
    span {
        ${tw`ml-2 text-gray-600`}
    }
`

export const CakeInfoBest = styled.div`
    ${tw`
        w-36 h-10 bg-orange-500 bg-opacity-50
        border-2 border-orange-100 rounded-lg
        flex justify-between items-center p-2
        mt-1
    `}
    strong {
        ${tw`
            text-white capitalize font-inter
            font-semibold
        `}
        max-width: 70%;
        font-size: calc(${theme`fontSize.sm`} - 0.1rem);
    }
`

export const CakeInfoPrice = styled.div`
    ${tw`
        items-center justify-center
        flex-col mt-1
    `}
    p {
        ${tw`
            font-sans text-md text-center
            text-gray-800 capitalize mt-2
        `}
        strong {
            ${tw`
                text-orange-500 font-roboto sm:text-2xl
            `}
        }
    }
`

export const CakeInfoIngredients = styled.div`
    ${tw`w-full mt-2.5`}
    strong {
        ${tw`
            text-xl text-gray-800
        `}
    }
    ul {
        ${tw`mt-1.5 w-full`}
        li {
            ${tw`flex items-center w-full justify-start`}
            & + li {
                ${tw`mt-1.5 sm:mt-2`}
            }
            span {
                ${tw`w-4 h-4 flex items-center justify-center mr-2 text-orange-500 l:mb-1`}
            }
            p {
                ${tw`
                    text-md capitalize font-description-variant
                    font-semibold text-gray-700
                `}
                max-width: 80%;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        ul {
            li {
                p {
                    max-width: 70%;
                }
            }
        }
    }
    @media ${({ theme: { bp } }) => bp['md-3']} {
        ul {
            li {
                p {
                    max-width: 60%;
                }
            }
        }
    }
`
