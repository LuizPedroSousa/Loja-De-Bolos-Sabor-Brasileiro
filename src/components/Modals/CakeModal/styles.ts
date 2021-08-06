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
        border-gray-100 m-0 h-full
        grid
    `};

    grid-template-columns: 1.2fr 1fr;
    header {
        ${tw`
           z-10 right-0
           relative pb-0
        `};
    }

    > div {
        ${tw`grid overflow-hidden  gap-x-6`};
        grid-template-columns: 1.2fr 1fr;
    }
    footer {
        ${tw`
            grid items-center
            grid-cols-2 mt-3
            justify-between
            pt-0 pb-4 px-4
            gap-x-6
        `};

        grid-template-areas: 'operator link';
        grid-template-columns: 1.2fr 1fr;
    }
`

export const CakePrice = styled.span`
    grid-area: price;
    ${tw`
        font-inter font-semibold text-xl
        mt-2
        mr-auto text-gray-800
    `};
`

export const Stars = styled.div`
    ${tw`
        flex items-center justify-between
        mr-auto text-sm! mt-1
        p-0
    `};
    grid-area: stars;
    p {
        ${tw`
            ml-1 font-inter font-bold
            text-center text-gray-700
            tracking-wider my-0!
        `};
    }
`

export const SeeCake = styled.div`
    grid-area: link;
    ${tw`
        w-full h-16 mt-5 flex
        border-t-2 border-gray-400
        items-center justify-center
        m-0 border-0
    `};
    a {
        ${tw`
            w-full h-full bg-orange-500
            flex items-center justify-center
            text-white font-medium font-inter
            capitalize text-xl
            rounded-lg
            hover:(bg-orange-700 shadow-xl border-2 border-orange-500)
            focus:(ring-2 border-0 ring-orange-500)
       `};
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-8 h-8 rounded-md border-none
        bg-orange-500 flex
        text-xl items-center justify-center
        outline-none text-white ml-auto
        hover:(border-2 border-orange-500 bg-orange-700)
        focus:(ring-2 ring-orange-500 border-white)
    `};
`

export const Thumb = styled.div`
    ${tw`
        rounded-md overflow-hidden
        bg-gray-600 flex max-h-full
        items-center justify-center
        mx-auto mb-auto ml-4
        mr-1 relative
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
            justify-center bg-transparent

        `};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        max-height: 80%;
    }
`

export const Info = styled.div`
    ${tw`
        flex flex-col items-start
        w-full
        relative overflow-y-scroll
        justify-start mt-0 pr-2
    `};
    > strong {
        font-size: calc(${theme`fontSize.3xl`} - 0.25rem);
        ${tw`
            capitalize text-gray-900
            top-0
            leading-8
        `};
    }
    p {
        ${tw`
            leading-5
            mt-2 font-medium
        `};
        max-width: 90%;
    }
`

export const CakeIngredients = styled.div`
    ${tw`
        flex items-start justify-start w-full
        flex-col mt-2
    `};
    strong {
        ${tw`text-xl text-gray-800`};
    }
    ul {
        ${tw`
        `};
        li {
            ${tw`flex items-center justify-start`};
            span {
                ${tw`
                    w-3 h-3 text-orange-500 mr-2
                `};
            }
            p {
                ${tw`
                    capitalize font-medium
                `};
            }
        }
    }
`

export const PriceFixed = styled.div`
    ${tw`
        bottom-0 left-0
        w-full h-16 bg-white
        flex items-center
        relative py-0
        p-0
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
            h-full rounded-md
            flex items-center justify-center
            border-2 border-gray-300 focus:ring-2
            transition-colors
            outline-none w-12
        `};
        :first-of-type {
            ${tw`
                text-red-400
                hover:(text-white bg-red-400 border-red-300)
                focus:(ring-red-400 bg-red-500 text-white)
            `};
        }
        :last-of-type {
            ${tw`
                text-green-400
                hover:(text-white bg-green-400 border-green-300)
                focus:(text-white bg-green-500 border-green-300 ring-green-400)
            `};
        }
    }
`
