import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
import { Spinner as ChakraSpinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface DeliveryOptionsReceiveAtHomeProps {
    isError: boolean
    isSuccess: boolean
}

export const Container = styled.div`
    ${tw`
        relative mb-10 w-full mt-8
        sm:(grid items-baseline gap-x-4)
        xs:px-4 md-3:px-0 grid l:mt-10
    `};

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-columns: 1.25fr 1fr;
        grid-template-areas:
            'cake-photos cake-info'
            'cake-photos delivery-options';
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
        w-full mt-2 border-b-2 border-gray-700 border-opacity-25
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

export const CakeInfoShop = styled.div`
    ${tw`
        w-full grid
        h-14 gap-x-2 my-4
        sm:gap-x-3 l:gap-x-4
        l:(mb-6)
    `}
    border-bottom-width: 1px;
    grid-template-columns: 0.25fr 1fr;
    button {
        ${tw`
            w-full h-full flex items-center justify-center
            border-2 text-xl rounded-md font-medium text-white py-3.5
            font-sans duration-100 sm:py-2.5 md:py-4 l:py-3
        `}
        :nth-of-type(1) {
            ${tw`
                border-red-400 bg-red-400 text-2xl
                hover:(border-red-100 bg-red-500)
                focus:(bg-white text-red-500 ring-2 border-0 ring-red-500)

            `}
        }
        :nth-of-type(2) {
            ${tw`
                bg-orange-500 hover:(bg-orange-700 border-orange-100)
                focus:(ring-2 border-0 bg-white text-orange-500 ring-orange-500)
            `};
        }
    }
    @media ${({ theme: { bp } }) => bp.md} {
        grid-template-columns: 0.22fr 1fr;
    }
    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 4rem 1fr;
    }
`

export const CakeInfoIngredients = styled.div`
    ${tw`
        w-full mt-2.5  border-t-2 border-gray-700 border-opacity-25
        pt-2
    `}
    border-top-width: 1px;
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
                max-width: 90%;
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

export const CakeDeliveryOptionsSection = styled.section`
    ${tw`
        w-full mx-auto mt-4 border-t-2 border-gray-700
        border-opacity-25
        pt-2
    `}
    border-top-width: 1px;
    max-width: 94%;
    @media ${({ theme: { bp } }) => bp.sm} {
        grid-area: delivery-options;
    }
    > strong {
        ${tw`
            mt-2
            text-xl text-gray-800 font-sans
        `}
    }
`

export const DeliveryOptionsPickUpAtStore = styled.div`
    ${tw`
        w-full flex items-center justify-between
        mt-2 relative mb-4
        after:(content absolute -bottom-3 bg-gray-700 bg-opacity-25)

    `}
    :after {
        height: 1px;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
    }
    div {
        max-width: 58%;
        > strong {
            ${tw`
                text-gray-800 text-md font-semibold
                font-sans
            `};
        }
        p {
            ${tw`
                text-gray-700 font-medium font-sans
            `}
            line-height: 140%;
            strong {
                ${tw`font-bold text-gray-800`}
            }
        }
    }
    a {
        ${tw`
            w-max bg-orange-500
            duration-100 h-10 px-4 py-5 rounded-md
            text-white font-sans font-medium
            hover:(border-2 border-orange-100 bg-orange-700)
            focus:(text-orange-700 border-2 border-orange-500 bg-white)
            flex items-center justify-center
            md-3:(text-md)
        `}
    }
`

export const DeliveryOptionsReceiveAtHome = styled.fieldset<DeliveryOptionsReceiveAtHomeProps>`
    ${tw`
        w-full flex flex-col
        items-center justify-start mt-2.5
    `};
    legend {
        ${tw`
            text-gray-800 text-md font-semibold
            font-sans
        `}
    }
    p {
        ${tw`
            font-sans text-gray-700 mr-auto font-medium
        `}
        line-height: 140%;
    }
    .warning-success {
        ${tw`mr-auto mt-2`}
    }
    form {
        ${tw`
            flex justify-start
            h-10
            items-center w-full mt-2
        `}
        input,button {
            ${tw`h-full rounded-md p-2`}
        }
        input {
            ${tw`
                outline-none w-28
                font-sans text-gray-700 font-medium
                focus:(ring-2 ring-orange-500)
                placeholder:(font-sans text-orange-100 font-medium)
            `}
        }
        button {
            ${tw`
                ml-2 w-max bg-orange-500
                duration-100 flex items-center justify-center
                text-white font-sans font-medium
                hover:(border-2 border-orange-100 bg-orange-700)
                focus:(text-orange-700 border-2 border-orange-500 bg-white)
            `}
            ${({ isError }) =>
                isError &&
                tw`
                    bg-white text-red-500 border-2 border-red-300
                    hover:(border-red-100 bg-red-500 text-white!)
                    focus:(border-0 ring-2 ring-red-200 bg-red-500 text-white)
                `};
            ${({ isError }) =>
                isError &&
                `
                    :hover{
                        span{
                            color: #fff !important;
                        }
                    }
                `};

            ${({ isSuccess }) =>
                isSuccess &&
                tw`
                    bg-white text-green-500 border-2 border-green-300
                    hover:(border-green-300 bg-green-500 text-white)
                    focus:(border-0 ring-2 ring-green-200 bg-green-500 text-white)

            `};
        }
    }
    a {
        ${tw`
            mr-auto text-orange-500 mt-2 underline
            transition-colors duration-200
            hover:(text-orange-700)
        `}
    }
`

export const ConsultSpinner = styled(ChakraSpinner)`
    ${tw`ml-1.5 flex w-4! h-4! my-auto`}
`

export const ConsultSuccess = styled(motion.span)`
    ${tw`
        ml-1.5 flex w-5 h-5 my-auto
        items-center justify-center
        rounded-full border-2 border-green-100
        text-white bg-green-300
    `};
    border-width: 1px;
`

export const ConsultError = styled(ConsultSuccess)`
    ${tw`
        bg-transparent border-0 text-red-500
    `}
`

export const CakeRatingSection = styled.section`
    ${tw`w-full mt-6 mx-auto`};
    max-width: 94%;
`

export const CakeRatingTitle = styled.div`
    ${tw`
        w-full flex items-center justify-center
        flex-col
    `};

    h2 {
        ${tw`
            text-gray-800 text-lg capitalize relative
            after:(left-0)
            before:(right-0)
            font-bold w-full text-center
        `};
        :after,
        :before {
            ${tw`content absolute bg-gray-600`};
            top: 50%;
            height: 1px;
            transform: translateY(-50%);
            width: 6%;
        }
    }
    > div {
        ${tw`
                flex items-center justify-center
                flex-col mt-2
            `}
        > strong {
            ${tw`
                text-3xl font-bold uppercase
                text-center
            `};
        }
        > p {
            ${tw`mt-2`};
        }
        & + div {
            ${tw`
                mt-2
            `};
        }
        :last-of-type {
            ${tw`
                leading-5 mt-4
            `};
        }
    }
`

export const CakeRatingsStars = styled.div`
    ${tw`
        flex items-center justify-center
        w-full
    `};
    height: max-content;
`
