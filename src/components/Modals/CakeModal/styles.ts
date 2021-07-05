import styled from 'styled-components'
import { ModalContent as ChakraModalContent } from '@chakra-ui/react'
import tw, { theme } from 'twin.macro'

export const ModalContent = styled(ChakraModalContent).attrs({
    bg: 'white',
    mt: '2',
    m: { md: '0' },
    borderTopRadius: { base: '3xl', md: 'xl' },
    borderBottomRadius: { base: '2xl', md: 'xl' },
    maxW: { base: '600px', sm: '550px', md: '880px' },
    maxH: { sm: '550px' }
})`
    ${tw`
        mx-2 overflow-hidden border-2
        border-gray-100 sm:m-0 sm:h-full
    `};
    header {
        ${tw`
            absolute z-10 right-0
            md:relative md:pb-0
        `};
    }

    footer {
        ${tw`
            grid justify-center items-center
            grid-cols-2 mt-3 pb-0
            pt-2 md:justify-between
            md:pt-0 md:pb-4 md:px-4
            md:gap-x-6
        `};
        grid-template-areas:
            'stars price'
            'link link';
    }

    @media ${({ theme: { bp } }) => bp.md} {
        ${tw`grid`}
        grid-template-columns: 1.2fr 1fr;
        > div {
            ${tw`grid overflow-hidden  gap-x-6`};
            grid-template-columns: 1.2fr 1fr;
        }
        footer {
            grid-template-columns: 1.2fr 1fr;
            grid-template-areas: 'operator link';
        }
    }
`

export const CakePrice = styled.span`
    grid-area: price;
    ${tw`
        font-inter font-semibold text-xl
        pr-4 ml-auto md:bottom-0
        md:right-0 md:absolute
    `};
`

export const Stars = styled.div`
    ${tw`
        flex items-center justify-between
        pl-4 mr-auto md:absolute
        md:p-0 md:bottom-0 md:left-0
    `};
    grid-area: stars;
    span {
        ${tw`
            text-md ml-2 font-cake-variant
            text-center mt-1
        `};
    }
`

export const SeeCake = styled.div`
    grid-area: link;
    ${tw`
        w-full h-16 mt-5 flex
        border-t-2 border-gray-400
        items-center justify-center
        md:m-0 md:border-0
    `};
    a {
        ${tw`
        w-full h-full bg-orange-500
        flex items-center justify-center
        text-white font-medium font-inter
        capitalize text-xl hover:bg-orange-700
        md:shadow-md  md:rounded-lg
    `};
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-8 h-8 rounded-md border-none
        bg-orange-500 focus:ring-2 flex
        text-xl items-center justify-center
        outline-none text-white ml-auto
    `};
`

export const Thumb = styled.div`
    ${tw`
        rounded-md overflow-hidden max-h-60
        bg-gray-600 md:flex md:max-h-full
        md:items-center md:justify-center
        md:mx-auto md:mb-auto md:ml-4
        md:mr-1 relative
    `};
    img {
        ${tw`
            w-full
        `};
    }

    span {
        ${tw`
            w-8 h-8 rounded-full
            absolute top-2
            right-2 flex items-center
            justify-center shadow-md

        `};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-height: 80%;
    }
`

export const Info = styled.div`
    ${tw`
        flex flex-col items-start
        justify-center mt-4 px-4
        w-full
        relative md:overflow-y-scroll
        md:justify-start md:mt-0 md:px-0
    `};
    strong {
        font-size: calc(${theme`fontSize.3xl`} - 0.25rem);
        ${tw`
            capitalize text-gray-900 whitespace-nowrap
            md:absolute md:top-0
        `};
    }
    p {
        ${tw`
            leading-5 mt-2 sm:max-w-sm
            md:mt-12
        `};
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
        w-full bg-orange-500 hover:bg-orange-700
        text-white font-inter font-bold
        rounded-lg border-0 focus:ring-2
        h-full ml-auto
        md:shadow-2xl
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
