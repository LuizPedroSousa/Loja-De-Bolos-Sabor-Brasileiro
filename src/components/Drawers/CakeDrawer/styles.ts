import styled from 'styled-components'
import tw from 'twin.macro'
import { DrawerContent as ChakraDrawerContent } from '@chakra-ui/react'

export const DrawerContent = styled(ChakraDrawerContent)`
    ${tw`
        w-full p-0 bg-transparent
    `};

    > header {
        ${tw`
            w-full h-16 items-center
            flex justify-end p-6 bg-transparent
        `};
    }

    > div {
        ${tw`px-0 pb-16`};
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-8 h-8 border-2 flex items-center justify-center
        border-red-500 text-red-500 rounded-md
        hover:(border-red-400 bg-red-500 text-white)
    `};
`

export const CakePhotos = styled.div`
    ${tw`
        w-full flex items-center justify-center
        h-64 relative
    `};
    .swiper-slide {
        ${tw`w-full! h-full mb-6`};
    }
`

export const CakePhotosDots = styled.div`
    ${tw`
        flex items-center justify-center
        absolute -bottom-2
    `};

    button {
        ${tw`
            w-2 h-2 bg-orange-500
            opacity-60
        `};
        right: 50%;
        transform: translateX(50%) rotate(45deg);
    }
`

export const CakeInfo = styled.section`
    ${tw`
        w-full flex items-start px-6
        flex-col justify-start mt-4

    `};

    height: max-content;

    header {
        ${tw`
            flex items-start justify-start
            flex-col w-full
        `};
        strong {
            ${tw`
                text-2xl text-gray-800 leading-7
            `};
        }
        p {
            ${tw`
                mt-2
            `};
        }
        div {
            ${tw`
                flex items-center justify-between
                mt-2
            `};
            strong {
                ${tw`
                    text-orange-500
                `};
            }
        }
    }
`

export const CakeIngredients = styled.div`
    ${tw`
        w-full mt-4
    `}

    strong {
        ${tw`
            text-2xl text-gray-800 leading-7
        `};
    }
    ul {
        ${tw`
            flex items-start justify-center
            flex-col mt-2
        `};
        li {
            ${tw`flex items-center`}
            span {
                ${tw`w-4 h-4 mr-2 text-orange-500`};
            }
            p {
                ${tw`

                `};
            }

            & + li {
                ${tw`
                    mt-2
                `};
            }
        }
    }
`

export const PriceFixed = styled.div`
    ${tw`
        fixed bottom-0 left-0
        w-full h-16 bg-white
        flex items-center
        p-2 md:relative md:py-0
        md:p-0
    `};
    z-index: 9999;
    box-shadow: 0 -5px 9px 0 rgb(51 41 39 / 9%);
    @media ${({ theme: { bp } }) => bp.md} {
        box-shadow: none;
        grid-area: operator;
    }
`

export const AddToCart = styled.button`
    ${tw`
        w-full bg-orange-500
        text-white font-inter font-bold
        rounded-lg border-0 focus:(ring-2 border-0 ring-orange-500)
        h-full ml-auto transition-colors
        hover:(shadow-2xl border-2  border-orange-100 bg-orange-700)
    `};
    max-width: 11.875rem;
    grid-area: button;
    outline: 0 !important;
`

export const AmountControls = styled.div`
    ${tw`
        w-56 flex items-center
        justify-between border-2 border-gray-300
        p-1 rounded-md h-full
        md:p-2
    `};
    max-width: 40%;
    div {
        span {
            ${tw`
                text-md font-inter font-medium
            `};
        }
        input {
            ${tw`
                w-12 px-2
            `};
            overflow: hidden !important;
        }
    }

    button {
        ${tw`
            w-9 h-full rounded-md
            flex items-center justify-center
            border-2 border-gray-300 focus:ring-2
            hover:border-white transition-colors
            outline-none md:w-12
        `};
        :first-of-type {
            ${tw`
                text-red-400 hover:text-white hover:bg-red-400
            `};
        }
        :last-of-type {
            ${tw`
                text-green-400 hover:text-white hover:bg-green-400

            `};
        }
    }
`
